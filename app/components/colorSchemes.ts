export type ColorSchemeKey = 'gradient' | 'brown' | 'ocean' | 'forest' | 'lavender' | 'amethyst' | 'slate' | 'mocha' | 'neutral' | 'sage';

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
  gradient: {
    name: 'Sunset',
    // New complementary colors
    primaryBg: '#FED7AA',        // Light peach
    secondaryBg: '#FBCFE8',      // Light pink
    accentColor: '#3B82F6',      // Blue
    secondaryAccent: '#FDBA74',  // Darker peach
    textPrimary: '#1F2937',      // Dark gray
    textSecondary: '#6B7280',    // Medium gray
    borderColor: '#D1D5DB',      // Light gray
    // Legacy
    background: 'bg-gradient-to-b from-orange-100 via-orange-300 via-pink-200 to-blue-600',
    textColor: 'text-gray-800',
    preview: ['#FED7AA', '#FDBA74', '#FBCFE8', '#3B82F6'],
    lightBackground: '#FED7AA'
  },
  brown: {
    name: 'Earth',
    // New complementary colors
    primaryBg: '#F8F4E1',        // Cream
    secondaryBg: '#AF8F6F',      // Tan
    accentColor: '#74512D',      // Brown
    secondaryAccent: '#543310',  // Dark brown
    textPrimary: '#1F2937',      // Dark gray
    textSecondary: '#6B7280',    // Medium gray
    borderColor: '#D1D5DB',      // Light gray
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #F8F4E1 0%, #AF8F6F 50%, #74512D 75%, #543310 100%)',
    textColor: 'text-gray-800',
    preview: ['#F8F4E1', '#AF8F6F', '#74512D', '#543310'],
    lightBackground: '#F8F4E1'
  },
  ocean: {
    name: 'Ocean',
    // New complementary colors
    primaryBg: '#E0F2FE',        // Very light blue
    secondaryBg: '#7DD3FC',      // Light blue
    accentColor: '#0EA5E9',      // Bright blue
    secondaryAccent: '#0C4A6E',  // Dark blue
    textPrimary: '#1F2937',      // Dark gray
    textSecondary: '#6B7280',    // Medium gray
    borderColor: '#BAE6FD',      // Soft blue
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #E0F2FE 0%, #7DD3FC 35%, #0EA5E9 70%, #0C4A6E 100%)',
    textColor: 'text-gray-800',
    preview: ['#E0F2FE', '#7DD3FC', '#0EA5E9', '#0C4A6E'],
    lightBackground: '#E0F2FE'
  },
  forest: {
    name: 'Forest',
    // New complementary colors
    primaryBg: '#ECFCCB',        // Very light green
    secondaryBg: '#84CC16',      // Lime green
    accentColor: '#365314',      // Forest green
    secondaryAccent: '#1A2E05',  // Very dark green
    textPrimary: '#1F2937',      // Dark gray
    textSecondary: '#6B7280',    // Medium gray
    borderColor: '#D9F99D',      // Soft green
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #ECFCCB 0%, #84CC16 35%, #365314 70%, #1A2E05 100%)',
    textColor: 'text-gray-800',
    preview: ['#ECFCCB', '#84CC16', '#365314', '#1A2E05'],
    lightBackground: '#ECFCCB'
  },
  lavender: {
    name: 'Lavender',
    // New complementary colors
    primaryBg: '#F3E8FF',        // Very light purple
    secondaryBg: '#DDD6FE',      // Light purple
    accentColor: '#A78BFA',      // Medium purple
    secondaryAccent: '#6D28D9',  // Dark purple
    textPrimary: '#1F2937',      // Dark gray
    textSecondary: '#6B7280',    // Medium gray
    borderColor: '#E9D5FF',      // Soft purple
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #F3E8FF 0%, #DDD6FE 35%, #A78BFA 70%, #6D28D9 100%)',
    textColor: 'text-gray-800',
    preview: ['#F3E8FF', '#DDD6FE', '#A78BFA', '#6D28D9'],
    lightBackground: '#F3E8FF'
  },
  amethyst: {
    name: 'Amethyst',
    // New complementary colors
    primaryBg: '#EEE4B1',        // Light beige
    secondaryBg: '#8C6A5D',      // Mauve/taupe
    accentColor: '#5F374B',      // Plum
    secondaryAccent: '#430A5D',  // Deep purple
    textPrimary: '#1F2937',      // Dark gray
    textSecondary: '#6B7280',    // Medium gray
    borderColor: '#D1D5DB',      // Light gray
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #EEE4B1 0%, #8C6A5D 35%, #5F374B 70%, #430A5D 100%)',
    textColor: 'text-gray-800',
    preview: ['#430A5D', '#5F374B', '#8C6A5D', '#EEE4B1'],
    lightBackground: '#EEE4B1'
  },
  slate: {
    name: 'Slate',
    // New complementary colors
    primaryBg: '#D2C1B6',        // Light warm beige
    secondaryBg: '#456882',      // Medium blue-gray
    accentColor: '#234C6A',      // Deep blue
    secondaryAccent: '#1B3C53',  // Darkest blue
    textPrimary: '#1B3C53',      // Darkest blue for text
    textSecondary: '#456882',    // Medium blue-gray for secondary text
    borderColor: '#456882',      // Medium blue-gray for borders
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #D2C1B6 0%, #456882 35%, #234C6A 70%, #1B3C53 100%)',
    textColor: 'text-gray-800',
    preview: ['#D2C1B6', '#456882', '#234C6A', '#1B3C53'],
    lightBackground: '#D2C1B6'
  },
  mocha: {
    name: 'Mocha',
    // New complementary colors
    primaryBg: '#E4E0E1',        // Very light gray-beige
    secondaryBg: '#D6C0B3',      // Light tan
    accentColor: '#AB886D',      // Medium brown
    secondaryAccent: '#493628',  // Dark chocolate brown
    textPrimary: '#493628',      // Dark chocolate brown for text
    textSecondary: '#AB886D',    // Medium brown for secondary text
    borderColor: '#D6C0B3',      // Light tan for borders
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #E4E0E1 0%, #D6C0B3 35%, #AB886D 70%, #493628 100%)',
    textColor: 'text-gray-800',
    preview: ['#E4E0E1', '#D6C0B3', '#AB886D', '#493628'],
    lightBackground: '#E4E0E1'
  },
  neutral: {
    name: 'Neutral',
    // New complementary colors
    primaryBg: '#F2EFE5',        // Warmest off-white
    secondaryBg: '#E3E1D9',      // Light warm gray
    accentColor: '#B4B4B8',      // Cool medium gray
    secondaryAccent: '#C7C8CC',  // Light cool gray
    textPrimary: '#3F3F46',      // Dark gray for text
    textSecondary: '#71717A',    // Medium gray for secondary text
    borderColor: '#C7C8CC',      // Light cool gray for borders
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #F2EFE5 0%, #E3E1D9 35%, #C7C8CC 70%, #B4B4B8 100%)',
    textColor: 'text-gray-800',
    preview: ['#F2EFE5', '#E3E1D9', '#C7C8CC', '#B4B4B8'],
    lightBackground: '#F2EFE5'
  },
  sage: {
    name: 'Sage',
    // New complementary colors
    primaryBg: '#ECE3CE',        // Warm cream
    secondaryBg: '#739072',      // Sage green
    accentColor: '#4F6F52',      // Deep forest green
    secondaryAccent: '#3A4D39',  // Darkest green
    textPrimary: '#3A4D39',      // Darkest green for text
    textSecondary: '#4F6F52',    // Deep forest green for secondary text
    borderColor: '#739072',      // Sage green for borders
    // Legacy
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #ECE3CE 0%, #739072 35%, #4F6F52 70%, #3A4D39 100%)',
    textColor: 'text-gray-800',
    preview: ['#ECE3CE', '#739072', '#4F6F52', '#3A4D39'],
    lightBackground: '#ECE3CE'
  }
};