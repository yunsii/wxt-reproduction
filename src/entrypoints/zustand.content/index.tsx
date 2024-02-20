import { sayHello } from "@/helpers/dev";

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

export default defineContentScript({
  matches: ["<all_urls>"],
  async main(ctx) {
    sayHello("zustand.content");

    const ui = await createShadowRootUi(ctx, {
      name: "reproduction-zustand",
      anchor: document.documentElement,
      position: "inline",
      onMount(container) {
        console.log("🚀 ~ file: index.tsx:17 ~ mount ~ container:", container);
        ReactDOM.createRoot(container).render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
      },
    });

    ui.mount();
  },
});
