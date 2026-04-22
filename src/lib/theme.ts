export type Theme = {
  primary: string;
  primaryHover: string;
  secondary: string;
  accent: string;
  accentHover: string;
};

export const themes: Record<string, Theme> = {
  green: {
    primary: '#046b49ff', 
    primaryHover: '#059669', 
    secondary: '#047857', 
    accent: '#34d399', 
    accentHover: '#059669',
  },
  blue: {
    primary: '#667eea',
    primaryHover: '#535bf2',
    secondary: '#764ba2',
    accent: '#0077cc',
    accentHover: '#005fa3',
  }
};

export function applyTheme(themeName: keyof typeof themes) {
  if (typeof document === 'undefined') return;
  const theme = themes[themeName];
  if (!theme) return;

  const root = document.documentElement;
  root.style.setProperty('--primary-color', theme.primary);
  root.style.setProperty('--primary-hover', theme.primaryHover);
  root.style.setProperty('--secondary-color', theme.secondary);
  root.style.setProperty('--accent-color', theme.accent);
  root.style.setProperty('--accent-hover', theme.accentHover);
}
