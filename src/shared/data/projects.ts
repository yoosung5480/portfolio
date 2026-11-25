export const projectDirectory = [
  { slug: 'hai', title: 'HAI 딥페이크 감지' },
  { slug: 'speaknote', title: 'SpeakNote' },
  { slug: 'open-source', title: 'AutoFineTuner' },
  { slug: 'sunghyun-accounting', title: '성현회계법인' },
  { slug: 'undertone', title: 'UnderTone' },
] as const;

export type ProjectSlug = (typeof projectDirectory)[number]['slug'];
