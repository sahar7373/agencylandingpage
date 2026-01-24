/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'construction-charcoal': '#1a1a1a',
                'safety-orange': '#ff6b00',
                'safety-orange-hover': '#e66000',
                'safety-yellow': '#ffd700',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                heading: ['Inter', 'sans-serif'],
                main: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
}
