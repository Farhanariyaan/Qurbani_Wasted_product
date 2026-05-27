import React, { useEffect } from 'react';
import { Leaf, MapPin, Moon } from 'lucide-react';

const SplashScreen = ({ setCurrentScreen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [setCurrentScreen]);

  return (
    <div className="h-full w-full bg-brand flex flex-col items-center justify-center text-white p-6 relative">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Moon size={120} />
      </div>
      
      <div className="flex flex-col items-center z-10 space-y-6">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg relative">
          <Moon size={40} className="text-brand absolute right-6 top-5" />
          <MapPin size={32} className="text-accent absolute left-7 bottom-6" />
          <Leaf size={24} className="text-brand absolute left-5 top-8" />
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">QurbaniHub</h1>
          <p className="text-sm font-medium opacity-90 tracking-wide text-green-50">
            Clean Eid. Safe Community.
          </p>
          <p className="text-xs opacity-75 mt-1">Smart Qurbani Management</p>
        </div>
      </div>
      
      <div className="absolute bottom-12 w-full px-8">
        <button 
          onClick={() => setCurrentScreen('onboarding')}
          className="w-full bg-white text-brand font-semibold py-4 rounded-2xl shadow-xl active:scale-95 transition-transform"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
