/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'background': '#0a0a0c', // Negro profundo azulado
                'accent': '#06b6d4',     // Cyan
                'neutral-text': '#94a3b8' // Gris azulado claro
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}