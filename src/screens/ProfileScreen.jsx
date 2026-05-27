import React from 'react';
import Header from '../components/Header';
import { User, ShieldCheck, Truck, ShoppingBag, Eye, Settings, HelpCircle, PhoneCall, LogOut } from 'lucide-react';

const ProfileScreen = ({ currentRole, setCurrentRole, setCurrentScreen }) => {
  const roles = [
    { id: 'citizen', title: 'Citizen View', icon: User },
    { id: 'volunteer', title: 'Volunteer View', icon: ShieldCheck },
    { id: 'cleaner', title: 'Cleaner View', icon: Truck },
    { id: 'skinBuyer', title: 'Skin Buyer View', icon: ShoppingBag },
    { id: 'coordinator', title: 'Coordinator View', icon: Eye },
  ];

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      <Header title="Profile" />
      
      <div className="p-4 flex items-center bg-white border-b border-gray-100 mb-4">
        <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center text-brand font-bold text-xl mr-4 border-2 border-brand/20">
          RA
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">Ruhul Ameen</h2>
          <p className="text-xs text-gray-500 font-medium">Ward 12, Rajshahi</p>
          <div className="mt-1 bg-brand text-white text-[10px] px-2 py-0.5 rounded-full inline-block font-semibold tracking-wide uppercase">
            {currentRole} Mode
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 px-1">Switch Role Demo</h3>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <button 
                  key={role.id}
                  onClick={() => {
                    setCurrentRole(role.id);
                    setCurrentScreen('home');
                  }}
                  className={`w-full flex items-center p-4 text-sm font-semibold transition-colors ${currentRole === role.id ? 'bg-brand/5 text-brand' : 'text-gray-700 hover:bg-gray-50'} ${idx !== roles.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <Icon size={18} className={`mr-3 ${currentRole === role.id ? 'text-brand' : 'text-gray-400'}`} />
                  {role.title}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 px-1">Settings & Support</h3>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden space-y-0.5">
            <button className="w-full flex items-center p-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 border-b border-gray-50">
              <Settings size={18} className="mr-3 text-gray-400" /> App Settings
            </button>
            <button className="w-full flex items-center p-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 border-b border-gray-50">
              <HelpCircle size={18} className="mr-3 text-gray-400" /> Help Center
            </button>
            <button className="w-full flex items-center p-4 text-sm font-semibold text-red-600 hover:bg-red-50 bg-red-50/30">
              <PhoneCall size={18} className="mr-3 text-red-500" /> Emergency Contacts
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4 mt-4">
        <button className="w-full py-4 bg-white border border-gray-200 text-gray-600 rounded-2xl font-bold flex items-center justify-center active:scale-95 transition-transform shadow-sm">
          <LogOut size={18} className="mr-2" /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
