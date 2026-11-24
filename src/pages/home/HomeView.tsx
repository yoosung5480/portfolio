import { brand } from '../../shared/ui/brand/brand';
import { Icon } from '../../shared/ui/icon/Icon';
import type { HomeModel, RecordEntry } from './types';
import portrait from './assets/portrait.webp';
import { ProjectCarousel } from './ProjectCarousel';
import s from './Home.module.css';

function SectionTitle({ en, ko }: { en: string; ko: string }) {
  return (
    <h2 className={s.sectionTitle}>
      <span lang="en">{en}</span>
      {ko}
    </h2>
  );
}

function RecordList({ items }: { items: RecordEntry[] }) {
  return (
    <ul className={s.recordList}>
      {items.map((item) => (
        <li key={item.name}>
          <span className={s.date}>{item.date}</span>
          <div>
            <strong>{item.name}</strong>
            {item.detail && <p>{item.detail}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function HomeView({ model }: { model: HomeModel }) {
  return (
    <>
      <div className={s.hero}>
        <aside className={s.identity} id="profile" aria-label="프로필">
          <div className={s.profileLabel}>
            <span lang="en">Profile</span>프로필
          </div>
          <img
            className={s.portrait}
            src={portrait}
            alt="정유성 프로필 사진"
            width="354"
            height="472"
          />
          <div className={s.contact}>
            <h1>{brand.name}</h1>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href="tel:+821024205480">010-2420-5480</a>
          </div>
        </aside>
        <ProjectCarousel projects={model.projects} controls={model.carousel} />
      </div>
      <div className={s.body}>
        <section id="resume" className={s.section}>
          <SectionTitle en="Résumé" ko="이력" />
          <div className={s.records}>
            <section>
              <h3>수상</h3>
              <RecordList items={model.awards} />
            </section>
            <section>
              <h3>연구 · 프로젝트 경험</h3>
              <RecordList items={model.research} />
            </section>
          </div>
        </section>
        <section id="skills" className={s.section}>
          <SectionTitle en="Technical skills" ko="기술 · 연구 분야" />
          <div className={s.skills}>
            {model.skills.map((group) => (
              <div key={group.group}>
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <div className={s.secondarySections}>
          <section className={s.section}>
            <SectionTitle en="Activities" ko="학내 활동" />
            <ul className={s.activities}>
              {model.activities.map((a) => (
                <li key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.detail}</p>
                  {a.link && (
                    <a href={a.link} target="_blank" rel="noreferrer">
                      스터디 GitHub <Icon name="link" size={14} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section className={s.section}>
            <SectionTitle en="Education" ko="학력" />
            <RecordList items={model.education} />
          </section>
        </div>
        <section className={s.section}>
          <SectionTitle en="Language" ko="어학" />
          <dl className={s.language}>
            <div>
              <dt>시험</dt>
              <dd>
                {model.language.name} · {model.language.language}
              </dd>
            </div>
            <div>
              <dt>등급</dt>
              <dd>{model.language.grade}</dd>
            </div>
            <div>
              <dt>취득일</dt>
              <dd>{model.language.date}</dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
