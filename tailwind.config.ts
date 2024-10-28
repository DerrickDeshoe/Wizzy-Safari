import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('../public/Images/HomePage/HomeBanner.svg')",
        tour: "url('../public/Images/TourPackagePage/TourImg.svg')",
        gallery: "url('../public/Images/GalleryPage/GalleryBackground.svg')",
        contact: "url('../public/Images/ContactPage/Contact.svg')",
        zebra: "url('../public/Images/AboutPage/Zebra2.png')",
      },
    },

    colors: {
      brown: "#C7923E",
      white: "#FFFFFF",
      black: "#2B2727",
      outline: "#E1E1E1",
      green: '#304F47',
      grayish: '#9A9AB0',
      lightGray: '#D6DCDA',
    },

    fontFamily: {
      lora: "Lora",
      loraBold: "LoraBold",
      mulish: "Mulish",
      mulishSemiBold: 'MulishSemiBold'
    },
  },
  plugins: [],
};
export default config;
