import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  safelist: [
    'bg-[#F7DF1E]', 'text-black',
    'bg-[#3178C6]', 'bg-[#3776AB]',
    'bg-[#61DAFB]',
    'bg-[#42B883]',
    'bg-[#DD0031]',
    'bg-[#06B6D4]',
    'bg-[#F24E1E]',
    'bg-[#646CFF]',
    'bg-[#512BD4]',
    'bg-[#339933]',
    'bg-[#47A248]',
    'bg-[#880000]',
    'bg-[#4479A1]',
    'bg-[#4169E1]',
    'bg-[#2D3748]',
    'bg-[#F05032]',
    'bg-[#96BF48]',
    'bg-[#21759B]',
    'bg-[#742774]',
    'bg-[#FF6C37]',
    'bg-[#FF4785]',
    'bg-[#0052CC]',
    'bg-[#8B1A2F]',
    'bg-[#5A29E4]',
    'text-white',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;