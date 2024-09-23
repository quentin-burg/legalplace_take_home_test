import { Pharmacy } from "./pharmacy";
import { Daflagan } from "./drugs/dafalgan";
import { Doliprane } from "./drugs/doliprane";
import { Fervex } from "./drugs/fervex";
import { HerbalTea } from "./drugs/herbal_tea";
import { MagicPill } from "./drugs/magic_pill";
import fs from "fs";

const drugs = [
  new Doliprane(20, 30),
  new MagicPill(10, 10),
  new HerbalTea(10, 5),
  new Daflagan(2, 10),
  new Fervex(15, 35),
];
const pharmacy = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
fs.writeFile(
  "output.json",
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  }
);

/* eslint-enable no-console */
