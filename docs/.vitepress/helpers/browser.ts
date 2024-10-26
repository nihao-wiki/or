export function getUserBrowserLanguage(): { primary: string; all: readonly string[] } {
  const primaryLanguage = navigator.language;
  const allLanguages = navigator.languages || [primaryLanguage];
  return { primary: primaryLanguage, all: allLanguages };
}
