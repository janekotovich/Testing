import { it, describe, expect } from "vitest";
import { generateToken } from "./async-example.js";

describe("generateToken()", () => {
  it("Should generate a token value if provided userEmail and doneFn", (done) => {
    const dummyEmail = "email123@gmail.com";

    generateToken(dummyEmail, (_, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2);
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
