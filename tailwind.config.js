/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'tranparent',
                current: 'currentColor',
                'fancy': {
                    DEFAULT : '#60e1a9',
                    50: '#ecfdf4',
                    100: '#d2f9e4',
                    200: '#a9f1cd',
                    300: '#60e1a9',
                    400: '#38cf92',
                    500: '#14b57a',
                    600: '#089363',
                    700: '#077552',
                    800: '#085d42',
                    900: '#084c37',
                    950: '#032b20'
                },
                'grey': {
                    DEFAULT: '#d4d4d4',
                    50: '#f7f7f7',
                    100: '#ededed',
                    200: '#d4d4d4',
                    300: '#c8c8c8',
                    400: '#adadad',
                    500: '#999999',
                    600: '#888888',
                    700: '#7b7b7b',
                    800: '#676767',
                    900: '#545454',
                    950: '#363636'
                }
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [],
    }
}