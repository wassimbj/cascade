export const parseQueryParams = (search: string): Map<string, string> => {
  const query = new Map<string, string>();

  try {
    const searchToArr = search.substr(1).split("&");
    for (let q of searchToArr) {
      const t = q.split("=");
      query.set(t[0], t[1]);
    }
  } catch (e) {
    console.error("URL parse error:", e);
  }

  return query;
};
