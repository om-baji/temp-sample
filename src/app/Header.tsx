"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';

// Declare global types for Google Translate
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (options: {
            pageLanguage: string;
            includedLanguages?: string;
            autodisplay: boolean;
            layout: number;
          }, elementId: string): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  

  useEffect(() => {
    (window as any).googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: "en,es,ht", 
            autodisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 
          'google_translate_element');
      }
    };

    const script = document.createElement('script'); 
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script); 

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete (window as any).googleTranslateElementInit;
    }
  }, [])

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
      <header className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#28649b] text-white flex justify-end items-center px-12 p-4 h-10 text-xs font-medium">
        <div className="flex gap-8 mr-20">
          <a href="#" className="hover:underline">311</a>
          <a href="#" className="hover:underline">GovMeetings</a>
          <a href="#" className="hover:underline">Calendar</a>
          <div className="relative group">
            <button className="hover:cursor-pointer flex items-center gap-1 hover:underline">
              Translate
              <svg width="12" height="12" fill="currentColor" className="inline ml-1">
                <path d="M6 9l4-5H2z"/>
              </svg>
            </button>
            <div id="google_translate_element" className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 hover:opacity-100 hover:visible z-50 bg-white p-2 rounded shadow-lg"></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 flex items-center justify-between px-20 h-16 shadow-sm border-b border-gray-200">
        <div className="flex items-center min-w-[180px] justify-end">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Miami-Dade County Logo"
              width={90}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <nav className="flex-1 flex ml-8">
          {navigationItems.map((item, idx) => (
            <div
              key={item.title}
              className={`relative group flex items-center ${idx !== navigationItems.length - 1 ? 'border-r border-gray-200' : ''}`}
              style={{ minHeight: '40px' }}
            >
              <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-[#28649b] transition-colors duration-200 py-1 px-4 text-md">
                {item.title}
                <svg width="14" height="14" fill="currentColor" className="inline ml-1 transition-transform duration-200 group-hover:rotate-180">
                  <path d="M7 10l4-5H3z"/>
                </svg>
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
              className={`rounded-full bg-[#0082ca] w-9 h-9 flex items-center justify-center transition-colors duration-150 hover:bg-[#28649b] ${showSearch ? 'bg-[#28649b]' : ''}`}
              aria-label="Search"
              onClick={() => setShowSearch((prev) => !prev)}
              tabIndex={0}
            >
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" fill="none"/>
                <line x1="17" y1="17" x2="22" y2="22" stroke="white" strokeWidth="2"/>
              </svg>
            </button>
            {showSearch && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute right-0 top-14 z-20 bg-white border border-gray-200 rounded shadow-lg flex items-center px-3 py-2 w-72"
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
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="9" r="7"/>
                    <line x1="15" y1="15" x2="19" y2="19"/>
                  </svg>
                </button>
                <button
                  type="button"
                  className="ml-2 text-gray-400 hover:text-gray-700"
                  aria-label="Close search"
                  onClick={() => setShowSearch(false)}
                  tabIndex={0}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="4" x2="14" y2="14"/>
                    <line x1="14" y1="4" x2="4" y2="14"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#28649b] font-medium transition-colors duration-150 mr-22">
            <LogoutIcon/>
            <span className="font-medium">Login</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 