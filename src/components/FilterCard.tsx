import { districts, typelist, housinglist } from '@/constants/menus'
import React, { useState, useMemo, useEffect } from 'react'
import { getAllZipcodes } from '@/lib/utils'

interface FilterCardProps {
    filters: {
        zipcode: string;
        district: string;
        projectType: string;
        housingType: string;
    };
    onFiltersChange: (filters: {
        zipcode: string;
        district: string;
        projectType: string;
        housingType: string;
    }) => void;
    onReset: () => void;
}

const FilterCard = ({ filters, onFiltersChange, onReset }: FilterCardProps) => {
    const [showZipSuggestions, setShowZipSuggestions] = useState(false);
    const [formValues, setFormValues] = useState({
        zipcode: '',
        district: 'all',
        projectType: 'all',
        housingType: 'all'
    });

    const allZipcodes = useMemo(() => getAllZipcodes(), []);

    const filteredZipcodes = useMemo(() => {
        if (!formValues.zipcode) return [];
        return allZipcodes.filter(z =>
            z.toLowerCase().includes(formValues.zipcode.toLowerCase())
        );
    }, [formValues.zipcode, allZipcodes]);

    useEffect(() => {
        setFormValues(filters);
    }, [filters]);

    const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormValues({ ...formValues, zipcode: value });
        setShowZipSuggestions(value.length > 0);
    };

    const handleZipSelect = (zip: string) => {
        setFormValues({ ...formValues, zipcode: zip });
        setShowZipSuggestions(false);
    };

    const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({ ...formValues, district: e.target.value });
    };

    const handleProjectTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({ ...formValues, projectType: e.target.value });
    };

    const handleHousingTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({ ...formValues, housingType: e.target.value });
    };

    const handleZipFocus = () => {
        if (formValues.zipcode.length > 0) {
            setShowZipSuggestions(true);
        }
    };

    const handleZipBlur = () => {
        setTimeout(() => setShowZipSuggestions(false), 150);
    };

    const handleReset = () => {
        const resetValues = {
            zipcode: '',
            district: 'all',
            projectType: 'all',
            housingType: 'all'
        };
        setFormValues(resetValues);
        onReset();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFiltersChange(formValues);
    };

    return (
        <div
            className="rounded shadow p-10 w-full mt-16 max-w-6xl mx-auto mt-6 bg-white"
        >
            <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="zipcode">Zipcode</label>
                        <div className="relative">
                            <input
                                id="zipcode"
                                type="text"
                                className="border rounded px-3 py-2 text-sm w-full"
                                value={formValues.zipcode}
                                onChange={handleZipChange}
                                onFocus={handleZipFocus}
                                onBlur={handleZipBlur}
                                placeholder="Enter zipcode"
                                autoComplete="off"
                            />
                            {showZipSuggestions && filteredZipcodes.length > 0 && (
                                <ul className="absolute z-50 bg-white border border-gray-200 rounded shadow mt-1 w-full max-h-40 overflow-auto">
                                    {filteredZipcodes.slice(0, 10).map((zip, idx) => (
                                        <li
                                            key={zip}
                                            className="px-3 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                handleZipSelect(zip);
                                            }}
                                        >
                                            {zip}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="district">District</label>
                        <select 
                            id="district" 
                            title="Select District" 
                            className="border rounded px-3 py-2 text-sm" 
                            value={formValues.district}
                            onChange={handleDistrictChange}
                        >
                            <option value="all">Select All Districts</option>
                            {districts.map((district, idx) => (
                                <option key={idx} value={district}>{district}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="projectType">Type of Project</label>
                        <select 
                            id="projectType" 
                            className="border rounded px-3 py-2 text-sm" 
                            value={formValues.projectType}
                            onChange={handleProjectTypeChange}
                        >
                            <option value="all">Select All Types</option>
                            {typelist.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col min-w-[200px]">
                        <label className="text-xs font-medium mb-1" htmlFor="housingType">Housing Type</label>
                        <select 
                            id="housingType" 
                            className="border rounded px-3 py-2 text-sm" 
                            value={formValues.housingType}
                            onChange={handleHousingTypeChange}
                        >
                            <option value="all">Select All Housing Types</option>
                            {housinglist.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex gap-2 mt-4">
                    <button 
                        type="button" 
                        className="border border-gray-300 rounded px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white rounded px-4 py-2 text-sm font-medium hover:bg-blue-700"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FilterCard
