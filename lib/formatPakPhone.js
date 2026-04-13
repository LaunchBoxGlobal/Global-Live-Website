export function formatPakPhone(value) {
  // remove everything except digits
  let digits = value.replace(/\D/g, "");

  // remove leading 92 if user types it
  if (digits.startsWith("92")) {
    digits = digits.slice(2);
  }

  // limit to 10 digits (3 + 7)
  digits = digits.slice(0, 10);

  let formatted = "+92";

  if (digits.length > 0) {
    formatted += "-" + digits.slice(0, 3);
  }

  if (digits.length > 3) {
    formatted += "-" + digits.slice(3, 10);
  }

  return formatted;
}
