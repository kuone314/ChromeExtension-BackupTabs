import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const Popup = () => {
  const [urls, setUrls] = useState<string[]>([]);
  useEffect(Update, []);

  function Update(): void {
    chrome.storage.local.get("key", function (value) {
      var value_data = value.key;
      setUrls(value_data);
    });
  }

  return (
    <>
      {urls.map(url => <p> {url}</p>)}
      <button
        onClick={Update}>
        Update
      </button>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
