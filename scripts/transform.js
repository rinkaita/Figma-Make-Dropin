/**
 * JSCodeshift transform to remove "@" followed by numbers in import paths
 *
 * This transform finds all import declarations in TypeScript/TSX files and
 * removes any "@" followed by numbers in the import paths.
 *
 * Example:
 * import { Slot } from "@radix-ui/react-slot@1.1.2";
 * becomes:
 * import { Slot } from "@radix-ui/react-slot";
 */

export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let hasModifications = false;

  // Find all import declarations
  root.find(j.ImportDeclaration).forEach((path) => {
    const importPath = path.node.source.value;

    // Check if the import path contains "@" followed by numbers
    if (typeof importPath === 'string' && /@\d/.test(importPath)) {
      // Use regex to remove "@" followed by numbers (including dots for version numbers)
      const newPath = importPath.replace(/@\d+(\.\d+)*(\.\d+)*/g, '');

      // Update the import path
      path.node.source.value = newPath;
      hasModifications = true;
    }
  });

  // Only return a modified AST if changes were made
  return hasModifications ? root.toSource({ quote: 'single' }) : null;
}
