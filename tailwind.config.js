module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  // my theme
  daisyui: {
    themes: [
      {
        ecparts: {
          primary: "#00CBBC",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  // my theme
  plugins: [require("daisyui")],
}
