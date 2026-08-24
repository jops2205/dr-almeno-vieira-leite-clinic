import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		tailwindcss(),
		tanstackRouter({
			target: "react",
			generatedRouteTree: "./src/route-tree.gen.ts",
			autoCodeSplitting: true,
		}),
		react(),
	],
	server: {
		open: true,
	},
});

export default config;
