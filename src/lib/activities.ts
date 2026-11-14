import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const ACTIVITIES_DIR = path.join(process.cwd(), "activities");

export interface DataFile {
  filename: string;
  display_name: string;
  type: string;
  role: string;
}

export interface ActivityConfig {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  domain: string;
  duration_minutes: number;
  ai_tool: string;
  difficulty: string;
  phases: number;
  plugins: string[];
  skill_chain: string[];
  data_files: DataFile[];
  learning_objectives: string[];
  deliverable: string;
}

export interface PhaseContent {
  scenario?: string;
  context?: string;
  plugin?: string;
  doThis?: string;
  prompt?: string;
  prompt2?: string;
  skillChain?: string;
  checkpoint?: string;
  tip?: string;
  revealGood?: string;
  revealTakeaway?: string;
}

export interface PhaseInfo {
  number: number;
  key: string;
  title: string;
  subtitle: string;
  content: PhaseContent;
}

export interface Activity {
  config: ActivityConfig;
  folderName: string;
  phases: PhaseInfo[];
}

const PHASE_FILES = [
  { key: "brief", file: "brief.md", number: 1, defaultTitle: "Scenario Brief" },
  { key: "web_research", file: "web_research.md", number: 2, defaultTitle: "Web Research" },
  { key: "file_analysis", file: "file_analysis.md", number: 3, defaultTitle: "File Analysis" },
  { key: "folder_data", file: "folder_data.md", number: 4, defaultTitle: "Folder Data" },
  { key: "skills", file: "skills.md", number: 5, defaultTitle: "Skills Chain" },
  { key: "humanize", file: "humanize.md", number: 6, defaultTitle: "Humanize" },
];

async function mdToHtml(md: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(html, { sanitize: false }).process(md);
  return result.toString();
}

function readFileIfExists(filePath: string): string | null {
  try { return fs.readFileSync(filePath, "utf-8"); } catch { return null; }
}

function parsePhaseMd(raw: string): { title: string; subtitle: string; sections: Record<string, string> } {
  const lines = raw.replace(/^﻿/, "").split("\n");
  let title = "";
  let subtitle = "";
  const sections: Record<string, string> = {};
  let currentSection = "";
  let currentLines: string[] = [];

  for (const line of lines) {
    if (line.startsWith("# ") && !title) { title = line.replace("# ", "").trim(); continue; }
    if (line.startsWith("> ") && !subtitle && !currentSection) { subtitle = line.replace("> ", "").trim(); continue; }
    if (line.startsWith("## ")) {
      if (currentSection) sections[currentSection] = currentLines.join("\n").trim();
      currentSection = line.replace("## ", "").trim();
      currentLines = [];
      continue;
    }
    if (currentSection) currentLines.push(line);
  }
  if (currentSection) sections[currentSection] = currentLines.join("\n").trim();
  return { title, subtitle, sections };
}

async function convertSections(sections: Record<string, string>): Promise<PhaseContent> {
  const content: PhaseContent = {};
  if (sections.scenario) content.scenario = await mdToHtml(sections.scenario);
  if (sections.context) content.context = await mdToHtml(sections.context);
  if (sections.plugin) content.plugin = sections.plugin.trim();
  if (sections.do_this) content.doThis = await mdToHtml(sections.do_this);
  if (sections.prompt) content.prompt = sections.prompt.trim();
  if (sections.prompt_2) content.prompt2 = sections.prompt_2.trim();
  if (sections.skill_chain) content.skillChain = sections.skill_chain.trim();
  if (sections.checkpoint) content.checkpoint = await mdToHtml(sections.checkpoint);
  if (sections.tip) content.tip = await mdToHtml(sections.tip);
  if (sections.reveal_good) content.revealGood = await mdToHtml(sections.reveal_good);
  if (sections.reveal_takeaway) content.revealTakeaway = await mdToHtml(sections.reveal_takeaway);
  return content;
}

async function loadActivity(folderName: string): Promise<Activity | null> {
  const dir = path.join(ACTIVITIES_DIR, folderName);
  const configRaw = readFileIfExists(path.join(dir, "config.json"));
  if (!configRaw) return null;
  const config: ActivityConfig = JSON.parse(configRaw);

  const phases: PhaseInfo[] = [];
  const phaseFilesToLoad = PHASE_FILES.slice(0, config.phases || PHASE_FILES.length);

  for (const pf of phaseFilesToLoad) {
    const raw = readFileIfExists(path.join(dir, pf.file));
    if (!raw) {
      phases.push({ number: pf.number, key: pf.key, title: pf.defaultTitle, subtitle: "", content: {} });
      continue;
    }
    const { title, subtitle, sections } = parsePhaseMd(raw);
    const content = await convertSections(sections);
    phases.push({ number: pf.number, key: pf.key, title: title || pf.defaultTitle, subtitle, content });
  }

  return { config, folderName, phases };
}

export async function getActivities(): Promise<Activity[]> {
  const folders = fs.readdirSync(ACTIVITIES_DIR).filter((entry) => {
    const full = path.join(ACTIVITIES_DIR, entry);
    return fs.statSync(full).isDirectory() && entry.startsWith("activity_");
  });
  const activities = (await Promise.all(folders.map(loadActivity))).filter(Boolean) as Activity[];
  return activities.sort((a, b) => {
    const numA = parseInt(a.config.id.replace("activity_", ""), 10);
    const numB = parseInt(b.config.id.replace("activity_", ""), 10);
    return numA - numB;
  });
}

export async function getActivityBySlug(slug: string): Promise<Activity | null> {
  const activities = await getActivities();
  return activities.find((a) => a.config.slug === slug) ?? null;
}
