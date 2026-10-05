import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#070b16]/90 backdrop-blur-md border-b border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo and Tagline */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl font-black tracking-wider text-white">
            365<span className="text-cyan-400">CHALLENGE</span>
          </span>
          <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold group-hover:text-cyan-400 transition-colors">
            ONE DAY. ONE STEP. 365 DAYS.
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link href="/challenge" className="hover:text-cyan-400 transition-colors">
            Challenge
          </Link>
          <Link href="/progress" className="hover:text-cyan-400 transition-colors">
            Progress
          </Link>
          <Link href="/updates" className="hover:text-cyan-400 transition-colors">
            Updates
          </Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}