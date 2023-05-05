import TavernSign from '../assets/icons/TavernSign.svg';
import TreasureMap from '../assets/icons/TreasureMap.svg';
import DiceTwenty from '../assets/icons/DiceTwenty.svg';
import Barbute from '../assets/icons/Barbute.svg';
import React from 'react';
import {Image} from 'expo-image';

export enum Colors {
  primary = '#972c1d',
  primaryBright = '#f1472f',
  primaryLight = 'rgba(161,111,106,0.42)',
  secondary = '#7f513e',
  success = '#7a853b',
  successDark = '#242611',
  primaryDark = '#571a10',
  info = '#c9ad6a',
  warning = '#dd9529',
  warningDark = '#523810',
  danger = '#992e2e',
  light = '#a5a69c',
  dark = '#222321',
  white = '#fff1f1',
  black = '#000'
}

// export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://dungeonmaster.guru';
export const API_URL = 'https://dungeonmaster.guru';

export const getIconForPage = (pageName: string, size: number = 15): JSX.Element => {
  switch (pageName) {
    case 'Tavern Name': {
      return <Image source={TavernSign} contentFit='cover' style={{height: size, width: size}} />
    }
    case 'Adventure Hook': {
      return <Image source={TreasureMap} contentFit='cover' style={{height: size, width: size}} />
    }
    case 'Rules': {
      return <Image source={DiceTwenty} contentFit='cover' style={{height: size, width: size}} />
    }
    default: {
      return <Image source={Barbute} contentFit='cover' style={{height: size, width: size}} />
    }
  }
}
