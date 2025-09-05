# 📦 emoji-detector-node  

[![npm version](https://img.shields.io/npm/v/emoji-detector-node.svg)](https://www.npmjs.com/package/emoji-detector-node)  
[![npm downloads](https://img.shields.io/npm/dm/emoji-detector-node.svg)](https://www.npmjs.com/package/emoji-detector-node)  
[![license](https://img.shields.io/npm/l/emoji-detector-node.svg)](LICENSE)  

A **simple emoji detection and extraction library for Node.js** with **no dependencies**.  
Supports **CommonJS (`require`)**, **ES Modules (`import`)**, and **TypeScript** out of the box.  

---

## Installation

```bash
npm install emoji-detector-node
```

## Usage
  ### CommonJS (require)
  #### Example 1
  ```bash
  const { detect } = require("emoji-detector-node");

  console.log(detect("Hello 😊🚀"));
  ```
  #### Output:
    ```bash
    {
      "originalText": "Hello 😊🚀",
      "textOnly": "Hello",
      "emojis": "😊🚀",
      "isEmoji": true
    }
    ```
  #### Example 2
  ```bash
  const { detect } = require("emoji-detector-node");

  console.log(detect("No emoji here"));
  ```
  #### Output:
  ```bash
  {
    "originalText": "No emoji here",
    "textOnly": "No emoji here",
    "emojis": "",
    "isEmoji": false
  }
  ```

  ### ES Modules (import)
  #### Example 1
  ```bash
  import { detect } from "emoji-detector-node";

  console.log(detect("Flags 🇮🇳 mixed with text"));
  ```
  #### Output:
  ```bash
  {
    "originalText": "Flags 🇮🇳 mixed with text",
    "textOnly": "Flags mixed with text",
    "emojis": "🇮🇳",
    "isEmoji": true
  }
  ```
  #### Example 2
  ```bash
  import { detect } from "emoji-detector-node";
  console.log(detect("Only emojis 😍🔥💯"));
  ```
  #### Output:
  ```bash
  {
    "originalText": "Only emojis 😍🔥💯",
    "textOnly": "",
    "emojis": "😍🔥💯",
    "isEmoji": true
  }
  ```

  ### TypeScript Support
  #### Example 1
  ```bash
    Type definitions are included automatically.

    import { detect } from "emoji-detector-node";

    const result = detect("Hello World 😎");

    console.log(result.originalText); // "Hello World 😎"
    console.log(result.textOnly);     // "Hello World"
    console.log(result.emojis);       // "😎"
    console.log(result.isEmoji);      // true
  ```

## Returned Object
  ```bash
  The `detect()` function always returns an object:

  | Field        | Type    | Description                                  |
  |--------------|---------|----------------------------------------------|
  | originalText | string  | The original input text                      |
  | textOnly     | string  | Text with emojis removed                     |
  | emojis       | string  | Extracted emojis (concatenated)              |
  | isEmoji      | boolean | true if at least one emoji was found, otherwise false |
  ```

## Example Use Cases
- Filter emojis out of user input  
- Detect if a message contains only text or emojis  
- Extract emojis for analytics (e.g., most used emojis)  

## License
  ```bash
    MIT © 2025 [Tukaram Todkari]
  ```