export enum Colors {
  primary = '#972c1d',
  primaryLight = 'rgba(161,111,106,0.42)',
  secondary = '#7f513e',
  success = '#7a853b',
  primaryDark = '#571a10',
  info = '#c9ad6a',
  warning = '#dd9529',
  danger = '#992e2e',
  light = '#a5a69c',
  dark = '#222321',
  white = '#fff1f1'
}

export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://dungeonmaster.guru';
