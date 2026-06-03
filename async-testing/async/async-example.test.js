import { it, describe, expect } from "vitest";
import { generateToken } from "./async-example.js";

describe("generateToken()", () => {
  it("Should generate a token value if provided userEmail and doneFn", () => {
    const dummyEmail = "email123@gmail.com";

    generateToken(dummyEmail, (_, token) => {
      // expect(token).toBeDefined();
      expect(token).toBe(2);
    });
  });
});
