"use client";

import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const goal = 254999;
  const raised = 0;
  const progress = (raised / goal) * 100;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-xl font-bold tracking-wider">
              365<span className="text-cyan-400">CHALLENGE</span>
            </h1>
            <p className="text-xs text-slate-400">ONE DAY. ONE STEP. 365 DAYS.</p>
          </div>

          <div className="hidden gap-6 text-sm md:flex">
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
          <a href="/challenge" className="hover:text-cyan-400">
  Challenge
 </a>
            <a href="#progress" className="hover:text-cyan-400">
              Progress
            </a>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
          >
            ☰
          </button>
        </div>

        {showMenu && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <a href="#home" onClick={() => setShowMenu(false)}>
                Home
              </a>
              <a href="#challenge" onClick={() => setShowMenu(false)}>
                Challenge
              </a>
              <a href="#progress" onClick={() => setShowMenu(false)}>
                Progress
              </a>
              <a href="#about" onClick={() => setShowMenu(false)}>
                About
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden px-5 py-20 sm:py-28"
      >
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            🔥 365 DAYS CHALLENGE
          </div>

          <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            365 Days.
            <br />
            <span className="text-cyan-400">One Impossible Goal.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Follow the journey day by day. Watch the progress, see the daily
            updates, and become part of the challenge.
          </p>

          {/* DAY CARD */}
          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Current Day
            </p>

            <div className="mt-2 text-7xl font-black text-cyan-400">01</div>

            <p className="mt-2 text-slate-400">of 365 days</p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all"
                style={{ width: `${Math.max(progress, 2)}%` }}
              />
            </div>

            <p className="mt-3 text-sm text-slate-500">
              The journey has just begun.
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contribute"
              className="rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Join the Challenge
            </a>

            <a
              href="#progress"
              className="rounded-full border border-white/15 px-7 py-3 font-semibold transition hover:bg-white/10"
            >
              View Progress
            </a>
          </div>
        </div>
      </section>

      {/* GOAL */}
      <section id="progress" className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm text-slate-400">Goal</p>
              <p className="mt-2 text-3xl font-bold">₹2,54,999</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm text-slate-400">Raised</p>
              <p className="mt-2 text-3xl font-bold text-cyan-400">
                ₹{raised.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm text-slate-400">Days</p>
              <p className="mt-2 text-3xl font-bold">1 / 365</p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="mb-3 flex justify-between text-sm">
              <span className="text-slate-400">Challenge Progress</span>
              <span className="font-semibold text-cyan-400">
                {progress.toFixed(1)}%
              </span>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400"
                style={{ width: `${Math.max(progress, 1)}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="challenge" className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Mission
            </p>

            <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
              What is the 365 Challenge?
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">📅</div>
              <h4 className="mt-5 text-xl font-bold">365 Days</h4>
              <p className="mt-3 leading-7 text-slate-400">
                Every day brings a new update and another step toward the
                final goal.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">📈</div>
              <h4 className="mt-5 text-xl font-bold">Real Progress</h4>
              <p className="mt-3 leading-7 text-slate-400">
                Follow the progress and see how the challenge changes over
                time.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">🤝</div>
              <h4 className="mt-5 text-xl font-bold">Be Part of It</h4>
              <p className="mt-3 leading-7 text-slate-400">
                Support the journey and become part of the story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-transparent p-8 sm:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Today&apos;s Update
            </p>

            <h3 className="mt-4 text-3xl font-bold">Day 01 — The Beginning</h3>

            <p className="mt-4 leading-7 text-slate-400">
              This is the first step of a 365-day journey. Follow every update
              as the challenge moves forward.
            </p>

            <a
              href="#"
              className="mt-7 inline-block rounded-full border border-white/15 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Watch Today&apos;s Update →
            </a>
          </div>
        </div>
      </section>

      {/* CONTRIBUTE */}
      <section id="contribute" className="px-5 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Support
          </p>

          <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
            Want to be part of the journey?
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            The contribution system will be connected here after the website
            and payment setup are ready.
          </p>

          <button
            disabled
            className="mt-8 cursor-not-allowed rounded-full bg-slate-700 px-8 py-3 font-bold text-slate-400"
          ><div className="bg-white p-3 rounded-2xl inline-block mx-auto border-2 border-cyan-400 my-4">
  <img
    src="/qr.jpeg"
    alt="Support QR"
    className="w-56 h-auto object-contain rounded-lg"
  />
</div>
<p className="text-xs text-cyan-400 font-medium">Scan to Pay using PhonePe / GPay / Paytm</p>
            
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-bold">Follow the Journey</h3>

          <p className="mt-5 leading-7 text-slate-400">
            This website will become the central place for the entire 365-day
            challenge — daily updates, progress, milestones, and eventually
            secure contribution tracking.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 365 Challenge. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}