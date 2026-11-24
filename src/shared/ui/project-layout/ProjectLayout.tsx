import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { projectDirectory, type ProjectSlug } from '../../data/projects';
import styles from './ProjectLayout.module.css';

interface ProjectLayoutProps {
  current: ProjectSlug;
  sections: ReadonlyArray<{ id: string; label: string }>;
  children: ReactNode;
}

export function ProjectLayout({
  current,
  sections,
  children,
}: ProjectLayoutProps) {
  const currentIndex = projectDirectory.findIndex(
    (project) => project.slug === current,
  );
  const next = projectDirectory[(currentIndex + 1) % projectDirectory.length];

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar} aria-label="프로젝트 탐색">
        <nav aria-labelledby="section-index-title">
          <h2 id="section-index-title">본문 목차</h2>
          <ul className={styles.sections}>
            {sections.map((section) => (
              <li key={section.id}>
                <Link to={{ pathname: `/${current}`, hash: `#${section.id}` }}>
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={styles.projects} aria-labelledby="project-index-title">
          <h2 id="project-index-title">프로젝트 목차</h2>
          <ul>
            {projectDirectory.map((project) => (
              <li key={project.slug}>
                <Link
                  to={`/${project.slug}`}
                  aria-current={project.slug === current ? 'page' : undefined}
                  rel={project.slug === next.slug ? 'next' : undefined}
                >
                  <span>{project.title}</span>
                  {project.slug === current && <small>현재</small>}
                  {project.slug === next.slug && <small>다음 프로젝트</small>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
