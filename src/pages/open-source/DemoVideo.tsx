import { Icon } from '../../shared/ui/icon/Icon';
import preview from './assets/demo-preview.jpg';
import styles from './OpenSource.module.css';

interface DemoVideoProps {
  watchUrl: string;
  embedUrl: string;
  playing: boolean;
  onPlay: () => void;
}

export function DemoVideo({ watchUrl, embedUrl, playing, onPlay }: DemoVideoProps) {
  return (
    <div>
      <div className={styles.videoFrame}>
        {playing ? (
          <iframe
            src={embedUrl}
            title="AutoFineTuner 시연 영상"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            ref={frame => { frame?.focus({ preventScroll: true }); }}
          />
        ) : (
          <button type="button" onClick={onPlay} aria-label="AutoFineTuner 시연 영상 재생">
            <img src={preview} alt="" width="1280" height="720" loading="lazy" />
            <span aria-hidden="true" className={styles.playIcon} />
          </button>
        )}
      </div>
      <a className={styles.textLink} href={watchUrl} target="_blank" rel="noreferrer">
        YouTube에서 보기 <Icon name="link" size={14} />
      </a>
    </div>
  );
}
