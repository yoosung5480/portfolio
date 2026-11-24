import { HaiView } from './HaiView';
import { useHai } from './useHai';

export function HaiPage() {
  const model = useHai();
  return <HaiView model={model}/>;
}
