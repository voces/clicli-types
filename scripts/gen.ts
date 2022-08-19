import { marked } from "https://esm.sh/marked@4.0.18";
import { genClass } from "./genClass.ts";
import { genEnum } from "./genEnum.ts";

for await (const dirEntry of Deno.readDir("./docs")) {
  if (!dirEntry.name.endsWith(".md")) continue;

  console.log(`generating types for ${dirEntry.name}`);

  const name = dirEntry.name.match(/(.*)\.md/)![1];

  const ast = marked.lexer(await Deno.readTextFile(`./docs/${dirEntry.name}`));

  let index = 0;

  while (index < ast.length) {
    const line = ast[index++];

    // Spaces happen
    if (line.type === "space" || line.type === "hr") continue;
    // Skip class/enum heading
    if (line.type === "heading" && line.depth === 1) continue;
    // Skip class description/list of functions
    if (
      line.type === "heading" && line.depth === 2 &&
      (line.text === "Description" || line.text === "描述" ||
        line.text === "List of Functions" || line.text === "方法列表")
    ) {
      index++; // skip actual description/functions
      continue;
    }

    // Entering class/object defintiion
    if (
      line.type === "heading" && line.depth === 2 &&
      (line.text === "方法" || line.text === "Functions")
    ) {
      await Deno.writeTextFile(
        `types/${name}.d.ts`,
        genClass(name, ast, index),
      );
      break;
    }

    // Entering enum definition
    if (line.type === "heading" && line.depth === 2 && line.text === "基本类型") {
      await Deno.writeTextFile(
        `types/${name}.d.ts`,
        genEnum(name, ast, index),
      );
      break;
    }

    throw new Error(`Unexpected markdown node: ${Deno.inspect(line)}`);
  }
}

console.log("done!\n");
