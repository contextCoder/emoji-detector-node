import { detect } from "./index.mjs";

console.log(detect("Hello 😊🚀"));
console.log(detect("Flags 🇺🇸🇯🇵 mixed with text"));
console.log(detect("Keycap 2️⃣ 3️⃣"));
console.log(detect("No emojis here!"));
