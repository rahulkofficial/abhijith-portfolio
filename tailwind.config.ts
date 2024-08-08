import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1280px'},
      'xl': {'max': '1200px'},
      'lg': {'max': '980px'},
      'md': {'max': '768px'},
      'sm': {'max': '674px'},
      'xm':{'max':'548px'},
      '2xm':{'max':'480px'},
      '3xm':{'max':'360px'},
      '4xm':{'max':'320px'},
      '5xm':{'max':'280px'},
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'shadowanime': {
          '0%' : { boxShadow: '0px 10px 40px 0px black;' },
          '30%': { boxShadow: '0px 1px 20px 0px black;' },
          '50%': { boxShadow: '0px 1px 20px 0px #eab308;' },
          '75%': { boxShadow: '0px 5px 30px 0px #eab308;' },
          '100%': { boxShadow: '0px 10px 40px 0px #eab308;' },
        }
      },
      animation: {
        'shadow': 'shadowanime 3s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
