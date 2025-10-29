import { CardDesign, ColorSwatch } from './types';

// Card designs data
export const CARD_DESIGNS: CardDesign[] = [
  { id: 0, name: 'Waveform', image: require('../../../assets/custom-card/waveform.png') },
  { id: 1, name: 'Tulips', image: require('../../../assets/custom-card/tulips.png') },
  { id: 2, name: 'City', image: require('../../../assets/custom-card/city.png') },
  { id: 3, name: 'Cloud', image: require('../../../assets/custom-card/cloud.png') },
  { id: 4, name: 'Flowers', image: require('../../../assets/custom-card/flowers.png') },
];

// Color swatches data based on Figma design
export const COLOR_SWATCHES: ColorSwatch[] = [
  { id: 0, color: '#8D0DE3', name: 'Purple' }, // Core Purple from Figma
  { id: 1, color: '#CBA5FD', name: 'Light Purple' }, // Purple 200
  { id: 2, color: '#ECDFFF', name: 'Very Light Purple' }, // Purple 100
  { id: 3, color: '#3E1874', name: 'Dark Purple' }, // UV Surface Accent Primary
  { id: 4, color: '#490C74', name: 'Deep Purple' }, // PJ Surface Accent Primary
];

// Layout constants
export const LAYOUT_CONSTANTS = {
  CARD_WIDTH: 220,
  CARD_SPACING: 44,
  LEFT_MARGIN: 90.5,
} as const;

