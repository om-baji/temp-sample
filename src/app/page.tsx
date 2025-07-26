"use client"
import React, { useState } from 'react'
import FilterCard from '@/components/FilterCard'
import Card from '@/components/Card'
import ListItem from '@/components/ListItem'
import { listings } from '@/constants/list'

const Page = () => {
  const [activeTab, setActiveTab] = useState<'Rentals' | 'Sales'>('Rentals');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <FilterCard />
      <div className="max-w-6xl mx-auto mt-6 bg-white rounded shadow p-6">
        <div className="flex items-center justify-between border-b mb-6 pb-2">
          <div className="flex">
            <button
              className={`px-4 py-2 font-semibold text-lg border-b-2 transition-colors duration-150 ${activeTab === 'Rentals' ? 'border-blue-600 text-blue-600 bg-gray-100' : 'border-transparent text-gray-600'}`}
              onClick={() => setActiveTab('Rentals')}
            >
              Rentals
            </button>
            <button
              className={`ml-2 px-4 py-2 font-semibold text-lg border-b-2 transition-colors duration-150 ${activeTab === 'Sales' ? 'border-blue-600 text-blue-600 bg-gray-100' : 'border-transparent text-gray-600'}`}
              onClick={() => setActiveTab('Sales')}
            >
              Sales
            </button>
          </div>
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
          {listings.map((listing, idx) => (
            viewMode === 'grid' ? (
              <Card
                imageUrl={listing.imageUrl}
                key={listing.name + idx}
                name={listing.name}
                address={listing.address}
                applicationStartDate={listing.applicationStartDate}
                applicationEndDate={listing.applicationEndDate}
                lotteryDateTime={listing.lotteryDateTime}
              />
            ) : (
              <ListItem
                key={listing.name + idx}
                name={listing.name}
                address={listing.address}
                applicationStartDate={listing.applicationStartDate}
                applicationEndDate={listing.applicationEndDate}
                lotteryDateTime={listing.lotteryDateTime}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
