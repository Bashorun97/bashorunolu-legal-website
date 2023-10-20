import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nude: "#5B576B",
        primary: "#F9C784",
        secondary: "#70A076",
        backgroundBlack: "#454655",
        backgroundWhite: "#F7F8FF",
        cardBackground: "#EDEFF6",
        blogHeadingBg: "#13294B",
        topPosts:"#0F213C",
        blueE: "#00407B",
        footerColor: "#001426"
        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}
export default config
