import { SunghyunAccountingView } from './SunghyunAccountingView';
import { useSunghyunAccounting } from './useSunghyunAccounting';

export function SunghyunAccountingPage() {
  return <SunghyunAccountingView model={useSunghyunAccounting()} />;
}
