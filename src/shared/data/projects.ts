export const projectDirectory = [
  { slug: 'hai', title: 'HAI 딥페이크 감지' },
  { slug: 'speaknote', title: 'SpeakNote' },
  { slug: 'open-source', title: 'AutoFineTuner' },
] as const;

export type ProjectSlug = (typeof projectDirectory)[number]['slug'];
