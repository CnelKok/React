import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/React/",
	plugins: [react()],
	build: {
		rollupOptions: {
			plugins: [visualizer({ open: true })],
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
});
