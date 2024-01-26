/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'tranparent',
                current: 'currentColor',
                'fancy': {
                    DEFAULT : '#10a37f',
                    50: '#ecfdf6',
                    100: '#d1fae9',
                    200: '#a8f2d6',
                    300: '#6fe6c1',
                    400: '#36d1a5',
                    500: '#10a37f',
                    600: '#079474',
                    700: '#057760',
                    800: '#075e4e',
                    900: '#074d41',
                    950: '#022c26'
                },
                'grey': {
                    DEFAULT: '#f5f5f5',
                    50: '#f7f7f7',
                    100: '#efefef',
                    200: '#dcdcdc',
                    300: '#bdbdbd',
                    400: '#989898',
                    500: '#7c7c7c',
                    600: '#656565',
                    700: '#525252',
                    800: '#464646',
                    900: '#3d3d3d',
                    950: '#292929'
                }
            }
        }
    },
    plugins: []
}