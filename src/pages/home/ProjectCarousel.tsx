import { Link } from 'react-router';
import { ProjectCover } from '../../shared/ui/project-cover/ProjectCover';
import type { CarouselControls, ProjectCard } from './types';
import s from './Home.module.css';

interface ProjectCarouselProps {
  projects: ProjectCard[];
  controls: CarouselControls;
}

export function ProjectCarousel({ projects, controls }: ProjectCarouselProps) {
  return (
    <div
      id="projects"
      className={s.carousel}
      role="region"
      aria-roledescription="캐러셀"
      aria-labelledby="projects-title"
      onFocusCapture={(event) => {
        if (event.target.matches(':focus-visible')) controls.pause();
      }}
    >
      <h2 id="projects-title" className={s.carouselTitle}>
        주요 프로젝트
      </h2>
      <div
        className={s.slides}
        aria-live={controls.playing ? 'off' : 'polite'}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') controls.setHovered(true);
        }}
        onPointerLeave={() => controls.setHovered(false)}
      >
        {projects.map((project, index) => {
          const active = index === controls.active;
          return (
            <article
              id={`slide-${project.slug}`}
              key={project.slug}
              className={s.slide}
              data-project={project.slug}
              data-active={active}
              aria-hidden={!active}
              inert={!active}
              aria-roledescription="슬라이드"
              aria-label={`${index + 1} / ${projects.length}`}
            >
              <div className={s.slideCopy}>
                <span className={s.field}>{project.field}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <strong>{project.result}</strong>
                <Link
                  className={s.projectLink}
                  to={`/${project.slug}`}
                  aria-label={`${project.title} 자세히 보기`}
                >
                  프로젝트 자세히 보기
                </Link>
              </div>
              <div className={s.slideMedia}>
                <ProjectCover slug={project.slug} />
              </div>
            </article>
          );
        })}
      </div>
      <div className={s.carouselNav}>
        <div role="group" aria-label="표시할 프로젝트" className={s.selectors}>
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.slug}
              aria-pressed={index === controls.active}
              aria-controls={`slide-${project.slug}`}
              onClick={() => controls.select(index)}
            >
              {project.title}
            </button>
          ))}
        </div>
        <button
          type="button"
          className={s.playback}
          onClick={controls.toggle}
          aria-label={
            controls.playing ? '자동 전환 일시정지' : '자동 전환 재생'
          }
          title={controls.playing ? '자동 전환 일시정지' : '자동 전환 재생'}
        >
          <span
            aria-hidden="true"
            className={controls.playing ? s.pauseSymbol : s.playSymbol}
          />
        </button>
      </div>
    </div>
  );
}
