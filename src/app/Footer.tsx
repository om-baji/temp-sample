import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#28649b] text-white pt-10 pb-6 min-h-[220px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-6 gap-10">
        <div className="flex flex-col md:flex-row gap-14 flex-1">
          <div className="min-w-[180px] mb-7 md:mb-0">
            <div className="font-bold text-xl mb-5">Help and Support</div>
            <ul className="space-y-2.5 text-[15px] font-normal">
              <li><a href="#" className="hover:underline">Miami-Dade Home</a></li>
              <li><a href="#" className="hover:underline">Privacy Statement</a></li>
              <li><a href="#" className="hover:underline">ADA Notice</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">About Miami-Dade</a></li>
            </ul>
          </div>
          <div className="min-w-[180px] mb-7 md:mb-0">
            <div className="font-bold text-xl mb-5">Self-Service</div>
            <ul className="space-y-2.5 text-[15px] font-normal">
              <li><a href="#" className="hover:underline">311 Contact Center</a></li>
              <li><a href="#" className="hover:underline">Mobile Applications</a></li>
              <li><a href="#" className="hover:underline">Open Data</a></li>
              <li><a href="#" className="hover:underline">Public Records</a></li>
              <li><a href="#" className="hover:underline">Service Directory</a></li>
            </ul>
          </div>
          <div className="min-w-[210px] mb-7 md:mb-0">
            <div className="font-bold text-xl mb-5">Stay Connected</div>
            <ul className="space-y-2.5 text-[15px] font-normal">
              <li><a href="#" className="hover:underline">Legal Ads & Public Notices</a></li>
              <li><a href="#" className="hover:underline">Social Media Directory</a></li>
              <li><a href="#" className="hover:underline">Watch Government Meetings</a></li>
              <li><a href="#" className="hover:underline">County Calendar</a></li>
              <li><a href="#" className="hover:underline">News RSS Feed</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end min-w-[240px] w-full md:w-auto">
          <div className="mb-1">
            <Image
              src="/md-logo.png"
              alt="Miami-Dade County Logo"
              width={125}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="text-sm font-normal mb-1 mt-1">© 2025 Miami-Dade County. All rights reserved.</div>
          <div className="bg-white rounded shadow p-3 mt-1 w-[240px] flex flex-col items-center">
            <Image
              src="/gov.jpg"
              alt="Government Award"
              width={240}
              height={85}
              className="w-full h-20 object-cover rounded mb-1"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <p className="text-xs font-normal leading-relaxed mb-1">
          Under Florida law, e-mail addresses are public records. If you do not want your e-mail address released in response to a public records request, do not send electronic mail to this entity. Instead, contact this office by phone or in writing.
        </p>
      </div>
      <div className="w-full bg-white border-t mt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[#2896d3] font-bold text-2xl tracking-tight">miamidade.gov</span>
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2896d3"/><text x="8" y="24" fontSize="20" fill="white">🌴</text></svg>
          </div>
          <div className="flex items-center gap-2.5">
            <a href="#" aria-label="Facebook" className=""><svg width="26" height="26" fill="currentColor"><circle cx="13" cy="13" r="13" fill="#1877f2"/><path d="M17 13h-1.2v6h-2.4v-6h-.96v-2H13v-1.2c0-.72.56-1.2 1.2-1.2h2.4v1.92h-1.2c-.16 0-.32.16-.32.32V11H17l-.4 2z" fill="white"/></svg></a>
            <a href="#" aria-label="Instagram" className=""><svg width="26" height="26" fill="currentColor"><circle cx="13" cy="13" r="13" fill="#e1306c"/><rect x="8" y="8" width="10" height="10" rx="4" fill="white"/><circle cx="13" cy="13" r="3" fill="#e1306c"/><circle cx="18" cy="10" r="1" fill="#e1306c"/></svg></a>
            <a href="#" aria-label="YouTube" className=""><svg width="26" height="26" fill="currentColor"><circle cx="13" cy="13" r="13" fill="#ff0000"/><polygon points="11,9 19,13 11,17" fill="white"/></svg></a>
            <a href="#" aria-label="X" className=""><svg width="26" height="26" fill="currentColor"><circle cx="13" cy="13" r="13" fill="#222"/><text x="7" y="19" fontSize="13" fill="white">X</text></svg></a>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#2896d3] font-medium text-base">Feedback</span>
            <svg width="18" height="18" fill="currentColor"><rect x="2" y="4" width="14" height="10" rx="3" fill="#2896d3"/><rect x="5" y="7" width="9" height="2" fill="white"/><rect x="5" y="11" width="6" height="2" fill="white"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 