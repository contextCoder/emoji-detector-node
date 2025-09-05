const { detect } = require("./index.cjs");

console.log(detect("Hello 😊🚀"));
console.log(detect("Flags 🇮🇳 mixed with text"));
console.log(detect("Keycap 1️⃣ #️⃣"));
console.log(detect("No emojis here!"));