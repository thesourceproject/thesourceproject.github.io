module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ["McLaren", "cursive"],
        body: ["Poppins", "sans-serif"]
      },
      colors: {
        basics: "var(--basics)",
        competitive: "var(--competitive)",
        frontend: "var(--frontend)",
        backend: "var(--backend)",
        misc: "var(--misc)",
        "background-1": "var(--background-1)",
        "background-2": "var(--background-2)",
        "background-3": "var(--background-3)",
        "background-4": "var(--background-4)",
        "text-1": "var(--text-1)",
        "text-2": "var(--text-2)",
        "text-3": "var(--text-3)",
        "text-4": "var(--text-4)",
        "text-5": "var(--text-5)",
        "border-1": "var(--border-1)",
        "border-2": "var(--border-2)"
      },
      lineHeight: {
        "extra-loose": "1.75"
      },
      maxHeight: {
        "3xl": "48rem"
      }
    }
  },
  variants: {
    extend: { animation: ["group-hover"] }
  },
  plugins: []
};
