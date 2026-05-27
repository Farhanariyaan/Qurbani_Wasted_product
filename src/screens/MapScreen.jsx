import React, { useState } from 'react';
import { Search, Filter, X, Navigation, Phone, MapPin } from 'lucide-react';
import StatusChip from '../components/StatusChip';
import { skinBuyersData, cleanerTeamsData } from '../data/mockData';

const MapScreen = ({ reports }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Waste', 'Skin Buyers', 'Cleaners', 'Critical'];

  // Mock markers with pseudo-random positions in a fixed bounding box for demo
  const generateMarkers = () => {
    let markers = [];
    
    const activeReports = reports || [];
    if (activeFilter === 'All' || activeFilter === 'Waste' || activeFilter === 'Critical') {
      activeReports.forEach((r, i) => {
        if (activeFilter === 'Critical' && r.severity !== 'Critical') return;
        markers.push({
          id: `r-${r.id}`,
          type: 'report',
          title: r.type,
          severity: r.severity,
          status: r.status,
          time: r.time,
          location: r.location,
          top: 30 + (i * 12) + '%',
          left: 20 + (i * 15 > 70 ? 20 : i * 15) + '%',
          color: r.severity === 'Critical' ? 'bg-red-500' : 'bg-yellow-500'
        });
      });
    }

    if (activeFilter === 'All' || activeFilter === 'Skin Buyers') {
      skinBuyersData.forEach((s, i) => {
        markers.push({
          id: `s-${s.id}`,
          type: 'skin',
          title: s.name,
          severity: 'Info',
          status: s.status,
          time: s.distance,
          location: 'Nearby',
          top: 60 + (i * 10) + '%',
          left: 60 - (i * 10) + '%',
          color: 'bg-blue-500'
        });
      });
    }
    
    return markers;
  };

  const markers = generateMarkers();

  return (
    <div className="h-full w-full relative bg-[#e5e3df] overflow-hidden">
      {/* Fake Map Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(#0a8a43 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      <div className="absolute inset-0 border-[40px] border-[#d8d6ce] opacity-50 rounded-[100px] -m-10"></div>
      
      {/* Top Search & Filters */}
      <div className="absolute top-0 w-full p-4 z-10 bg-gradient-to-b from-gray-900/40 to-transparent">
        <div className="bg-white rounded-full flex items-center px-4 py-3 shadow-lg">
          <Search size={20} className="text-gray-400 mr-3" />
          <input 
            type="text" 
            placeholder="Search area, ward, mosque..." 
            className="bg-transparent border-none outline-none flex-1 text-sm font-medium"
          />
        </div>
        
        <div className="flex overflow-x-auto scrollbar-hide mt-3 pb-1 space-x-2">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors ${activeFilter === f ? 'bg-brand text-white' : 'bg-white text-gray-600'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Markers */}
      {markers.map(m => (
        <button
          key={m.id}
          onClick={() => setSelectedMarker(m)}
          className={`absolute w-8 h-8 rounded-full ${m.color} text-white flex items-center justify-center shadow-lg border-2 border-white transform transition-transform ${selectedMarker?.id === m.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'}`}
          style={{ top: m.top, left: m.left }}
        >
          <MapPin size={16} />
        </button>
      ))}

      {/* Bottom Selected Card */}
      <div className={`absolute bottom-20 w-full px-4 transition-transform duration-300 z-30 ${selectedMarker ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        {selectedMarker && (
          <div className="bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 relative">
            <button 
              onClick={() => setSelectedMarker(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-1"
            >
              <X size={16} />
            </button>
            
            <div className="pr-8">
              <div className="flex items-center space-x-2 mb-1">
                {selectedMarker.severity === 'Critical' && <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Critical</span>}
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{selectedMarker.type === 'report' ? 'Report' : 'Skin Buyer'}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{selectedMarker.title}</h3>
              
              <div className="space-y-1 mb-4">
                <p className="text-xs text-gray-600 flex items-center">
                  <MapPin size={12} className="mr-1.5 text-gray-400" /> {selectedMarker.location}
                </p>
                <p className="text-xs text-gray-600 flex items-center">
                  <StatusChip status={selectedMarker.status} />
                  <span className="ml-2 text-gray-400">· {selectedMarker.time}</span>
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-brand text-white py-2.5 rounded-xl font-bold text-sm shadow-brand/30 shadow-lg active:scale-95 transition-transform">
                View Details
              </button>
              <button className="flex-1 bg-gray-100 text-gray-800 py-2.5 rounded-xl font-bold text-sm border border-gray-200 active:scale-95 transition-transform flex items-center justify-center">
                {selectedMarker.type === 'report' ? <><Navigation size={16} className="mr-1.5" /> Navigate</> : <><Phone size={16} className="mr-1.5" /> Contact</>}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapScreen;
