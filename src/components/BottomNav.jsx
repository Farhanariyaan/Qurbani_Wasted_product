import React from 'react';
import { Home, Map as MapIcon, PlusCircle, ClipboardList, User } from 'lucide-react';

const BottomNav = ({ currentScreen, setCurrentScreen }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'map', label: 'Map', icon: MapIcon },
    { id: 'report', label: 'Report', icon: PlusCircle, highlight: true },
    { id: 'tasks', label: 'Tasks', icon: ClipboardList },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="bg-white border-t border-gray-200 flex justify-around items-center pb-safe pt-2 pb-2 px-2 sticky bottom-0 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {tabs.map((tab) => {
        const isActive = currentScreen === tab.id;
        const Icon = tab.icon;
        
        if (tab.highlight) {
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentScreen(tab.id)}
              className="flex flex-col items-center justify-center -mt-6"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ${isActive ? 'bg-brand shadow-brand/40' : 'bg-brand'}`}>
                <Icon size={28} />
              </div>
              <span className="text-[10px] font-medium mt-1 text-gray-600">
                {tab.label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => setCurrentScreen(tab.id)}
            className={`flex flex-col items-center w-16 p-1 ${isActive ? 'text-brand' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Icon size={24} className={isActive ? 'fill-brand/10' : ''} />
            <span className={`text-[10px] mt-1 ${isActive ? 'font-semibold' : 'font-medium'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
