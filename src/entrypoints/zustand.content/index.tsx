import { sayHello } from "@/helpers/dev";

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

export default defineContentScript({
  matches: ["<all_urls>"],
  async main(ctx) {
    sayHello("zustand.content");

    const ui = await createContentScriptUi(ctx, {
      name: "reproduction-zustand",
      type: "inline",
      mount(container) {
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
