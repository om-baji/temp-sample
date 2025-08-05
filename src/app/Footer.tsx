import React from 'react';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className="w-full bg-[#245c91] text-white pt-10  pb-6 min-h-[220px] mb-20 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start pb-8 gap-10 px-10">
        <div className="flex flex-col md:flex-row gap-14 flex-1">
          <div className="min-w-[180px] mb-7 md:mb-0">
            <div className="font-bold text-xl mb-5">Help and Support</div>
            <ul className="space-y-5.5 text-[15px] font-normal">
              <li><a href="#" className="hover:underline">Miami-Dade Home</a></li>
              <li><a href="#" className="hover:underline">Privacy Statement</a></li>
              <li><a href="#" className="hover:underline">ADA Notice</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">About Miami-Dade</a></li>
            </ul>
          </div>
          <div className="min-w-[180px] mb-7 md:mb-0">
            <div className="font-bold text-xl mb-5">Self-Service</div>
            <ul className="space-y-5.5 text-[15px] font-normal">
              <li><a href="#" className="hover:underline">311 Contact Center</a></li>
              <li><a href="#" className="hover:underline">Mobile Applications</a></li>
              <li><a href="#" className="hover:underline">Open Data</a></li>
              <li><a href="#" className="hover:underline">Public Records</a></li>
              <li><a href="#" className="hover:underline">Service Directory</a></li>
            </ul>
          </div>
          <div className="min-w-[210px] mb-7 md:mb-0">
            <div className="font-bold text-xl mb-5">Stay Connected</div>
            <ul className="space-y-5.5 text-[15px] font-normal">
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
          <div className="bg-white rounded shadow p-3 mt-1 flex flex-col items-center">
            <Image
              src="/gov.jpg"
              alt="Government Award"
              width={300}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-2">
        <p className="text-xs font-normal leading-relaxed max-w-2xl">
          Under Florida law, e-mail addresses are public records. If you do not want your e-mail address released in response to a public records request, do not send electronic mail to this entity. Instead, contact this office by phone or in writing.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 