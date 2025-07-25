import React from 'react'

const FilterCard = () => {
    return (
        <div className="bg-white rounded shadow p-6 w-full max-w-6xl mx-auto mt-6">
            <div className="text-sm font-semibold mb-4">Search</div>
            <form className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="listingType">Listing Type</label>
                        <select id="listingType" className="border rounded px-3 py-2 text-sm">
                            <option>Rentals / Sales</option>
                        </select>
                    </div>
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="city">City</label>
                        <select id="city" className="border rounded px-3 py-2 text-sm">
                            <option>All</option>
                        </select>
                    </div>
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="ageRestricted">Age Restricted Living</label>
                        <select id="ageRestricted" className="border rounded px-3 py-2 text-sm">
                            <option>No</option>
                        </select>
                    </div>
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="petPolicy">Pet Policy</label>
                        <select id="petPolicy" className="border rounded px-3 py-2 text-sm">
                            <option>All</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col mt-2">
                    <span className="text-xs font-medium mb-2">Listing Date Filter</span>
                    <div className="flex flex-wrap gap-8">
                        <label className="flex items-center gap-2 text-sm font-normal">
                            <input type="radio" name="listingDate" defaultChecked className="accent-blue-600" />
                            Current Opportunities
                        </label>
                        <label className="flex items-center gap-2 text-sm font-normal">
                            <input type="radio" name="listingDate" className="accent-blue-600" />
                            Waitlist Opportunities
                        </label>
                        <label className="flex items-center gap-2 text-sm font-normal">
                            <input type="radio" name="listingDate" className="accent-blue-600" />
                            Coming Soon
                        </label>
                        <label className="flex items-center gap-2 text-sm font-normal">
                            <input type="radio" name="listingDate" className="accent-blue-600" />
                            Past Opportunities
                        </label>
                    </div>
                </div>
                <div className="flex gap-2 mt-4">
                    <button type="button" className="border border-gray-300 rounded px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50">Reset</button>
                    <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 text-sm font-medium hover:bg-blue-700">Search</button>
                </div>
            </form>
        </div>
    )
}

export default FilterCard
