import { describe, it, expect } from "vitest";
import { showError } from "./dom.js";

describe("showError()", () => {
  it("Shows err", () => {
    const someError = "Some big error BAM";
    showError(someError);
  });
});
