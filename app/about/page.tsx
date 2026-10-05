import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070b16] text-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
            The Mission
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About The <span className="text-cyan-400">365 Challenge</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            A commitment to continuous growth, daily discipline, and transforming small daily steps into long-term mastery.
          </p>
        </div>

        {/* Core Philosophy Card */}
        <div className="bg-[#0e1424] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 text-lg">✦</span> The Rule of Daily Consistency
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Most goals fail not due to a lack of talent or motivation, but due to friction and broken consistency. The 365 Days Challenge is built around atomic progress: show up every single day, complete at least one dedicated milestone, log your efforts, and never miss two consecutive days.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0e1424] border border-[#1e293b] p-6 rounded-2xl shadow-xl space-y-3">
            <span className="text-2xl">🔥</span>
            <h3 className="font-bold text-white text-base">Unbroken Streak</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Track every single day in the 365-day grid. Build momentum until discipline becomes second nature.
            </p>
          </div>

          <div className="bg-[#0e1424] border border-[#1e293b] p-6 rounded-2xl shadow-xl space-y-3">
            <span className="text-2xl">📝</span>
            <h3 className="font-bold text-white text-base">Daily Logbook</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Document what you accomplished, learned, or tackled each day to maintain an honest public record.
            </p>
          </div>

          <div className="bg-[#0e1424] border border-[#1e293b] p-6 rounded-2xl shadow-xl space-y-3">
            <span className="text-2xl">📊</span>
            <h3 className="font-bold text-white text-base">Measurable Data</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Monitor completion percentages, remaining milestones, and continuous streaks with real-time analytics.
            </p>
          </div>
        </div>

        {/* Call To Action */}
        <div className="bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Your journey starts right now.</h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Do not wait for the perfect moment. Mark off Day 01 and begin building your track record.
          </p>
          <div className="pt-2">
            <Link
              href="/challenge"
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-lg shadow-cyan-500/20"
            >
              Start Tracking
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}