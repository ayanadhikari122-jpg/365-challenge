import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2026 DevTracker. Built for daily consistency.</p>
        <div className="flex items-center gap-6 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/challenge" className="hover:text-blue-600 transition-colors">
            Challenge
          </Link>
          <Link href="/progress" className="hover:text-blue-600 transition-colors">
            Progress
          </Link>
          <Link href="/updates" className="hover:text-blue-600 transition-colors">
            Updates
          </Link>
        </div>
      </div>
    </footer>
  );
}