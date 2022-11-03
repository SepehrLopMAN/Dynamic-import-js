// import { add, subtract } from "./calc.mjs";
// console.log(add(3)(2));
// console.log(subtract(3)(2));

import("./calc.mjs")
  .then((mod) => {
    console.log(mod.add(3)(2));
    console.log(mod.subtract(3)(2));
  })
  .catch((err) => {
    console.log(err);
  });
