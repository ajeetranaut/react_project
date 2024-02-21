import "server-only";
import { Locale } from "../../i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("@/dictionaries/en").then((module) => module.default),
  es: () => import("@/dictionaries/es").then((module) => module.default),
  ar: () => import("@/dictionaries/ar").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en();
