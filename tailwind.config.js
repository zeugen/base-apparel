module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        csFont:['Josefin Sans']
      },
      colors:{
        desaturatedRed:" hsl(0, 36%, 70%)",
        softRed:"hsl(0, 93%, 68%)",
        grayishRed:" hsl(0, 6%, 24%)",
        gradOneFrom:"hsl(0, 0%, 100%)",
        gradOneTo:"hsl(0, 100%, 98%)",
        gradTwoFrom:"hsl(0, 80%, 86%)",
        gradTwoTo:"hsl(0, 74%, 74%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
