import { marked } from "https://esm.sh/marked@4.0.18";
import { cleanType } from "./util.ts";

const types = ["gameapi", "globalapi"];

const validDescriptionHeadings = ["**Description**", "**describe**", "**描述**"];
const validParamHeadings = ["**Parameters**", "**parameters**", "**参数**"];
const validNoParamText = ["No parameter.", "No return value.", "none", "无"];
const validReturnHeadings = ["**Return Value**", "**return value**", "**返回值**"];

const references: Record<string, string[]> = {
  Ability: ["aliases", "Unit"],
  Destructible: ["aliases", "Unit"],
  gameapi: [
    "Ability",
    "aliases",
    "Destructible",
    "Item",
    "Modifier",
    "Projectile",
    "Role",
    "Unit",
  ],
  globalapi: ["Ability", "aliases", "Role", "Unit"],
  Item: ["aliases", "Role", "Unit"],
  Modifier: ["aliases", "Unit"],
  Projectile: ["aliases", "Role", "Unit"],
  Role: ["aliases", "Unit"],
  Unit: ["Ability", "aliases", "Item", "Modifier", "Projectile", "Role"],
};

export const genClass = (
  name: string,
  ast: marked.TokensList,
  index: number,
) => {
  const methods: string[] = [];

  while (index < ast.length) {
    const line = ast[index++];

    if (line.type === "space") continue;
    if (line.type !== "heading" || line.depth !== 3) {
      throw new Error(`Unexpected markdown node: ${Deno.inspect(line)}`);
    }

    const funcName = line.text.match(/`([^`]*)`/)?.[1];
    if (!funcName) throw new Error(`missing func name: ${Deno.inspect(line)}`);

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
        throw new Error(`expect param table: ${Deno.inspect(paramTable)}`);
      }
    }

    const params = paramTable.type === "table"
      ? paramTable.rows.map((r) => ({
        name: r[0].text.slice(1, -1),
        description: r[1].text,
        type: cleanType(r[2].text.match(/`([^`]+)`/)?.[1] ?? "void"),
        default: cleanType(r[3].text),
      }))
      : [];

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

    methods.push(
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
   * ${p.description}
   * @defaultValue \`${p.default}\`
        `
            : p.description
        } */
        ${p.name}: ${p.type}${p.default ? " | null" : ""}`)
          .join(",\n")
      }) => ${returnType};`,
    );
  }

  return `${
    name in references
      ? `${
        references[name].map((r) => `/// <reference path="./${r}.d.ts" />`)
          .join(
            "\n",
          )
      }\n\n`
      : ""
  }declare ${types.includes(name) ? "const" : "interface"} ${name}${
    types.includes(name) ? ":" : ""
  } {
${methods.join("\n\n")}
};`;
};
