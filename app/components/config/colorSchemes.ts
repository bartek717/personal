export type ColorSchemeKey = 'sage' | 'earth' | 'retro' | 'burgundy' | 'olive';

export interface ColorScheme {
  name: string;
  // New complementary color system
  primaryBg: string;           // Main background color
  secondaryBg: string;          // Alternate sections/cards
  accentColor: string;          // Interactive elements, highlights
  secondaryAccent: string;      // Additional accent for variety
  textPrimary: string;          // Main text color
  textSecondary: string;        // Muted/secondary text
  borderColor: string;          // Borders and dividers

  // Legacy support (can be removed later)
  background: string;
  customGradient?: string;
  textColor: string;
  preview: string[];
  lightBackground: string;
}

export const colorSchemes: Record<ColorSchemeKey, ColorScheme> = {
  sage: {
    name: 'Sage',
    // New complementary colors
    primaryBg: '#ECE3CE',        // Warm cream
    secondaryBg: '#739072',      // Sage green
    accentColor: '#4F6F52',      // Deep forest green
    secondaryAccent: '#3A4D39',  // Darkest green
    textPrimary: '#000000',      // Pure black for text
    textSecondary: '#000000',    // Pure black for secondary text
    borderColor: '#739072',      // Sage green for borders
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #ECE3CE 0%, #739072 35%, #4F6F52 70%, #3A4D39 100%)',
    textColor: 'text-gray-800',
    preview: ['#ECE3CE', '#739072', '#4F6F52', '#3A4D39'],
    lightBackground: '#ECE3CE'
  },
  earth: {
    name: 'Earth',
    // New complementary colors
    primaryBg: '#E4C59E',        // Warm tan
    secondaryBg: '#AF8260',      // Medium brown
    accentColor: '#803D3B',      // Deep rust
    secondaryAccent: '#322C2B',  // Nearly black
    textPrimary: '#000000',      // Pure black for text
    textSecondary: '#000000',    // Pure black for secondary text
    borderColor: '#AF8260',      // Medium brown for borders
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #E4C59E 0%, #AF8260 35%, #803D3B 70%, #322C2B 100%)',
    textColor: 'text-gray-800',
    preview: ['#E4C59E', '#AF8260', '#803D3B', '#322C2B'],
    lightBackground: '#E4C59E'
  },
  retro: {
    name: 'Retro',
    // New complementary colors
    primaryBg: '#FDF4E3',        // Lightest cream
    secondaryBg: '#FEB21A',      // Yellow/gold
    accentColor: '#ED3F27',      // Red
    secondaryAccent: '#134686',  // Blue
    textPrimary: '#000000',      // Pure black for text
    textSecondary: '#000000',    // Pure black for secondary text
    borderColor: '#FEB21A',      // Yellow/gold for borders
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #FDF4E3 0%, #FEB21A 35%, #ED3F27 70%, #134686 100%)',
    textColor: 'text-gray-800',
    preview: ['#FDF4E3', '#FEB21A', '#ED3F27', '#134686'],
    lightBackground: '#FDF4E3'
  },
  burgundy: {
    name: 'Burgundy',
    // New complementary colors
    primaryBg: '#F5DAA7',        // Light golden beige
    secondaryBg: '#A3485A',      // Rose/burgundy
    accentColor: '#842A3B',      // Deep burgundy
    secondaryAccent: '#662222',  // Darkest burgundy
    textPrimary: '#000000',      // Pure black for text
    textSecondary: '#000000',    // Pure black for secondary text
    borderColor: '#A3485A',      // Rose/burgundy for borders
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #F5DAA7 0%, #A3485A 35%, #842A3B 70%, #662222 100%)',
    textColor: 'text-gray-800',
    preview: ['#F5DAA7', '#A3485A', '#842A3B', '#662222'],
    lightBackground: '#F5DAA7'
  },
  olive: {
    name: 'Olive',
    // New complementary colors
    primaryBg: '#F1F0E4',        // Light warm white
    secondaryBg: '#BCA88D',      // Warm tan/beige
    accentColor: '#7D8D86',      // Muted sage-gray
    secondaryAccent: '#3E3F29',  // Dark olive
    textPrimary: '#000000',      // Pure black for text
    textSecondary: '#000000',    // Pure black for secondary text
    borderColor: '#BCA88D',      // Warm tan for borders
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #F1F0E4 0%, #BCA88D 35%, #7D8D86 70%, #3E3F29 100%)',
    textColor: 'text-gray-800',
    preview: ['#F1F0E4', '#BCA88D', '#7D8D86', '#3E3F29'],
    lightBackground: '#F1F0E4'
  }
};