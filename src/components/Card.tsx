import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl?: string;
  project: string;
  address: string;
  zipcode: string | number;
  district: string | number;
  phone: string;
  units: number;
  projectType: string;
  housingType: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl = '/home1.jpg',
  project,
  address,
  zipcode,
  district,
  phone,
  units,
  projectType,
  housingType,
}) => {

  const mapsQuery = encodeURIComponent(address + ', ' + zipcode);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <div className="bg-white rounded-lg shadow p-0 overflow-hidden max-w-sm w-full border">
   
      <div className="w-full h-48 bg-gray-200 relative">
        <Image
          src={imageUrl}
          alt={project}
          fill
          className="object-cover"
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="p-5">
        <div className="text-xl font-bold mb-2">{project}</div>
        <div className="flex items-center text-gray-700 mb-2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline"
            title="Open in Google Maps"
          >
            <svg className="w-5 h-5 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            <span className="text-base">{address}, {zipcode}</span>
          </a>
        </div>
        <div className="flex items-center text-gray-700 mb-2">

          <a href={`tel:${phone}`} className="flex items-center hover:underline" title="Call">
            <svg className="w-5 h-5 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
            </svg>
            <span className="text-base">{phone}</span>
          </a>
        </div>
        <div className="text-sm text-gray-800 mb-1">Dist: {district}</div>
        <div className="text-sm text-gray-800 mb-1">
          <span>No. of Units:</span> {units}
        </div>
        <div className="text-sm text-gray-800 mb-1">Type of Project: {projectType}</div>
        <div className="text-sm text-gray-800">Housing Type: {housingType}</div>
      </div>
    </div>
  );
};

export default Card;
