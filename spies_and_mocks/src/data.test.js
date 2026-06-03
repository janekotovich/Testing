import { expect, it, describe, vi } from "vitest";
import { generateReportData, storeData } from "./data.js";

describe("generateReportData()", () => {
  it("generateReportData should execute logFn if provided", () => {
    const logger = vi.fn();
    generateReportData(logger);
    expect(logger).toHaveBeenCalledOnce();
    expect(logger).toHaveBeenCalled();
  });
});

// describe("storeData()", () => {});
