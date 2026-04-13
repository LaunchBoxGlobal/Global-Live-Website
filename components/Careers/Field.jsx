export default function Field({ label, required, error, hint, children }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm lg:text-base font-medium text-gray-500">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-gray-600">{hint}</p>}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
