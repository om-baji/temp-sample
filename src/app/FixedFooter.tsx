import React from "react";
import Image from "next/image";

const FixedFooter = () => {
    return (
        <div className="w-full fixed bottom-0 bg-white border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4  px-6 py-4 ">
          <div className="flex items-center gap-1.5">
            <span className="text-[#2896d3] font-bold text-2xl tracking-tight">miamidade.gov</span>
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2896d3"/><text x="8" y="24" fontSize="20" fill="white">🌴</text></svg>
          </div>
          <div className="flex  gap-2.5">
            <a href="#" aria-label="Facebook" className=""><Image alt="100" width={35} height={35} src='/facebook.jpeg'/></a>
            <a href="#" aria-label="Facebook" className=""><Image alt="100" width={35} height={35} src='/insta.jpeg'/></a>
            <a href="#" aria-label="Facebook" className=""><Image alt="100" width={35} height={35} src='/yt.jpeg'/></a>
            <a href="#" aria-label="Facebook" className=""><Image alt="100" width={35} height={35} src='/twitter.jpeg'/></a>
          </div>
          <div className="flex gap-1.5 ml-auto">
            <span className="text-[#2896d3] font-medium text-base">Feedback</span>
            <svg width="18" height="18" fill="currentColor"><rect x="2" y="4" width="14" height="10" rx="3" fill="#2896d3"/><rect x="5" y="7" width="9" height="2" fill="white"/><rect x="5" y="11" width="6" height="2" fill="white"/></svg>
          </div>
        </div>
      </div>
    )
}

export default FixedFooter; 