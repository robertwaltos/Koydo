import { timingSafeEqual } from "crypto";

export function timingSafeEqualStrings(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (
    leftBuffer.length === 0
    || rightBuffer.length === 0
    || leftBuffer.length !== rightBuffer.length
  ) {
    return false;
  }

  try {
    return timingSafeEqual(leftBuffer, rightBuffer);
  } catch {
    return false;
  }
}

export function timingSafeEqualHexStrings(leftHex: string, rightHex: string): boolean {
  try {
    const leftBuffer = Buffer.from(leftHex, "hex");
    const rightBuffer = Buffer.from(rightHex, "hex");

    if (
      leftBuffer.length === 0
      || rightBuffer.length === 0
      || leftBuffer.length !== rightBuffer.length
    ) {
      return false;
    }

    return timingSafeEqual(leftBuffer, rightBuffer);
  } catch {
    return false;
  }
}
