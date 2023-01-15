module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "bg-primary": "#202220",
        "text-secondary": "#5F5F5F",
        "white-secondary": "#b9b6ac",
        "bg-surface": "#242729",
      },
      dropShadow: {
        'lg': '0 12.5px 12.5px #25ff',
        'md': '0 12.5px 12.5px #222220',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      blur: {
        'vsm': '1.5px'
      }
    },
  },
  plugins: [
  ],
};
