import { marked } from "https://esm.sh/marked@4.0.18";
import { cleanType } from "./util.ts";

export const genEnum = (
  name: string,
  ast: marked.TokensList,
  index: number,
) => {
  const values: string[] = [];

  while (index < ast.length) {
    const enumNode = ast[index++];

    if (enumNode.type === "space") continue;
    if (enumNode.type !== "heading" || enumNode.depth !== 3) {
      throw new Error(
        `Unexpected markdown node: ${Deno.inspect(enumNode)}`,
      );
    }

    if (enumNode.type !== "heading" || enumNode.depth !== 3) {
      throw new Error(`expected enum name: ${Deno.inspect(enumNode)}`);
    }
    const enumValue = enumNode.text.slice(1, -1);

    // Skip ID span
    index++;

    const descriptionNode = ast[index++];
    if (descriptionNode.type !== "heading" || descriptionNode.depth !== 5) {
      throw new Error(
        `expected enum decription: ${Deno.inspect(descriptionNode)}`,
      );
    }
    const description = descriptionNode.text.match(/\*\*名称:\*\* (.+)/)?.[1];
    // if (!description) {
    //   throw new Error(`expected decription: ${Deno.inspect(descriptionNode)}`);
    // }

    const paramHeading = ast[index++];
    if (paramHeading.type !== "heading" || paramHeading.depth !== 5) {
      throw new Error(`expected param heading: ${Deno.inspect(paramHeading)}`);
    }

    const paramsNode = ast[index++];
    const params: { param: string; description: string; type: string }[] = [];
    if (paramsNode.type === "table") {
      paramsNode.rows.forEach((row) => {
        params.push({
          param: row[0].text.slice(1, -1),
          description: row[1].text,
          type: cleanType(row[2].text.match(/`([^`]+)`/)![1]),
        });
      });
    } else if (paramsNode.type !== "paragraph" || paramsNode.text !== "无") {
      throw new Error(`expected params: ${Deno.inspect(paramsNode)}`);
    }

    values.push(`${
      params.length
        ? `
  /**${
          description
            ? `
   * ${description}}
   *`
            : ""
        }${
          params.map((p) => `
 * @data \`${p.param}\`: \`${p.type}\` - ${p.description}`)
        }
   */
`
        : description
        ? `
  /** ${description} */
`
        : ""
    }  readonly ${enumValue}: unique symbol;`);
  }

  return `declare const ${name}: {
${values.join("\n\n")}
};`;
};
