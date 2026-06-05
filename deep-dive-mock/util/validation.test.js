import { describe, it, expect } from "vitest";
import { validateNotEmpty } from "./validation.js";

describe("validateNotEmpty()", () => {
  it("throws error is text is empty string", () => {
    const emptyString = "";
    const errorMsg = "Stars!";
    const triggerError = () => {
      validateNotEmpty(emptyString, errorMsg);
    };

    expect(triggerError).toThrow("Stars!");
  });

  it("throws error is text is empty string", () => {
    const emptyString = "    ";
    const errorMsg = "Apples";
    const triggerError = () => {
      validateNotEmpty(emptyString, errorMsg);
    };

    expect(triggerError).toThrow(errorMsg);
  });
  it("Throws err if for text parametr we provided not string", () => {
    const plainObject = {};
    const plainArray = [];
    const plainNaN = NaN;
    const plainNull = null;
    const plainUndefined = undefined;

    const errorMsg = "Boom!";

    const wrongArray = [
      plainObject,
      plainArray,
      plainNaN,
      plainNull,
      plainUndefined,
    ];
    wrongArray.map((value) => {
      expect(() => validateNotEmpty(value, errorMsg)).toThrow();
    });

    const throwFunction = () => {
      validateNotEmpty(plainNull, errorMsg);
    };
    expect(throwFunction).toThrow("Boom!");
  });
});
