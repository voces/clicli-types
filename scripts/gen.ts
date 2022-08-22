import { marked } from "https://esm.sh/marked@4.0.18";
import { genClass } from "./genClass.ts";
import { genEnum } from "./genEnum.ts";

const files: string[] = [];

for await (const dirEntry of Deno.readDir("./docs")) {
  if (!dirEntry.name.endsWith(".md")) continue;

  console.log(`generating types for ${dirEntry.name}`);

  const name = dirEntry.name.match(/(.*)\.md/)![1];
  files.push(name);
  const ast = marked.lexer(await Deno.readTextFile(`./docs/${dirEntry.name}`));
  let index = 0;
  let generated = false;

  while (index < ast.length) {
    const line = ast[index++];

    // Spaces happen
    if (line.type === "space" || line.type === "hr") continue;
    // Skip class/enum heading
    if (line.type === "heading" && line.depth === 1) continue;
    // Skip class description/list of functions
    if (
      line.type === "heading" && line.depth === 2 &&
      (line.text === "Description" || line.text === "describe" ||
        line.text === "描述" ||
        line.text === "List of Functions" || line.text === "method list" ||
        line.text === "方法列表")
    ) {
      index++; // skip actual description/functions
      continue;
    }

    // Entering class/object defintiion
    if (
      line.type === "heading" && line.depth === 2 &&
      (line.text === "方法" || line.text === "Functions" ||
        line.text === "method")
    ) {
      await Deno.writeTextFile(
        `types/${name}.d.ts`,
        genClass(name, ast, index).replace(/\u200b/gu, ""),
      );
      generated = true;
      break;
    }

    // Entering enum definition
    if (
      line.type === "heading" && line.depth === 2 &&
      (line.text === "基本类型" || line.text === "basic type")
    ) {
      await Deno.writeTextFile(
        `types/${name}.d.ts`,
        genEnum(name, ast, index).replace(/\u200b/gu, ""),
      );
      generated = true;
      break;
    }

    throw new Error(`Unexpected markdown node: ${Deno.inspect(line)}`);
  }

  if (!generated) {
    throw new Error(`Did not generate anything for ${dirEntry.name}`);
  }
}

await Deno.writeTextFile(
  "types/index.d.ts",
  files.map((f) => `/// <reference path="./${f}.d.ts" />`).join("\n"),
);

console.log("done!\n");
