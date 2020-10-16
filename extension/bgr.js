chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(details.url);

    return {
      redirectUrl: "http://localhost:6969/script.js",
    };
  },
  { urls: ["https://s1.gg.pl/6.19.0/js/start.js"] },
  ["blocking"]
);
