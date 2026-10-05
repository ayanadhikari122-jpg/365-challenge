"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ChallengePage() {
  const TOTAL_DAYS = 365;
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  // Load completed days from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("challenge_completed_days");
    if (saved) {
      try {
        setCompletedDays(JSON.parse(saved));
      } catch {
        setCompletedDays([]);
      }
    }
  }, []);

  // Toggle day status and persist
  const toggleDay = (day: number) => {
    let updated: number[];
    if (completedDays.includes(day)) {
      updated = completedDays.filter((d) => d !== day);
    } else {
      updated = [...completedDays, day].sort((a, b) => a - b);
    }
    setCompletedDays(updated);
    localStorage.setItem("challenge_completed_days", JSON.stringify(updated));
  };

  const percentage = Math.round((completedDays.length / TOTAL_DAYS) * 100);

  return (
    <main className="min-h-screen bg-[#070b16] text-white py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
            Daily Consistency
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            365 Days <span className="text-cyan-400">Tracker</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
            Click on any day to toggle your completed status and watch your progress bar fill up.
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-[#0e1424] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Challenge Progress
              </p>
              <h2 className="text-2xl font-bold text-white mt-1">
                {completedDays.length}{" "}
                <span className="text-gray-500 text-lg font-normal">
                  / {TOTAL_DAYS} Days Done
                </span>
              </h2>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-3xl font-extrabold text-cyan-400">
                  {percentage}%
                </span>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Achieved
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#080d19] border border-[#1e293b] rounded-full h-3.5 p-0.5 overflow-hidden">
            <div
              className="bg-cyan-400 h-full rounded-full transition-all duration-300 shadow-sm shadow-cyan-400"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* 365 Days Grid */}
        <div className="bg-[#0e1424] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#1e293b] text-xs text-gray-400">
            <span>Day 1 to 365 Grid</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#080d19] border border-[#1e293b] inline-block"></span>
                Pending
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-cyan-400 inline-block"></span>
                Done
              </span>
            </div>
          </div>

          <div className="grid grid-cols-7 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-18 gap-2 pt-2">
            {Array.from({ length: TOTAL_DAYS }, (_, index) => {
              const day = index + 1;
              const isDone = completedDays.includes(day);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  title={`Day ${day}`}
                  className={`aspect-square flex items-center justify-center text-xs font-semibold rounded-lg transition-all duration-150 border cursor-pointer ${
                    isDone
                      ? "bg-cyan-400 text-black border-cyan-400 font-bold shadow-md shadow-cyan-400/20 scale-105"
                      : "bg-[#080d19] text-gray-400 border-[#1e293b] hover:border-cyan-400/60 hover:text-white"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Link Footer */}
        <div className="text-center pt-2">
          <Link
            href="/progress"
            className="text-xs text-gray-400 hover:text-cyan-400 underline underline-offset-4 transition-colors"
          >
            Check Detailed Analytics in Progress Page →
          </Link>
        </div>

      </div>
    </main>
  );
}