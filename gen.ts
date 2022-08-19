import { marked } from "https://esm.sh/marked@4.0.18";

const types = ["gameapi", "globalapi"];

const typeReplacements: Record<string, string | undefined> = {
  Str: "string",
  Bool: "boolean",
  Iterator: "PyIterator",
  Function: "() => void",
};

const cleanType = (type: string) => typeReplacements[type] ?? type;

// const valueReplacements: Record<string, string | undefined> = {
//   None: "null",
// };

// const cleanValue = (value: string) => valueReplacements[value] ?? value;

const validDescriptionHeadings = ["**Description**", "**描述**"];
const validParamHeadings = ["**Parameters**", "**参数**"];
const validNoParamText = ["No parameter.", "No return value.", "无"];
const validReturnHeadings = ["**Return Value**", "**返回值**"];

for await (const dirEntry of Deno.readDir("./docs")) {
  if (!dirEntry.name.endsWith(".md")) continue;

  let inFunctions = false;

  console.log(`generating types for ${dirEntry.name}`);

  const name = dirEntry.name.match(/(.*)\.md/)![1];

  const ast = marked.lexer(await Deno.readTextFile(`./docs/${dirEntry.name}`));

  let index = 0;

  const funcs: string[] = [];

  while (index < ast.length) {
    const line = ast[index++];
    if (line.type === "heading" && line.depth === 3) {
      const funcName = line.text.match(/`([^`]*)`/)?.[1];
      if (!funcName) {
        throw new Error(`missing func name: ${Deno.inspect(line)}`);
      }

      {
        const descHeading = ast[index++];
        if (
          descHeading.type !== "heading" ||
          !validDescriptionHeadings.includes(descHeading.text)
        ) {
          throw new Error(
            `expected description header: ${Deno.inspect(descHeading)}`,
          );
        }
      }

      const descriptionToken = ast[index++];
      if (descriptionToken.type !== "paragraph") {
        throw new Error(
          `expected description: ${Deno.inspect(descriptionToken)}`,
        );
      }
      const description = descriptionToken.text;

      {
        const paramHeading = ast[index++];
        if (
          paramHeading.type !== "heading" ||
          !validParamHeadings.includes(paramHeading.text)
        ) {
          throw new Error(
            `expected param heading: ${Deno.inspect(paramHeading)}`,
          );
        }
      }

      const paramTable = ast[index++];
      if (paramTable.type !== "table") {
        if (
          paramTable.type !== "paragraph" ||
          !validNoParamText.includes(paramTable.text)
        ) {
          console.log(ast.slice(index - 5, index + 3));
          throw new Error(`expect param table: ${Deno.inspect(paramTable)}`);
        }
      }

      const params = paramTable.type === "table"
        ? paramTable.rows.map((r) => ({
          name: r[0].text.slice(1, -1),
          description: r[1].text,
          type: cleanType(r[2].text.match(/`([^`]+)`/)?.[1] ?? "void"),
          default: r[3].text,
        }))
        : [];

      // console.log(params);

      while (ast[index].type === "space") index++;

      {
        const returnHeading = ast[index++];
        if (
          returnHeading.type !== "heading" ||
          !validReturnHeadings.includes(returnHeading.text)
        ) {
          throw new Error(
            `expected return heading: ${Deno.inspect(returnHeading)}`,
          );
        }
      }

      const returnTypeToken = ast[index++];
      if (returnTypeToken.type !== "paragraph") {
        throw new Error(
          `expected return type: ${Deno.inspect(returnTypeToken)}`,
        );
      }
      const returnType = cleanType(
        returnTypeToken.text.match(/`([^`]+)`/)?.[1] ?? "void",
      );

      funcs.push(
        `  /**
   * ${description}${
          params.length
            ? `
${
              params.map((p) => `   * @param ${p.name} ${p.description}`)
                .join(
                  "\n",
                )
            }`
            : ""
        }${
          returnType !== "void"
            ? `
   * @returns ${returnType}`
            : ""
        }
   */
  ${funcName}: (${
          params.map((p) => `
    /** ${
            p.default && p.default !== "None"
              ? `
     @defaultValue \`${p.default}\`
    `
              : p.description
          } */
    ${p.name}: ${p.type}${p.default ? " | null" : ""}`)
            .join(",\n")
        }) => ${returnType};`,
      );
    } else {
      // Spaces happen
      if (line.type === "space") continue;

      // Leaving the header
      if (
        line.type === "heading" && line.depth === 2 &&
        (line.text === "方法" || line.text === "Functions")
      ) {
        inFunctions = true;
        continue;
      }

      // In the header
      if (!inFunctions) continue;

      throw new Error(`Unexpected markdown node: ${Deno.inspect(line)}`);
    }
  }

  if (!inFunctions) throw new Error(`No functions found in ${dirEntry.name}`);

  await Deno.writeTextFile(
    `types/${name}.d.ts`,
    `declare ${types.includes(name) ? "const" : "interface"} ${name}${
      types.includes(name) ? ":" : ""
    } {
${funcs.join("\n\n")}
};`,
  );
}

console.log("done!\n");
