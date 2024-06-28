// mantineTheme.ts
import { MantineThemeOverride } from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
  colors: {
    primary: [
      '#17858A', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', 
      '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', 
    ],
    secondary: [
      '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', 
      '#009688', '#00897b', '#00796b', '#00695c', '#004d40',
    ],
  },
  primaryColor: 'primary',
  primaryShade: { light: 6, dark: 8 },
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Poppins, serif' },
  spacing: { xs: '8px', sm: '16px', md: '24px', lg: '32px', xl: '40px' },
};
