/** @type {import('tailwindcss').Config} */
module.exports = {
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
    darkMode: "class",
    plugins: [],
    "tailwindCSS.includeLanguages": {
        plaintext: "html",
        javascript: "javascript",
        javascriptreact: "javascriptreact",
        typescriptreact: "typescriptreact",
    },
    "editor.quickSuggestions": {
        strings: true,
    },
};
