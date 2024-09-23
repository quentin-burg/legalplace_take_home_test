import { Drug } from "../pharmacy";

export class Daflagan extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Daflagan", expiresIn, benefit, -1);
  }

  override update(): void {
    super.update();
    super.updateBenefit();
  }
}
