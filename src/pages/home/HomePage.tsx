import { useHome } from './useHome';
import { HomeView } from './HomeView';

export function HomePage() {
  return <HomeView model={useHome()} />;
}
