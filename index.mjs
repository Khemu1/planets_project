import { loadFile } from "./utils/index.mjs";

const planets = await loadFile();

console.log("File loaded successfully");

console.log("planets ", planets);
