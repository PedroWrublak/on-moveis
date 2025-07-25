"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function PageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-[#FCFCFC] shadow-sm ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-4xl h-[7rem] mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Logo On-moveis"
              width={120}
              height={40}
              className="h-auto w-auto"
            />
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#264653] uppercase select-none">
          <Link href="#services">
            <span className="hover:opacity-30">Serviços</span>
          </Link>
          <Link href="#galery">
            <span className="hover:opacity-30">Galeria</span>
          </Link>
          <Link href="#contact">
            <span className="hover:opacity-30">Contato</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#01187F] relative w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              menuOpen
                ? "opacity-0 scale-75 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <Menu size={28} />
          </span>
          <span
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              menuOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-90"
            }`}
          >
            <X size={28} />
          </span>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${menuOpen ? "max-h-60 " : "max-h-0 py-0"}
        `}
      >
        <div className="md:hidden flex flex-col items-center bg-white shadow-md px-4 py-4 space-y-4 text-[#01187F]">
          <Link href="#services" onClick={() => setMenuOpen(false)}>
            <span className="block">Serviços</span>
          </Link>
          <Link href="#galery" onClick={() => setMenuOpen(false)}>
            <span className="block">Galeria</span>
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            <span className="block">Contato e Orçamentos</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
