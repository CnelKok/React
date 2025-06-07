import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
	base: "/React/",
	logLevel: command === "build" ? "silent" : "info",
	plugins: [react()],
}));
