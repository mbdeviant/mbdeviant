export type Project = {
  id: string;
  image: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
};

export type LearnMore = {
  id: string;
  title: string;
  overview: string;
  insights: string;
  buildNotes: {
    first: string;
    second?: string;
    third?: string;
    fourth?: string;
    fifth?: string;
  };
  tldr: {
    first: string;
    second?: string;
    third?: string;
    fourth?: string;
    fifth?: string;
  };
  codebaseLink?: string;
  screenShots?: string[];
};
