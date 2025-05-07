"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const TeamDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: 'Management', href: '/team#management-section' },
    { name: 'Faculty Sponsors', href: '/team#faculty-section' },
    { name: 'Subteams', href: '/team#subteams-section' },
    { name: 'Team Archives', href: '/team-archives' },
  ];

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    if (href.includes('#')) {
      // For hash links, we need to handle the scroll manually
      const [path, hash] = href.split('#');
      router.push(path);
      // Wait for the page to load before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      router.push(href);
    }
  };

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/team"
        className={`nav-link block ${
          pathname.startsWith('/team') ? 'active' : ''
        }`}
      >
        Team
      </Link>
      
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 pt-1 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className={`w-full text-left px-4 py-3 text-white hover:text-racing-gold hover:bg-white/5 transition-colors duration-200 ${
                index === menuItems.length - 1 ? 'border-t border-white/10' : ''
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamDropdown; 