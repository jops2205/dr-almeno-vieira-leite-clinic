import "./globals.css";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const rootElement = document.getElementById("app");

if (rootElement && !rootElement.innerHTML) {
	const root = createRoot(rootElement);

	root.render(<App />);
}
