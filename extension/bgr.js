chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    const searchParams = new URLSearchParams(url.search);

    if (!url.pathname.endsWith(".js")) return;
    if (searchParams.get("redirect") === "false") {
      searchParams.delete("redirect");
      url.search = searchParams.toString();
      return {
        redirectUrl: url.toString(),
      };
    }

    url.host = "localhost";
    url.port = "6969";
    url.protocol = "http";
    url.search = "?originalLink=" + details.url;

    return {
      redirectUrl: url.toString(),
    };
  },
  { urls: ["*://*.gg.pl/*"] },
  ["blocking"]
);
