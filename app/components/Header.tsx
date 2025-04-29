"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [direction, setDirection] = useState<number | null>(null);
  const headerRef = useRef<HTMLHeadElement>(null);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      if (!headerRef.current) return;
      
      const scrollY = window.scrollY;
      const headerHeight = headerRef.current.clientHeight + 200;
      let prevScroll = 0;

      setSticky(scrollY > 0);
      
      if (scrollY > headerHeight) {
        setDirection(prevScroll > scrollY ? -1 : 1);
        prevScroll = scrollY;
      } else {
        setDirection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="header-height-fix">
        <header className="header">
          <nav className="navbar container-xl">
            <div className="order-0 pl-0">
              <Link href="/" className="block h-[72px] w-[144px] relative">
                <Image
                  src="/images/AFR/AFR_Logo_Transparent.png"
                  alt="AFR Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }

  return (
    <div className="header-height-fix">
      <header
        className={`header ${sticky ? "header-sticky" : ""} ${
          direction === 1 ? "unpinned" : ""
        }`}
        ref={headerRef}
      >
        <nav className="navbar container-xl">
          <div className="order-0 pl-0">
            <Link href="/" className="block h-[72px] w-[144px] relative">
              <Image
                src="/images/AFR/AFR_Anteater.png"
                alt="AFR Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <ul
            id="nav-menu"
            className={`navbar-nav order-2 w-full justify-center lg:order-1 md:w-auto md:space-x-10 lg:flex ${
              !showMenu ? "hidden" : ""
            }`}
          >
            {navigation.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  href={item.href}
                  className={`nav-link block ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="order-1 lg:order-2">
            <button
              className="lg:hidden"
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Toggle menu"
            >
              <CgClose className="h-6 w-6 text-white" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header; 