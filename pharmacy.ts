export class Drug {
  readonly name: string;
  expiresIn: number;
  benefit: number;
  benefitStep: number;

  constructor(
    name: string,
    expiresIn: number,
    benefit: number,
    benefitStep: number = -1
  ) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.benefitStep = benefitStep;
  }

  isExpired() {
    return this.expiresIn < 0;
  }

  willBenefitBeUnder0(value: number) {
    return value < 0;
  }

  willBenefitBeOver50(value: number) {
    return value > 50;
  }

  computeBenefit() {
    if (this.isExpired()) {
      return this.benefit + 2 * this.benefitStep;
    } else {
      return this.benefit + this.benefitStep;
    }
  }

  updateBenefit() {
    if (this.benefit > 0 || this.benefit < 50) {
      const newBenefit = this.computeBenefit();
      if (this.willBenefitBeUnder0(newBenefit)) this.benefit = 0;
      else if (this.willBenefitBeOver50(newBenefit)) this.benefit = 50;
      else this.benefit = newBenefit;
    }
  }

  update() {
    this.expiresIn -= 1;
    this.updateBenefit();
  }
}

export class Pharmacy {
  drugs: Drug[];
  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((d) => {
      d.update();
    });
    return this.drugs;
  }
}
