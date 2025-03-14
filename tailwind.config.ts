import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-hover": "#e5e7eb",
        "bg-primary": "#f9fafb",

        "text-primary": "#363b45",  
        
        "db-orange": "#ff6600",
        "db-blue": "#00bfff",
        "db-yellow": "#ffd700",

        "dark-bg-hover": "#0F3460",
        "dark-bg-primary": "#111827", 

        "dark-text-primary": "#e5e7eb",  
      },
    },
  },
  plugins: [],
} satisfies Config
