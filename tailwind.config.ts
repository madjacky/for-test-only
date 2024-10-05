import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        imediusSky: "oklch(var(--imediusSky))",
        imediusSkyLight: "oklch(var(--imediusSkyLight))",
        imediusPurple: "oklch(var(--imediusPurple))",
        imediusPurpleLight: "oklch(var(--imediusPurpleLight))",
        imediusYellow: "oklch(var(--imediusYellow))",
        imediusYellowLight: "oklch(var(--imediusYellowLight))",
      },
    },
  },
  plugins: [],
};
export default config;
