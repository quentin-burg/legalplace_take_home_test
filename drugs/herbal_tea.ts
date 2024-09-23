import { Drug } from "../pharmacy";

export class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Herbal Tea", expiresIn, benefit, +1);
  }
}
