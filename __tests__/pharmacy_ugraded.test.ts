import { Daflagan } from "../drugs/dafalgan";
import { Doliprane } from "../drugs/doliprane";
import { Fervex } from "../drugs/fervex";
import { HerbalTea } from "../drugs/herbal_tea";
import { MagicPill } from "../drugs/magic_pill";
import {
  Pharmacy, // Daflagan,
  // Doliprane,
  // Fervex,
  // HerbalTea,
  // MagicPill,
  // Pharmacy,
} from "../pharmacy";

describe("Doliprane testing", () => {
  it("should decrease the benefit and expiresIn", () => {
    const doliprane = new Doliprane(10, 10);
    const dolipraneExpected = new Doliprane(9, 9);

    doliprane.update();

    expect(doliprane).toStrictEqual(dolipraneExpected);
  });

  it("should not decrease under 0 point of benefit", () => {
    const doliprane = new Doliprane(10, 0);
    const dolipraneExpected = new Doliprane(9, 0);
    doliprane.update();
    expect(doliprane).toStrictEqual(dolipraneExpected);
  });

  it("should decrease benefit twice after the expiration date", () => {
    const doliprane = new Doliprane(-1, 30);

    const dolipraneExpected = new Doliprane(-2, 28);
    doliprane.update();
    expect(doliprane).toStrictEqual(dolipraneExpected);
  });
});

describe("Magic pill testing", () => {
  it("should not decrease the benefit and expiresIn", () => {
    const magicPill = new MagicPill(10, 10);
    const magicPillExpected = new MagicPill(10, 10);
    magicPill.update();
    expect(magicPill).toStrictEqual(magicPillExpected);
  });
});

describe("Dafalgan testing", () => {
  it("should degrades in benefit twice as fast as normal drugs", () => {
    const dafalgan = new Daflagan(10, 30);
    const dafalganExpected = new Daflagan(9, 28);
    dafalgan.update();
    expect(dafalgan).toStrictEqual(dafalganExpected);
  });

  it("should not decrease under 0", () => {
    const dafalgan = new Daflagan(10, 2);
    const dafalganExpected = new Daflagan(9, 0);
    dafalgan.update();
    expect(dafalgan).toStrictEqual(dafalganExpected);
  });

  it("should decrease twice faster after the expiration date", () => {
    const dafalgan = new Daflagan(0, 5);
    const dafalganExpected = new Daflagan(-1, 1);
    dafalgan.update();
    expect(dafalgan).toStrictEqual(dafalganExpected);
  });

  it("should not decrease under 0 given benefit at 3 and after expiration date", () => {
    const dafalgan = new Daflagan(-2, 3);
    const dafalganExpected = new Daflagan(-3, 0);
    dafalgan.update();
    expect(dafalgan).toStrictEqual(dafalganExpected);
  });
});

describe("Herbal tea testing", () => {
  it("should increase benefit the older it gets", () => {
    const herbalTea = new HerbalTea(12, 40);
    const herbalTeaExpected = new HerbalTea(11, 41);

    herbalTea.update();
    expect(herbalTea).toStrictEqual(herbalTeaExpected);
  });

  it("should not benefit never more than 50", () => {
    const herbalTea = new HerbalTea(12, 50);
    const herbalTeaExpected = new HerbalTea(11, 50);

    herbalTea.update();
    expect(herbalTea).toStrictEqual(herbalTeaExpected);
  });

  it("should increase benefit twice after the expiration date", () => {
    const herbalTea = new HerbalTea(-1, 30);
    const herbalTeaExpected = new HerbalTea(-2, 32);

    herbalTea.update();
    expect(herbalTea).toStrictEqual(herbalTeaExpected);
  });

  it("should not benefit never more than 50 after the expiration date", () => {
    const herbalTea = new HerbalTea(-1, 49);
    const herbalTeaExpected = new HerbalTea(-2, 50);

    herbalTea.update();
    expect(herbalTea).toStrictEqual(herbalTeaExpected);
  });
});

describe("Fervex testing", () => {
  it("should increase benefit the older it gets", () => {
    const fervex = new Fervex(12, 40);
    const fervexExpected = new Fervex(11, 41);
    fervex.update();
    expect(fervex).toStrictEqual(fervexExpected);
  });

  it("should not benefit never more than 50", () => {
    const fervex = new Fervex(12, 50);
    const fervexExpected = new Fervex(11, 50);
    fervex.update();
    expect(fervex).toStrictEqual(fervexExpected);
  });

  it("should not benefit never more than 50 given expires in 10 days", () => {
    const fervex = new Fervex(10, 49);
    const fervexExpected = new Fervex(9, 50);
    fervex.update();
    expect(fervex).toStrictEqual(fervexExpected);
  });

  it("should not benefit never more than 50 given expires in 5 days", () => {
    const fervex = new Fervex(5, 48);
    const fervexExpected = new Fervex(4, 50);
    fervex.update();
    expect(fervex).toStrictEqual(fervexExpected);
  });

  it("should increase benefit by 2 when there are 10 days or less ", () => {
    const fervex = new Fervex(10, 40);
    const fervexExpected = new Fervex(9, 42);
    fervex.update();
    expect(fervex).toStrictEqual(fervexExpected);
  });

  it("should increase benefit by 3 when there are 5 days or less", () => {
    const fervex = new Fervex(5, 40);
    const fervexExpected = new Fervex(4, 43);
    fervex.update();
    expect(fervex).toStrictEqual(fervexExpected);
  });

  it("should drops benefit to 0 after the expiration date", () => {
    const fervex = new Fervex(0, 40);
    const fervexExpected = new Fervex(-1, 0);
    fervex.update();
    expect(fervex).toStrictEqual(fervexExpected);
  });
});

describe("Testing updateBenefitValue function", () => {
  it("should update pharmacy according business rules", () => {
    const pharmacy = new Pharmacy([new Daflagan(10, 3), new MagicPill(11, 11)]);
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toStrictEqual([
      new Daflagan(9, 1),
      new MagicPill(11, 11),
    ]);
  });
});
