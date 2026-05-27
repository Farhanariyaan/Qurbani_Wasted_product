import React from 'react';
import { User, ShieldCheck, Truck, ShoppingBag, Eye } from 'lucide-react';

const OnboardingScreen = ({ setCurrentScreen, setCurrentRole }) => {
  
  const roles = [
    { id: 'citizen', title: 'Citizen', desc: 'Report waste, request cleanup, find buyers', icon: User, color: 'bg-blue-50 text-blue-600' },
    { id: 'volunteer', title: 'Volunteer', desc: 'Verify reports and support community', icon: ShieldCheck, color: 'bg-green-50 text-green-600' },
    { id: 'cleaner', title: 'Cleaner', desc: 'Receive cleanup tasks and update status', icon: Truck, color: 'bg-orange-50 text-orange-600' },
    { id: 'skinBuyer', title: 'Skin Buyer', desc: 'Collect hides and manage rawhide requests', icon: ShoppingBag, color: 'bg-purple-50 text-purple-600' },
    { id: 'coordinator', title: 'Coordinator', desc: 'Monitor ward-level Eid operations', icon: Eye, color: 'bg-brand/10 text-brand' },
  ];

  const handleRoleSelect = (roleId) => {
    setCurrentRole(roleId);
    setCurrentScreen('home');
  };

  return (
    <div className="h-full bg-white flex flex-col pt-12 px-5 pb-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to QurbaniHub</h1>
        <p className="text-gray-500 text-sm">How will you use the app during Eid operations?</p>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto pb-6">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <button
              key={role.id}
              onClick={() => handleRoleSelect(role.id)}
              className="w-full flex items-center p-4 border border-gray-100 rounded-2xl bg-white shadow-sm hover:border-brand hover:shadow-md transition-all active:scale-[0.98] text-left group"
            >
              <div className={`p-3 rounded-xl mr-4 ${role.color} group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{role.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{role.desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingScreen;
