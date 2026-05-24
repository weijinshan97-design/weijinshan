export interface NavItem {
  label: string;
  href: string;
}

export interface Problem {
  id: string;
  category: string;
  problem: string;
  solution: string;
  impact?: string;
  image?: string;
}

export interface Work {
  slug: string;
  titleZh: string;
  titleEn: string;
  client: string;
  category: string;
  year: string;
  cover: string;
  summaryZh: string;
  problemZh: string;
  approachZh: string;
  resultZh: string;
  images: string[];
  videoUrl?: string;
  tagsZh: string[];
  highlights?: { label: string; content: string }[];
}

export interface SystemMedia {
  type: "image" | "video";
  src: string;
  caption?: string;
}

export interface SubPoint {
  title: string;
  description: string;
}

export interface SystemItem {
  id: string;
  nameZh: string;
  descriptionZh: string;
  problemZh: string;
  methodZh: string;
  resultZh: string;
  media: SystemMedia[];
  link?: string;
  videoUrl?: string;
  problemPoints?: SubPoint[];
  methodPoints?: SubPoint[];
  resultPoints?: SubPoint[];
}

export interface ThinkingEntry {
  slug: string;
  titleZh: string;
  date: string;
  summaryZh: string;
  contentZh: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  tags: string;
  description: string;
  detail: string[];
  achievements: string[];
}

export interface AboutData {
  name: string;
  role: string;
  summary: string;
  experience: Experience[];
  capabilities: string[];
  education: {
    school: string;
    major: string;
  };
  contact: {
    phone: string;
    email: string;
  };
}
