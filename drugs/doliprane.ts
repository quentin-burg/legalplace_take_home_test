import { Drug } from "../pharmacy";

export class Doliprane extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Doliprane", expiresIn, benefit, -1);
  }
}
