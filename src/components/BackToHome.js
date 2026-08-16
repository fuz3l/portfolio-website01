import Link from 'next/link';

export default function BackToHome({ className = '' }) {
  return (
    <div className={`w-full flex justify-center pt-6 pb-2 ${className}`}>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-gray-600 dark:text-gray-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur-xs transition-all duration-200 group"
      >
        <span className="text-sm transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
