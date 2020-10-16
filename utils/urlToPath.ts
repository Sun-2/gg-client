export const urlToPath = (url: string) => {
  return escape(url.replace(/\//g, "-"));
};
