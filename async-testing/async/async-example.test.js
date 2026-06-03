import { it, describe, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example.js";

describe("generateToken()", () => {
  it("Should generate a token value if provided userEmail and doneFn", async () => {
    const dummyEmail = "email123@gmail.com";

    await new Promise((resolve, reject) => {
      generateToken(dummyEmail, (err, token) => {
        try {
          expect(err).toBeNull();
          expect(token).toBeDefined();
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  });
});

describe("generateTokenPromise", () => {
  it("should generate token v if provided userEmail and fn", () => {
    const dummyEmail = "email123@gmail.com";

    return expect(generateTokenPromise(dummyEmail)).resolves.toBeDefined();
    // expect(generateTokenPromise(dummyEmail)).resolves.toBe(2);
  });

  it("should generate token v if provided userEmail and fn", async () => {
    const dummyEmail = "email123@gmail.com";
    const result = await generateTokenPromise(dummyEmail);
    expect(result).toBeDefined();
    // expect(generateTokenPromise(dummyEmail)).resolves.toBe(2);
  });
});
