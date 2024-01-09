import { MATCHES } from "@/data/matches";
// import { MATCHES } from "../../data/matches";
import { sayHello } from "@/helpers/dev";

export default defineContentScript({
  matches: MATCHES.allUrl,
  // matches: ["<all-url>"],
  async main() {
    sayHello("_document-idle.content");
  },
});
