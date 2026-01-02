export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  nickname?: string;
  title: string;
  bio: string;
  avatar?: string;
  email: string;
  location?: string;
  social: SocialLink[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  keywords?: string[];
}
