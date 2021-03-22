export default {
  methods: {
    kebabCase(title) {
      return title.split(/\s+/).join("-");
    },
    getBackground(category) {
      return {
        basics: "bg-basics",
        competitive: "bg-competitive",
        frontend: "bg-frontend",
        backend: "bg-backend",
        miscellaneous: "bg-miscellaneous"
      }[category];
    }
  }
};
