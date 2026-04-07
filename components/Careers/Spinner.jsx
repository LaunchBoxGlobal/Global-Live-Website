export default function Spinner() {
  return (
    <div className="flex justify-center py-10">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 rounded-full border-2 border-t-[#840ECD] animate-spin" />
      </div>
    </div>
  );
}
