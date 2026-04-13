export default function inputClass(hasError) {
  return [
    "w-full rounded-lg border bg-gray-50 px-4 py-3 text-sm lg:text-base text-black placeholder-gray-600",
    "transition-colors duration-200 outline-none text-black",
    hasError
      ? "border-red-500/60 focus:border-red-500"
      : "border-white/10 focus:border-[#F40E00] text-black",
  ].join(" ");
}
