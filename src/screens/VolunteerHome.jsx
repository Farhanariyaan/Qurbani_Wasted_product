import React from 'react';
import Header from '../components/Header';
import { Camera, MapPin, CheckCircle, Navigation } from 'lucide-react';
import StatusChip from '../components/StatusChip';

const VolunteerHome = ({ setCurrentScreen, reports }) => {
  const pendingReports = reports.filter((r) => r.status.toLowerCase() === 'pending');

  return (
    <div className="pb-20">
      <Header title="Volunteer Mode" subtitle="Ward 12 Operations" showLocation={false} />
      
      <div className="p-4">
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-brand rounded-full mr-2 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            <span className="font-bold text-gray-900">Available for Tasks</span>
          </div>
          <div className="w-12 h-6 bg-brand rounded-full relative cursor-pointer">
            <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-brand text-white p-4 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold mb-1">14</p>
            <p className="text-xs font-semibold opacity-90 uppercase tracking-wide">Verified Today</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-gray-900 mb-1">320</p>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Points Earned</p>
          </div>
        </div>

        <h2 className="text-gray-900 font-bold mb-3 px-1">Nearby Reports to Verify</h2>
        
        <div className="space-y-3">
          {pendingReports.slice(0, 2).map((r, i) => (
            <div key={r.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900 text-lg">{r.type}</h3>
                <StatusChip status={r.status} />
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-4">
                <MapPin size={14} className="mr-1 text-gray-400" />
                <span>{r.location} • {i === 0 ? '400m away' : '1.2km away'}</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 py-3 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-gray-900/20 active:scale-95 transition-transform flex items-center justify-center">
                  <CheckCircle size={16} className="mr-2" /> Start Verification
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerHome;
