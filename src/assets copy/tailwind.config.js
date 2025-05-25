/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Penting: agar Tailwind baca file kamu
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4F46E5',
          grayLight: '#F9FAFB',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  