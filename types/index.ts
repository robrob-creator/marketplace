export type ErrorProps = {
  name?: string;
  errorMessage?: string;
};

export type Catalog = {
  id: string;
  name: string;
  photo: string;
  category: string;
  platform: string;
  techStack: string;
  description: string;
  summary: string;
  latestUpdates: string;
  price: number;
  rating: number;
  standing: number;
  installed: number;
  demoURL: string;
  developer: string;
  language: string;
  size: number;
};
