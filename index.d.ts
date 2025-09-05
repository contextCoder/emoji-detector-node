/**
 * @description: A simple emoji detection library for modern JavaScript environments (TypeScript)
 */

export interface EmojiDetectionResult {
  originalText: string;
  textOnly: string;
  emojis: string;
  isEmoji: boolean;
}

/**
 * Detects emojis in a given string.
 *
 * @param input - The text to analyze
 * @returns An object containing originalText, textOnly, and emojis
 */
export function detect(input: string): EmojiDetectionResult;
