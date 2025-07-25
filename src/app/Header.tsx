import React from 'react';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Blue Bar */}
      <div className="bg-[#28649b] text-white flex justify-end items-center px-8 h-10 text-sm font-medium">
        <div className="flex gap-8">
          <a href="#" className="hover:underline">311</a>
          <a href="#" className="hover:underline">GovMeetings</a>
          <a href="#" className="hover:underline">Calendar</a>
          <div className="relative group">
            <button className="flex items-center gap-1">
              Translate
              <svg width="12" height="12" fill="currentColor" className="inline ml-1"><path d="M6 9l4-5H2z"/></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Main White Nav Bar */}
      <div className="bg-white flex items-center justify-between px-8 h-20 shadow-sm">
        {/* Logo */}
        <div className="flex items-center min-w-[220px]">
          {/* Placeholder for Miami-Dade logo */}
          <div className="flex items-center">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
              <rect width="60" height="40" rx="8" fill="#28649b"/>
              <text x="10" y="25" fontSize="12" fill="white">MIAMI-DADE</text>
              <text x="10" y="35" fontSize="10" fill="#b6d7a8">COUNTY</text>
            </svg>
          </div>
        </div>
        {/* Nav Links */}
        <nav className="flex-1 flex justify-start gap-10 ml-8">
          {[
            'Services & Information',
            'News & Social Media',
            'Your Government',
            'Employees',
          ].map((item) => (
            <div key={item} className="relative group">
              <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-[#28649b]">
                {item}
                <svg width="14" height="14" fill="currentColor" className="inline ml-1"><path d="M7 10l4-5H3z"/></svg>
              </button>
            </div>
          ))}
        </nav>
        {/* Search and Login */}
        <div className="flex items-center gap-6 min-w-[180px] justify-end">
          {/* Search Icon */}
          <button 
          type="button"
          className="rounded-full bg-[#0082ca] w-12 h-12 flex items-center justify-center"
          aria-label="Search"
          >
            <svg width="24" height="24" fill="white"><circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" fill="none"/><line x1="17" y1="17" x2="22" y2="22" stroke="white" strokeWidth="2"/></svg>
          </button>
          {/* Login */}
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#28649b]">
            <svg width="20" height="20" fill="currentColor"><path d="M10 2a4 4 0 110 8 4 4 0 010-8zm0 10c-3.31 0-6 2.01-6 4.5V18h12v-1.5c0-2.49-2.69-4.5-6-4.5z"/></svg>
            <span className="font-medium">Login</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 