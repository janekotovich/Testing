import { describe, it, expect, vi } from "vitest";
import { showError } from "./dom.js";
import fs from "fs";
import path from "path";
import { Window } from "happy-dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocContent);

vi.stubGlobal("document", document);

describe("showError()", () => {
  it("Shows err should add err p to id 'errors'", () => {
    const someError = "Some big error BAM";

    showError(someError);
    const erroEl = document.getElementById("errors");
    const errorP = erroEl.firstElementChild;
    expect(erroEl.textContent).toBe(someError);
    expect(errorP).not.toBe(null);
  });
});
