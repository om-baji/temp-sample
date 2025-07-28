import { districts, typelist, housinglist } from '@/constants/menus'
import React, { useState, useMemo } from 'react'
import { getAllZipcodes } from '@/lib/utils'

const FilterCard = () => {
    const [zipcode, setZipcode] = useState('');
    const [showZipSuggestions, setShowZipSuggestions] = useState(false);

    const allZipcodes = useMemo(() => getAllZipcodes(), []);

    const filteredZipcodes = useMemo(() => {
        if (!zipcode) return allZipcodes;
        return allZipcodes.filter(z =>
            z.toLowerCase().startsWith(zipcode.toLowerCase())
        );
    }, [zipcode, allZipcodes]);

    const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setZipcode(e.target.value);
        setShowZipSuggestions(true);
    };

    const handleZipSelect = (zip: string) => {
        setZipcode(zip);
        setShowZipSuggestions(false);
    };

    const handleZipBlur = () => {
        setTimeout(() => setShowZipSuggestions(false), 100);
    };

    return (
        <div
            className="rounded shadow p-6 w-full max-w-6xl mx-auto mt-6"
            style={{
                backgroundImage: "url('/banner.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(255,255,255,0.85)',
                backgroundBlendMode: 'screen'
            }}
        >
            <div className="text-sm font-semibold mb-4">Search</div>
            <form className="flex flex-col gap-4" autoComplete="off">
                <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col min-w-[200px] relative">
                        <label className="text-xs font-medium mb-1" htmlFor="zipcode">Zipcode</label>
                        <input
                            id="zipcode"
                            type="text"
                            className="border rounded px-3 py-2 text-sm"
                            value={zipcode}
                            onChange={handleZipChange}
                            onFocus={() => setShowZipSuggestions(true)}
                            onBlur={handleZipBlur}
                            placeholder="Enter zipcode"
                            autoComplete="off"
                        />
                        {showZipSuggestions && filteredZipcodes.length > 0 && (
                            <ul className="absolute z-10 bg-white border border-gray-200 rounded shadow mt-1 w-full max-h-40 overflow-auto">
                                {filteredZipcodes.slice(0, 10).map((zip, idx) => (
                                    <li
                                        key={zip}
                                        className="px-3 py-1 hover:bg-blue-100 cursor-pointer text-sm"
                                        onMouseDown={() => handleZipSelect(zip)}
                                    >
                                        {zip}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="district">District</label>
                        <select id="district" title="Select District" className="border rounded px-3 py-2 text-sm" defaultValue="">
                            <option value="" disabled>Select District</option>
                            {districts.map((district, idx) => (
                                <option key={idx} value={district}>{district}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="projectType">Type of Project</label>
                        <select id="projectType" className="border rounded px-3 py-2 text-sm" defaultValue="">
                            <option value="" disabled>Select Type</option>
                            {typelist.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="housingType">Housing Type</label>
                        <select id="housingType" className="border rounded px-3 py-2 text-sm" defaultValue="">
                            <option value="" disabled>Select Housing Type</option>
                            {housinglist.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                            ))}
                        </select>
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
