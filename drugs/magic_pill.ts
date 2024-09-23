import { Drug } from "../pharmacy";

export class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Magic Pill", expiresIn, benefit, 0);
  }
  override update(): void {}
}
