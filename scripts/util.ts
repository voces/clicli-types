const typeReplacements: Record<string, string | undefined> = {
  Str: "string",
  Bool: "boolean",
  Iterator: "PyIterator",
  Function: "() => void",
  True: "true",
  False: "false",
  ModifierEntity: "Modifier",
  ProjectileEntity: "Projectile",
};

export const cleanType = (type: string) => typeReplacements[type] ?? type;

// const valueReplacements: Record<string, string | undefined> = {
//   None: "null",
// };

// const cleanValue = (value: string) => valueReplacements[value] ?? value;
