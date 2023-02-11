import React from "react";

const MouseflowScript = () => {
    const script = `
      window._mfq = window._mfq || [];
      (function() {
        var mf = document.createElement("script");
        mf.type = "text/javascript"; mf.defer = true;
        mf.src = "//cdn.mouseflow.com/projects/d0e76ce5-08d1-4d0e-a9a3-1d5ed90d9b3b.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
      })();
  `;

    return (
        <div
            style={{ display: "none" }}
            dangerouslySetInnerHTML={{ __html: script }}
        />
    );
};

export default MouseflowScript;