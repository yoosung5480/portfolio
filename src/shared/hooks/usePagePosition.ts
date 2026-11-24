import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export function usePagePosition() {
  const location = useLocation();
  useLayoutEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: 'start' });
        return;
      }
    }
    const section = new URLSearchParams(location.search).get('section');
    if (
      location.pathname === '/' &&
      section &&
      ['profile', 'projects', 'resume', 'skills'].includes(section)
    ) {
      document.getElementById(section)?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [location]);
}
