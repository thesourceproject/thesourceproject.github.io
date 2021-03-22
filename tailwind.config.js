module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        shake: "shake 1s infinite"
      },
      colors: {
        basics: "var(--basics)",
        competitive: "var(--competitive)",
        frontend: "var(--frontend)",
        backend: "var(--backend)",
        miscellaneous: "var(--miscellaneous)",
        "code-1": "var(--code-1)",
        "code-2": "var(--code-2)",
        "code-3": "var(--code-3)",
        "code-4": "var(--code-4)",
        "code-5": "var(--code-5)",
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
      fontFamily: {
        title: ["McLaren", "cursive"],
        body: ["Poppins", "sans-serif"],
        mono: ["Ubuntu Mono", "monospace"]
      },
      keyframes: {
        shake: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          }
        }
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
    extend: { animation: ["hover", "focus", "group-hover", "group-focus"] }
  },
  plugins: []
};
