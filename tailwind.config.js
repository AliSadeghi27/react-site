module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iranSans: ["IRANSans Medium"],
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        product:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
      },
    },
  },
  plugins: [],
};
