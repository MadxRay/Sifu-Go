/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563EB', // 宝蓝色 - 信任
        'brand-orange': '#F97316', // 活力橙 - 紧急/按钮
      }
    },
  },
  plugins: [],
}