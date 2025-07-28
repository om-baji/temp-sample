"use client"
import React, { useState } from 'react'
import FilterCard from '@/components/FilterCard'
import Card from '@/components/Card'
import ListItem from '@/components/ListItem'
import data from '../../public/data.json'

const INITIAL_COUNT = 9; 
const LOAD_MORE_COUNT = 9;

const Page = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, data.length));
  };

  const visibleListings = data.slice(0, visibleCount);

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <FilterCard />
      <div className="max-w-6xl mx-auto mt-6 bg-white rounded shadow p-6">
        <div className="flex items-center justify-end border-b mb-6 pb-2">
          <div className="flex items-center gap-2">
            <button
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
            </button>
            <button
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="3" rx="1"/><rect x="4" y="10.5" width="16" height="3" rx="1"/><rect x="4" y="16" width="16" height="3" rx="1"/></svg>
            </button>
          </div>
        </div>
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
          {visibleListings.map((listing) => (
            viewMode === 'grid' ? (
              <Card
                imageUrl={listing.image}
                key={listing.id}
                project={listing.project}
                address={listing.address}
                zipcode={listing.zipcode}
                district={listing.district}
                phone={listing.phone}
                units={Number(listing.units)}
                projectType={listing.projectType}
                housingType={listing.housingType}
              />
            ) : (
              <ListItem
                key={listing.id}
                imageUrl={listing.image}
                project={listing.project}
                address={listing.address}
                zipcode={listing.zipcode}
                district={listing.district}
                phone={listing.phone}
                units={Number(listing.units)}
                projectType={listing.projectType}
                housingType={listing.housingType}
              />
            )
          ))}
        </div>
        {visibleCount < data.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
