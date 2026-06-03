import { it, expect, vi } from "vitest";
import writeData from "./io.js";

it("writeData() should save the file", async () => {
  const testData = "test data here yay";
  const testFileName = "textYay.txt";

  await expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});

it("writeData()  with mock", async () => {
  const testData = "test data here yay";
  const testFileName = "textYay.txt";

  await expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
