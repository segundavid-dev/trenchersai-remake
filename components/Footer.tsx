"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { NewTwitterIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#030303] pt-20 pb-10 px-6 border-t border-white/[0.04] overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(119,51,255,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Top Section: Logo & Links */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          
          {/* Brand Info */}
          <div className="flex flex-col max-w-xs">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
              Trenchers<span className="text-brand">AI</span>
            </h3>
            <p className="text-sm font-medium text-white/40 tracking-wide uppercase">
              The Terminal that never sleeps
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24">
            
            {/* Navigation */}
            <div className="flex flex-col">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
                Navigation
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#overview" className="text-sm text-white/40 hover:text-white transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-sm text-white/40 hover:text-white transition-colors">
                    Benefits
                  </a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div className="flex flex-col">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
                Information
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="/contact" className="text-sm text-white/40 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-white/30 tracking-wide">
            © Copyright 2025 TrenchersAI - All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://x.com/TrenchersAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white/[0.06] bg-white/[0.02] text-white/40 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.05] transition-all"
            >
              <HugeiconsIcon icon={NewTwitterIcon} className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/company/113394521" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white/[0.06] bg-white/[0.02] text-white/40 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.05] transition-all"
            >
              <HugeiconsIcon icon={Linkedin02Icon} className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
