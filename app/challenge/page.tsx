export default function ChallengePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Home
        </a>

        <div className="mt-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            365 Days Challenge
          </p>

          <h1 className="mt-4 text-4xl font-extrabold sm:text-6xl">
            The Journey
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Follow the challenge day by day. Every day has a new update,
            milestone, and story.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Current Day
          </p>

          <div className="mt-3 text-7xl font-black text-cyan-400">
            01
          </div>

          <p className="mt-2 text-slate-400">Day 1 of 365</p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-cyan-400">DAY 01</p>

              <h2 className="mt-2 text-2xl font-bold">
                The Beginning
              </h2>
            </div>

            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Today
            </div>
          </div>

          <p className="mt-6 leading-7 text-slate-400">
            Today marks the beginning of the 365-day challenge. This is the
            first step toward the final goal. Follow the journey as each new
            day brings another update.
          </p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm text-slate-500">
              Daily Update
            </p>

            <p className="mt-2 text-slate-300">
              Day 01 update will appear here.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-500">Previous Day</p>
            <p className="mt-2 font-semibold text-slate-600">
              No previous day
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-500">Next Day</p>
            <p className="mt-2 font-semibold text-cyan-400">
              Day 02 →
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
