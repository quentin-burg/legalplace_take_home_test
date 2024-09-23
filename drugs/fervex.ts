import { Drug } from "../pharmacy";

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Fervex", expiresIn, benefit, +1);
  }

  override computeBenefit(): number {
    if (this.isExpired()) return 0;
    else {
      if (this.expiresIn <= 5) return this.benefit + 3 * this.benefitStep;
      else if (this.expiresIn <= 10) return this.benefit + 2 * this.benefitStep;
      else return this.benefit + this.benefitStep;
    }
  }
}
