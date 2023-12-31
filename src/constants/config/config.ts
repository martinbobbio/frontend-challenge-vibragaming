import { logoMBDark, logoMBLight } from '@/assets';
import { THEME } from '@/constants';

const BRANDING = {
  logo: {
    light: logoMBLight,
    dark: logoMBDark,
  },
};

const SITES = {
  react: 'https://legacy.reactjs.org/',
  vite: 'https://vitejs.dev/',
  githubVersion:
    'https://github.com/martinbobbio/frontend-challenge-vibragaming/tree/',
};

export default {
  branding: BRANDING,
  sites: SITES,
  theme: THEME,
};
