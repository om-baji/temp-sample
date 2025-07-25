import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl?: string;
  name: string;
  address: string;
  applicationStartDate?: string;
  applicationEndDate?: string;
  lotteryDateTime?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  name,
  address,
  applicationStartDate = 'N/A',
  applicationEndDate = 'N/A',
  lotteryDateTime = 'N/A',
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-0 overflow-hidden max-w-sm w-full border">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 relative">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="text-xl font-bold mb-2">{name}</div>
        <div className="flex items-center text-gray-700 mb-4">
          <svg
            className="w-5 h-5 mr-2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z"
            />
          </svg>
          <span className="text-base">{address}</span>
        </div>
        <div className="text-sm text-gray-800 mb-1">
          <span className="font-medium">Application Start Date:</span> {applicationStartDate}
        </div>
        <div className="text-sm text-gray-800 mb-1">
          <span className="font-medium">Application End Date:</span> {applicationEndDate}
        </div>
        <div className="text-sm text-gray-800">
          <span className="font-medium">Lottery Date/Time:</span> {lotteryDateTime}
        </div>
      </div>
    </div>
  );
};

export default Card;
