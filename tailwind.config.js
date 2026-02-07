/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'background': '#ffffff', // O #0f172a para modo oscuro
                'accent': '#3b82f6',     // Un azul sutil
                'neutral-text': '#4b5563'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}