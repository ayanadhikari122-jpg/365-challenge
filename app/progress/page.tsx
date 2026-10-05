"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProgressPage() {
  const TOTAL_DAYS = 365;
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [updateCount, setUpdateCount] = useState<number>(0);

  useEffect(() => {
    // Read challenge grid data
    const savedDays = localStorage.getItem("challenge_completed_days");
    if (savedDays) {
      try {
        setCompletedDays(JSON.parse(savedDays));
      } catch {
        setCompletedDays([]);
      }
    }

    // Read daily updates count
    const savedUpdates = localStorage.getItem("challenge_updates");
    if (savedUpdates) {
      try {
        const parsed = JSON.parse(savedUpdates);
        setUpdateCount(Array.isArray(parsed) ? parsed.length : 0);
      } catch {
        setUpdateCount(0);
      }
    }
  }, []);

  const completedCount = completedDays.length;
  const percentage = Math.round((completedCount / TOTAL_DAYS) * 100);
  const remainingDays = TOTAL_DAYS - completedCount;

  // Calculate maximum continuous streak
  const calculateStreak = () => {
    if (completedDays.length === 0) return 0;
    const sorted = [...completedDays].sort((a, b) => a - b);
    let streak = 1;
    let maxStreak = 1;

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === sorted[i - 1] + 1) {
        streak += 1;
        if (streak > maxStreak) maxStreak = streak;
      } else if (sorted[i] !== sorted[i - 1]) {
        streak = 1;
      }
    }
    return maxStreak;
  };

  return (
    <main className="min-h-screen bg-[#070b16] text-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
            Performance & Analytics
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Journey <span className="text-cyan-400">Progress</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
            Detailed metrics and milestone completion throughout the 365-day roadmap.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#0e1424] border border-[#1e293b] p-5 rounded-2xl shadow-xl">
            <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
              Completed
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-2">
              {completedCount}{" "}
              <span className="text-xs font-normal text-gray-400">days</span>
            </p>
          </div>

          <div className="bg-[#0e1424] border border-[#1e293b] p-5 rounded-2xl shadow-xl">
            <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
              Remaining
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-2">
              {remainingDays}{" "}
              <span className="text-xs font-normal text-gray-400">days</span>
            </p>
          </div>

          <div className="bg-[#0e1424] border border-[#1e293b] p-5 rounded-2xl shadow-xl">
            <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
              Best Streak
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-2">
              {calculateStreak()}{" "}
              <span className="text-xs font-normal text-gray-400">days</span>
            </p>
          </div>

          <div className="bg-[#0e1424] border border-[#1e293b] p-5 rounded-2xl shadow-xl">
            <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
              Updates Logged
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-2">
              {updateCount}{" "}
              <span className="text-xs font-normal text-gray-400">logs</span>
            </p>
          </div>
        </div>

        {/* Overall Completion Card */}
        <div className="bg-[#0e1424] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white">Yearly Milestone</h2>
              <p className="text-xs text-gray-400">Overall goal coverage</p>
            </div>
            <span className="text-3xl font-extrabold text-cyan-400">
              {percentage}%
            </span>
          </div>

          <div className="w-full bg-[#080d19] border border-[#1e293b] rounded-full h-3.5 p-0.5 overflow-hidden">
            <div
              className="bg-cyan-400 h-full rounded-full transition-all duration-500 shadow-sm shadow-cyan-400"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-500 font-medium pt-1">
            <span>Day 01</span>
            <span>Day 100</span>
            <span>Day 200</span>
            <span>Day 365</span>
          </div>
        </div>

        {/* Quick Links CTA */}
        <div className="bg-[#0e1424] border border-[#1e293b] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Ready for today&apos;s goal?</h3>
            <p className="text-sm text-gray-400 mt-1">
              Mark off your progress in the grid or write notes in the logbook.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/challenge"
              className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold rounded-full transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              Open Tracker
            </Link>
            <Link
              href="/updates"
              className="px-6 py-2.5 bg-[#080d19] border border-[#1e293b] hover:border-cyan-400/50 text-white text-xs font-medium rounded-full transition-all cursor-pointer"
            >
              Write Log
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}