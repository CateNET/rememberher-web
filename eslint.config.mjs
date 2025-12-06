import eslint from "@eslint/js";
import next from "eslint-config-next";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  next({
    // Disable patching to avoid the warning
    dirs: ['.'],
  }),
);
