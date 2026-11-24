import { useOpenSource } from './useOpenSource';
import { OpenSourceView } from './OpenSourceView';

export function OpenSourcePage() {
  return <OpenSourceView model={useOpenSource()} />;
}
