export default function formatCNIC(value) {
  // remove non-digits
  let digits = value.replace(/\D/g, "").slice(0, 13);

  let formatted = "";

  if (digits.length > 0) {
    formatted += digits.slice(0, 5);
  }
  if (digits.length > 5) {
    formatted += "-" + digits.slice(5, 12);
  }
  if (digits.length > 12) {
    formatted += "-" + digits.slice(12, 13);
  }

  return formatted;
}
