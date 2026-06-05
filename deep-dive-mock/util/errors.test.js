import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors.js";

describe("class HttpError", () => {
  it("if we instantinate the class and data null -it should be null", () => {
    const errorClass = new HttpError(404, "could not get data", null);
    expect(errorClass.data).toBe(null);
  });
  it("if we instantinate the class status code msg and data should be equal as we set", () => {
    const fakeData = [1, 2, 3, 4, 5];
    const errorClass = new HttpError(200, "Data received", fakeData);
    expect(errorClass.data).toEqual(fakeData);
    expect(errorClass.message).toBe("Data received");
    expect(errorClass.statusCode).toBe(200);
  });
});

describe("class ValidationError", () => {
  it("instance created should be my msg", () => {
    const message = "Hey chickens!";
    const validationClass = new ValidationError(message);
    expect(validationClass.message).toBe(message);
  });
});
