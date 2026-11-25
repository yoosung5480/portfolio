import { useUndertone } from './useUndertone';
import { UndertoneView } from './UndertoneView';

export function UndertonePage() {
  return <UndertoneView model={useUndertone()} />;
}
