"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Benefits", href: "#benefits" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.avif"
            alt="TrenchersAI logo"
            width={28}
            height={28}
          />
          <span className="font-bold text-[15px] text-white tracking-tight">
            TrenchersAI
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleScroll(e, href)}
              className="relative text-sm text-white/40 hover:text-white transition-colors duration-200 py-1 group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ── Enroll CTA (desktop) ── */}
        <div className="hidden md:block">
          <Button href="/contact" variant="primary" size="sm">
            Join Now
          </Button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <HugeiconsIcon 
            icon={mobileOpen ? Cancel01Icon : Menu01Icon} 
            className="w-6 h-6" 
          />
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          "bg-black/95 backdrop-blur-xl",
          mobileOpen
            ? "max-h-80 opacity-100 border-b border-white/[0.06]"
            : "max-h-0 opacity-0 border-b border-transparent"
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  setMobileOpen(false);
                  handleScroll(e, href);
                }}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="w-full mt-2"
          >
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
}
