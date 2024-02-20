import { repeat } from "lodash-es";

export function sayHello(who: string) {
  return console.log(`${who} say hello, ${repeat("6", 6)}`);
}
