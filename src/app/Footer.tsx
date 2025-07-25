import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#28649b] text-white pt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-8 gap-8">
        <div className="flex flex-col md:flex-row gap-16 flex-1">
          <div className="min-w-[180px] mb-8 md:mb-0">
            <div className="font-bold text-2xl mb-5">Help and Support</div>
            <ul className="space-y-3 text-base font-normal">
              <li><a href="#" className="hover:underline">Miami-Dade Home</a></li>
              <li><a href="#" className="hover:underline">Privacy Statement</a></li>
              <li><a href="#" className="hover:underline">ADA Notice</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">About Miami-Dade</a></li>
            </ul>
          </div>
          <div className="min-w-[180px] mb-8 md:mb-0">
            <div className="font-bold text-2xl mb-5">Self-Service</div>
            <ul className="space-y-3 text-base font-normal">
              <li><a href="#" className="hover:underline">311 Contact Center</a></li>
              <li><a href="#" className="hover:underline">Mobile Applications</a></li>
              <li><a href="#" className="hover:underline">Open Data</a></li>
              <li><a href="#" className="hover:underline">Public Records</a></li>
              <li><a href="#" className="hover:underline">Service Directory</a></li>
            </ul>
          </div>
          <div className="min-w-[220px] mb-8 md:mb-0">
            <div className="font-bold text-2xl mb-5">Stay Connected</div>
            <ul className="space-y-3 text-base font-normal">
              <li><a href="#" className="hover:underline">Legal Ads & Public Notices</a></li>
              <li><a href="#" className="hover:underline">Social Media Directory</a></li>
              <li><a href="#" className="hover:underline">Watch Government Meetings</a></li>
              <li><a href="#" className="hover:underline">County Calendar</a></li>
              <li><a href="#" className="hover:underline">News RSS Feed</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end min-w-[320px] w-full md:w-auto">
          <div className="mb-2">
            <svg width="160" height="60" viewBox="0 0 160 60" fill="none">
              <rect width="160" height="60" rx="24" fill="white"/>
              <text x="30" y="35" fontSize="24" fill="#28649b" fontFamily="Arial Black, Arial, sans-serif">MIAMI-DADE</text>
              <text x="30" y="52" fontSize="16" fill="#b6d7a8" fontFamily="Arial Black, Arial, sans-serif">COUNTY</text>
            </svg>
          </div>
          <div className="text-base font-normal mb-2 mt-2">© 2025 Miami-Dade County. All rights reserved.</div>
          <div className="bg-white rounded shadow p-4 mt-2 w-[300px] flex flex-col items-center">
            <div className="text-xs text-gray-700 mb-1 tracking-wide">CENTER FOR DIGITAL GOVERNMENT</div>
            <div className="font-bold text-xl text-gray-800 mb-1 tracking-wider">GOVERNMENT EXPERIENCE</div>
            <div className="text-xs text-gray-700 mb-1 tracking-wide">AWARDS OVERALL WINNER 2019</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-8">
        <p className="text-sm font-normal leading-relaxed mb-2">
          Under Florida law, e-mail addresses are public records. If you do not want your e-mail address released in response to a public records request, do not send electronic mail to this entity. Instead, contact this office by phone or in writing.
        </p>
      </div>
      <div className="w-full bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-4 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#2896d3] font-bold text-3xl tracking-tight">miamidade.gov</span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2896d3"/><text x="8" y="24" fontSize="20" fill="white">🌴</text></svg>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className=""><svg width="36" height="36" fill="currentColor"><circle cx="18" cy="18" r="18" fill="#1877f2"/><path d="M23 18h-2v9h-4v-9h-1.5v-3H17v-2c0-1.1.9-2 2-2h4v3h-2c-.28 0-.5.22-.5.5V15H23l-.5 3z" fill="white"/></svg></a>
            <a href="#" aria-label="Instagram" className=""><svg width="36" height="36" fill="currentColor"><circle cx="18" cy="18" r="18" fill="#e1306c"/><rect x="12" y="12" width="12" height="12" rx="5" fill="white"/><circle cx="18" cy="18" r="4" fill="#e1306c"/><circle cx="25" cy="13" r="1.2" fill="#e1306c"/></svg></a>
            <a href="#" aria-label="YouTube" className=""><svg width="36" height="36" fill="currentColor"><circle cx="18" cy="18" r="18" fill="#ff0000"/><polygon points="15,13 26,18 15,23" fill="white"/></svg></a>
            <a href="#" aria-label="X" className=""><svg width="36" height="36" fill="currentColor"><circle cx="18" cy="18" r="18" fill="#222"/><text x="11" y="26" fontSize="18" fill="white">X</text></svg></a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#2896d3] font-medium text-lg">Feedback</span>
            <svg width="26" height="26" fill="currentColor"><rect x="3" y="5" width="20" height="16" rx="4" fill="#2896d3"/><rect x="7" y="9" width="12" height="2.5" fill="white"/><rect x="7" y="14" width="9" height="2.5" fill="white"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 