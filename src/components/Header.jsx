import React from 'react';
import { Bell, MapPin } from 'lucide-react';
import { mockUser } from '../data/mockData';

const Header = ({ title, subtitle, showLocation = false }) => {
  return (
    <div className="bg-brand text-white px-4 pt-6 pb-4 sticky top-0 z-50 rounded-b-2xl shadow-md">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
        </div>
        <button className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border border-brand"></span>
        </button>
      </div>
      
      {showLocation && (
        <div className="flex items-center text-xs mt-2 bg-white/20 inline-flex px-2 py-1 rounded-full">
          <MapPin size={12} className="mr-1" />
          <span>{mockUser.ward}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
