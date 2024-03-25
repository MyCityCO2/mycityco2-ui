export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  fallbackLocale: "fr",
  messages: {
    fr: {
      pages: {
        legal: {
          intro: `Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
                  la confiance en l'économie numérique, il est précisé aux utilisateurs du
                  site MyCityCO2 l'identité des différents intervenants dans le cadre de
                  sa réalisation et de son suivi.`,
        },
      },
    },
    en: {},
  },
}))
