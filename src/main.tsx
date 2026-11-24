import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { applyBrandColors } from './shared/ui/brand/brand';
import './shared/ui/theme/base.css';

applyBrandColors();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
