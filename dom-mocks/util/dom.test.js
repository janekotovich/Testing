import { describe, it, expect, vi, beforeEach } from "vitest";
import { showError } from "./dom.js";
import fs from "fs";
import path from "path";
import { Window } from "happy-dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal("document", document);

describe("showError()", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlDocContent);
  });

  it("Shows err should add err p to id 'errors'", () => {
    const someError = "Some big error BAM";

    showError(someError);
    const erroEl = document.getElementById("errors");
    const errorP = erroEl.firstElementChild;
    expect(erroEl.textContent).toBe(someError);
    expect(errorP).not.toBeNull();
  });

  it("Shows not contain err p initially", () => {
    const someError = "Some big error BAM";
    const erroEl = document.getElementById("errors");
    const errorP = erroEl.firstElementChild;
    expect(errorP).toBeNull();

    // showError(someError);
    // expect(errorP).not.toBe(null);
  });

  it("Cleans out original err container after appending", () => {
    const someError = "Some big error BAM";
    const erroEl = document.getElementById("errors");
    const errorP = erroEl.firstElementChild;
    showError(someError);
    showError("Bada-Boom");

    expect(erroEl.textContent).toBe("Bada-Boom");
  });
});
