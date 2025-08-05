"use client"
import React, { useState, useMemo } from 'react'
import FilterCard from '@/components/FilterCard'
import Card from '@/components/Card'
import ListItem from '@/components/ListItem'
import data from '../../public/data.json'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward' 

const ITEMS_PER_PAGE = 12; 

const Page = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState({
    zipcode: '',
    district: 'all',
    projectType: 'all',
    housingType: 'all'
  });

  const filteredData = useMemo(() => {
    return data.filter(item => {
      if (activeFilters.zipcode && activeFilters.zipcode !== 'all' && String(item.zipcode) !== activeFilters.zipcode) {
        return false;
      }
  
      if (activeFilters.district && activeFilters.district !== 'all' && String(item.district) !== activeFilters.district) {
        return false;
      }
      
      if (activeFilters.projectType && activeFilters.projectType !== 'all' && item.projectType !== activeFilters.projectType) {
        return false;
      }
      
      if (activeFilters.housingType && activeFilters.housingType !== 'all' && item.housingType !== activeFilters.housingType) {
        return false;
      }
      
      return true;
    });
  }, [activeFilters]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleListings = filteredData.slice(startIndex, endIndex);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFiltersChange = (newFilters: typeof activeFilters) => {
    setActiveFilters(newFilters);
  };

  const handleReset = () => {
    setActiveFilters({
      zipcode: '',
      district: 'all',
      projectType: 'all',
      housingType: 'all'
    });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen pb-10">
      <div 
        className="w-full"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FilterCard 
          filters={activeFilters}
          onFiltersChange={handleFiltersChange}
          onReset={handleReset}
        />
      </div>
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto mt-6 bg-white rounded shadow p-6">
        <div className="flex items-center justify-between border-b mb-6 pb-2">
          <div className="text-sm text-gray-600">
            Showing {filteredData.length > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} listings
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
        
        {filteredData.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No listings found</div>
            <div className="text-gray-400 text-sm">Try adjusting your search filters</div>
          </div>
        ) : (
          <>
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
            
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-2">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' ? handlePageChange(page) : undefined}
                    disabled={typeof page !== 'number'}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      page === currentPage
                        ? 'bg-blue-600 text-white'
                        : typeof page === 'number'
                        ? 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                        : 'text-gray-400 cursor-default'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-18 right-6 w-12 h-12 p-7 bg-blue-200 rounded-lg shadow-lg hover:bg-blue-400 transition-colors duration-200 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
};

export default Page;
