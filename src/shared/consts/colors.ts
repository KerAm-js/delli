type ColorSet = {
  text: string;
  accent: string;
  background: string;
  backgroundSecond: string;
  green: string;
  textGrey: string;
  lineGrey: string;
  header: string;
};
export type Theme = 'light' | 'dark';
export type ColorName = keyof typeof THEME_COLORS.light;

export const COLORS = {
  shadow: `#DAE0EB`,
  greenLight: '#CCFFED',
  greenDark: '#003824',
};

export const THEME_COLORS: {[key in Theme]: ColorSet} = {
  light: {
    text: `#000`,
    background: '#fff',
    backgroundSecond: '#f2f3f4',
    green: '#007048',
    textGrey: 'rgba(0, 0, 0, 0.4)',
    lineGrey: 'rgba(0, 0, 0, 0.1)',
    header: '#f2f3f4',
    accent: '#000',
  },
  dark: {
    text: `#fff`,
    background: '#1e1e1e',
    backgroundSecond: 'rgba(250, 250, 250, 0.07)',
    green: '#00FAA0',
    textGrey: 'rgba(250, 250, 250, 0.4)',
    lineGrey: 'rgba(250, 250, 250, 0.1)',
    header: 'rgba(250, 250, 250, 0.07)',
    accent: `#fff`,
  },
};
