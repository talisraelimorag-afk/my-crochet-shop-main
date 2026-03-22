import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error vite-plugin-eslint lacks TypeScript types
import eslint from "vite-plugin-eslint";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tailwindcss()],
});
