import type { ProjectImage } from './types';
import styles from './OpenSource.module.css';

export function ProjectFigure({ image, caption }: { image: ProjectImage; caption: string }) {
  return <figure className={styles.figure}>
    <a href={image.src} target="_blank" rel="noreferrer" aria-label={`${image.alt} · 원본 크기로 보기 (새 창)`}>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}
