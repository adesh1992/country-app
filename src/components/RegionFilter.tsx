import React from 'react';

interface RegionFilterProps {
  regions: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

const RegionFilter: React.FC<RegionFilterProps> = ({ regions, selectedRegion, onSelectRegion }) => {
  return (
    <div className="region-filter">
      <label htmlFor="region-select">Filter by Region:</label>
      <select
        id="region-select"
        value={selectedRegion}
        onChange={(e) => onSelectRegion(e.target.value)}
      >
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
