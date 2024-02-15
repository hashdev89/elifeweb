/** @type {import('tailwindcss').Config} */

module.exports = ({

  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    
  ],
  theme: {
    extend: {
      
      
      keyframes:{
        blob: {
          "0%": {
            transform: "translate(5px, 5px) scale(1)",
          },

          "33%": {
            transform: "translate(90px, -50px) scale(1.1)",
          },

          "66%": {
            transform: "translate(-10px, 50px) scale(0.9)",
          },

          "100%": {
            transform: "translate(5px, 5px) scale(1)",
          },
        }
      },

      colors: {
        "dark":'#232A3C',
        "medium":'#293245',

        font: {
          base: '#08182F',
          muted: '#152946',
          inverted: '#FFFFFF',
          
        },

        surfacelight: {
          primary: '#F3F6FC',
          secondary: '#EBF1FD',
          tertiary: '#E2ECFF',
        },

        surfacedark: {
          primary: '#08182F',
          secondary: '#0D2548',
          tertiary: '#022A62',
        },

        tertiary: {
          100: '#505AE0',
          500: '#4B53C6',
          600: '#4249B3',
          
        },

        secondry: {
          100: '#0FCABF',
          500: '#0BBAB0',
          600: '#07B1A7',
          
        },

        primary: {
          100: '#3783F5',
          500: '#1A6AE3',
          600: '#1964D6',
        },

        bgshades: {
          blueshade: '#3783F5',
          blueshade2: '#1964D6',
          bluemagento: '#4249B3',
          blue: '#D7E6FD',
          green: '#CFF4F2', 

        }
       
      },

      fontFamily: {
        sans: ['sans-serif'],
        poppins: ['Poppins'],
        roboto: ['Roboto'],
      },


      backgroundImage: {
        'bg-img-1': "url('/backbluegreenrounds.svg')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        'pattern': "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'casebk': "url('/careherobk.svg')",
        'bg-footer': "url('/Footer.png')",
        'bg-about': "url('/aboutback.png')",
        'bg-expansion': "url('/expantionmap.png')",
        'bg-expansion-gradiant': "url('/linerwhite.png')",
      
        
      },

      screens: {
        '4k':'2200px',
        '2k':'1680px',
        'desktophd': '1440px',
        'desktop': '1024px',
        'tablet': '768px',
        'mobile': '320px',
      },

      maxWidth: {
        '10xl': '1512px',  
      },

      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '9999px',
      },

      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
      },

    },
  },
  plugins: [require('flowbite/plugin') , require('tailwindcss-animated')], 
});