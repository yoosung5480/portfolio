declare global {
  interface Window {
    PORTFOLIO_BRAND: Readonly<{
      name: string;
      title: string;
      email: string;
      github: string;
      colors: Record<string, string>;
    }>;
  }
}

export const brand = window.PORTFOLIO_BRAND;

export function applyBrandColors() {
  for (const [key, color] of Object.entries(brand.colors)) {
    document.documentElement.style.setProperty(`--${key}`, color);
  }
}
