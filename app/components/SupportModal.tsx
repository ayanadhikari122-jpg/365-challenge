"use client";

import { useState } from "react";

export default function SupportModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button at Bottom Right */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-lg shadow-cyan-500/20 transition-all cursor-pointer hover:scale-105"
      >
        <span className="text-base">📱</span>
        <span>Scan QR / Support</span>
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0e1424] border border-[#1e293b] rounded-2xl p-6 sm:p-8 max-w-sm w-full text-center relative shadow-2xl space-y-5">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-base font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Header */}
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1">
                Support The Challenge
              </p>
              <h3 className="text-xl font-extrabold text-white">
                Scan to Support
              </h3>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                If you want to support this 365-day journey, you can scan the code below.
              </p>
            </div>

            {/* QR Code Container */}
            <div className="bg-white p-3 rounded-2xl inline-block shadow-inner mx-auto border-4 border-cyan-400/20">
              <img
               src="/qr.jpeg"
                alt="Scanner QR"
                className="w-48 h-48 object-contain mx-auto rounded-lg"
              />
            </div>

            {/* UPI Info Box */}
            <div className="bg-[#080d19] border border-[#1e293b] rounded-xl p-3 text-center space-y-1">
              <p className="text-[11px] text-gray-400">Accepted: GPay / PhonePe / Paytm / UPI</p>
              <p className="text-xs font-semibold text-cyan-400">
                Scan using any UPI App
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 bg-[#1e293b] hover:bg-[#334155] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}