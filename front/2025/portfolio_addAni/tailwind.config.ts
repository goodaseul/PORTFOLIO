import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],

    theme: {
        extend: {
            colors: {
                dark: "#121619",
                light: "#f9f9f9",
                point: "#b99dcf",
                txtColor: "#eee",
                bgColor: "#000",
                recColor: "#c7181f",
            },
        },
    },
    darkMode: ["class"],
    plugins: [],
};
export default config;
