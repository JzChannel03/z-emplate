export const getUrlParams = (url: string): { [key: string]: string } => {
  const urlParams: { [key: string]: string } = {};
  const urlParts = url.split("?");

  if (urlParts.length > 1) {
    const urlParamsString = urlParts[1];
    const urlParamsArray = urlParamsString.split("&");

    urlParamsArray.forEach((param) => {
      const [key, value] = param.split("=");
      urlParams[key] = value;
    });
  }

  return urlParams;
};

export const paramsObjectToQueryString = (
  params: { [key: string]: string | number },
  url: string
): string => {
  const queryParams = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  url += (url.includes("?") ? "&" : "?") + queryParams;

  return url;
};
