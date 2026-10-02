import Link from 'next/link';
import { Compass, Calendar, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center space-y-8">
      <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF0EC] text-[#A8543E] flex items-center justify-center">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          Error 404 &bull; Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1E1B]">
          Looks like you’ve taken a different path.
        </h1>
        <p className="text-base text-[#55534E] max-w-md mx-auto leading-relaxed">
          The page you are looking for has been moved, renamed, or is no longer available. Let’s guide
          you back to where you need to be.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
        >
          <span>Return Home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/reclaim"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
        >
          <span>Explore RECLAIM™</span>
        </Link>

        <Link
          href="/discovery-call"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
        >
          <Calendar className="w-4 h-4 text-[#A8543E]" />
          <span>Book a Discovery Call</span>
        </Link>
      </div>
    </div>
  );
}
