/**
 * @description: A simple emoji detection library for modern JavaScript environments (CommonJS)
 */
const EMOJI_REGEX = /([\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]|[\u{1F1E6}-\u{1F1FF}]{2}|[#*0-9]\uFE0F?\u20E3)/gu;

function detect(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  const emojis = input.match(EMOJI_REGEX) || [];
  const textOnly = input.replace(EMOJI_REGEX, "").trim();

  return {
    originalText: input,
    textOnly,
    emojis: emojis.join(""),
    isEmoji: emojis.length > 0,
  };
}

module.exports = { detect };
