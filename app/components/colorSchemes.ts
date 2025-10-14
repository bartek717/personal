export type ColorSchemeKey = 'gradient' | 'brown' | 'ocean' | 'forest' | 'lavender' | 'amethyst';

export interface ColorScheme {
  name: string;
  background: string;
  customGradient?: string;
  textColor: string;
  borderColor: string;
  preview: string[];
  lightBackground: string; // Solid color for header
}

export const colorSchemes: Record<ColorSchemeKey, ColorScheme> = {
  gradient: {
    name: 'Sunset',
    background: 'bg-gradient-to-b from-orange-100 via-orange-300 via-pink-200 to-blue-600',
    textColor: 'text-gray-800',
    borderColor: 'bg-gray-600',
    preview: ['#FED7AA', '#FDBA74', '#FBCFE8', '#3B82F6'],
    lightBackground: '#FED7AA'
  },
  brown: {
    name: 'Earth',
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #F8F4E1 0%, #AF8F6F 50%, #74512D 75%, #543310 100%)',
    textColor: 'text-gray-800',
    borderColor: 'bg-gray-700',
    preview: ['#F8F4E1', '#AF8F6F', '#74512D', '#543310'],
    lightBackground: '#F8F4E1'
  },
  ocean: {
    name: 'Ocean',
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #E0F2FE 0%, #7DD3FC 35%, #0EA5E9 70%, #0C4A6E 100%)',
    textColor: 'text-gray-800',
    borderColor: 'bg-sky-700',
    preview: ['#E0F2FE', '#7DD3FC', '#0EA5E9', '#0C4A6E'],
    lightBackground: '#E0F2FE'
  },
  forest: {
    name: 'Forest',
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #ECFCCB 0%, #84CC16 35%, #365314 70%, #1A2E05 100%)',
    textColor: 'text-gray-800',
    borderColor: 'bg-green-700',
    preview: ['#ECFCCB', '#84CC16', '#365314', '#1A2E05'],
    lightBackground: '#ECFCCB'
  },
  lavender: {
    name: 'Lavender',
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #F3E8FF 0%, #DDD6FE 35%, #A78BFA 70%, #6D28D9 100%)',
    textColor: 'text-gray-800',
    borderColor: 'bg-purple-600',
    preview: ['#F3E8FF', '#DDD6FE', '#A78BFA', '#6D28D9'],
    lightBackground: '#F3E8FF'
  },
  amethyst: {
    name: 'Amethyst',
    background: 'bg-gradient-to-br',
    customGradient: 'linear-gradient(180deg, #EEE4B1 0%, #8C6A5D 35%, #5F374B 70%, #430A5D 100%)',
    textColor: 'text-gray-800',
    borderColor: 'bg-purple-800',
    preview: ['#430A5D', '#5F374B', '#8C6A5D', '#EEE4B1'],
    lightBackground: '#EEE4B1'
  }
};