import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Not Found - LaunchBox Global",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <main className="min-h-[110vh] bg-white flex items-center justify-center p-6 text-neutral-900">
      <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-5">
        {/* Animated 404 Graphic */}
        <div className="relative flex flex-col items-center">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter red-text">
            404
          </h1>
        </div>

        {/* Animated Text Content */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
            Page not found
          </h2>
          <p className="text-neutral-600 max-w-md mx-auto text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Animated Action Button */}
        <div className="pt-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-[18px] hover:bg-[#F40E00] hover:scale-105 active:scale-95 transition-all duration-200 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
