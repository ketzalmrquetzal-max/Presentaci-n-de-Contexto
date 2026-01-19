/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'canvas': '#FFFFFF',
                'ink': '#000000',
                'ipn-guinda': '#6F1D45',
                'alert-red': '#FF0000',
                'success-green': '#00FF00',
                'data-blue': '#0000FF',
            },
            fontSize: {
                '8xl': '6rem',
                '9xl': '8rem',
            },
        },
    },
    plugins: [],
}
