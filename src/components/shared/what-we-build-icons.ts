import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Database,
  Workflow,
  FileText,
  Headphones,
  BookOpen,
  Boxes,
  ShieldHalf,
  Activity,
  Cpu,
  BrainCircuit,
} from "lucide-react";

export type WhatWeBuildIconKey =
  | "assistant"
  | "rag"
  | "agent"
  | "workflow"
  | "document"
  | "support"
  | "knowledge"
  | "data"
  | "security"
  | "monitor"
  | "system";

export const whatWeBuildIconMap: Record<WhatWeBuildIconKey, LucideIcon> = {
  assistant: Bot,
  rag: Database,
  agent: BrainCircuit,
  workflow: Workflow,
  document: FileText,
  support: Headphones,
  knowledge: BookOpen,
  data: Boxes,
  security: ShieldHalf,
  monitor: Activity,
  system: Cpu,
};
