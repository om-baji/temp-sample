"use client"
import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSearch(false);
      }
    };
    if (showSearch) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSearch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchValue}`);
    setShowSearch(false);
    setSearchValue('');
  };

  const navigationItems = [
    {
      title: 'Services & Information',
      options: ['Business Services', 'Resident Services', 'Visitor Information', 'Emergency Services', 'Transportation']
    },
    {
      title: 'News & Social Media',
      options: ['Press Releases', 'Newsletters', 'Social Media', 'Events', 'Media Resources']
    },
    {
      title: 'Your Government',
      options: ['County Commission', 'Mayor', 'Departments', 'Elections', 'Public Records']
    },
    {
      title: 'Employees',
      options: ['Job Opportunities', 'Employee Portal', 'Benefits', 'Training', 'Contact HR']
    }
  ];

  return (
    <header className="w-full">
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
      <div className="bg-white flex items-center justify-between px-8 h-20 shadow-sm relative">
        <div className="flex items-center min-w-[220px]">
          <div className="flex items-center">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
              <rect width="60" height="40" rx="8" fill="#28649b"/>
              <text x="10" y="25" fontSize="12" fill="white">MIAMI-DADE</text>
              <text x="10" y="35" fontSize="10" fill="#b6d7a8">COUNTY</text>
            </svg>
          </div>
        </div>
        <nav className="flex-1 flex justify-start gap-10 ml-8">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative group">
              <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-[#28649b] transition-colors duration-200">
                {item.title}
                <svg width="14" height="14" fill="currentColor" className="inline ml-1 transition-transform duration-200 group-hover:rotate-180"><path d="M7 10l4-5H3z"/></svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform origin-top scale-95 group-hover:scale-100 z-50">
                <div className="py-2">
                  {item.options.map((option, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#28649b] hover:text-white transition-colors duration-150"
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-6 min-w-[180px] justify-end relative">
          <div className="relative">
            <button
              type="button"
              className={`rounded-full bg-[#0082ca] w-12 h-12 flex items-center justify-center transition-colors duration-150 ${showSearch ? 'bg-[#28649b]' : ''}`}
              aria-label="Search"
              onClick={() => setShowSearch((prev) => !prev)}
              tabIndex={0}
            >
              <svg width="24" height="24" fill="white"><circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" fill="none"/><line x1="17" y1="17" x2="22" y2="22" stroke="white" strokeWidth="2"/></svg>
            </button>
            {showSearch && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute right-0 top-14 z-20 bg-white border border-gray-200 rounded shadow flex items-center px-3 py-2 w-72"
                style={{ minWidth: '250px' }}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  className="flex-1 outline-none border-none bg-transparent text-gray-800 text-base"
                  placeholder="Search Miami-Dade..."
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  aria-label="Search input"
                />
                <button
                  type="submit"
                  className="ml-2 text-[#28649b] hover:text-[#0082ca] font-semibold"
                  aria-label="Submit search"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="9" r="7"/><line x1="15" y1="15" x2="19" y2="19"/></svg>
                </button>
                <button
                  type="button"
                  className="ml-2 text-gray-400 hover:text-gray-700"
                  aria-label="Close search"
                  onClick={() => setShowSearch(false)}
                  tabIndex={0}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/></svg>
                </button>
              </form>
            )}
          </div>
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