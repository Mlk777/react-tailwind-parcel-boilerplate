module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.js'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
