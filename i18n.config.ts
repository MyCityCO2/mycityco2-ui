import fr from "./locales/FR/fr.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  locales: ["en", "fr", "de", "it"],
  defaultLocale: "fr",
  fallbackLocale: "fr",
  messages: {
    fr,
  },
}));
