/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        light: "#fff",
        dark: "#333333",
        primary: "#693A25",
        secondary: "#AE9A91",
        tertiary: "#EEE0DB",
      },
      fontFamily: {
        sans: ["Inter"],
        title: ["Plus Jakarta Sans"],
      },
    },
  },
};

// "./.perfection/**/*.json",
// content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./_components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./.perfection/**/*.json",
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
