import React from 'react';
import Header from '../components/Header';
import { AlertTriangle, Users, Truck, CheckCircle } from 'lucide-react';
import StatusChip from '../components/StatusChip';

const CoordinatorHome = ({ reports }) => {
  const pendingCount = reports.filter((r) => r.status.toLowerCase() === 'pending').length;
  const resolvedCount = reports.filter((r) => ['cleaned', 'verified'].includes(r.status.toLowerCase())).length;
  const totalReports = reports.length;
  const criticalReports = reports.filter((r) => r.severity === 'Critical');

  return (
    <div className="pb-20">
      <Header title="Ward Operations" subtitle="Ward 12, Rajshahi" />
      
      <div className="p-4 space-y-4">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-2xl font-bold text-gray-900 mb-1">{totalReports}</p>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Total Reports</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-2xl font-bold text-brand mb-1">{resolvedCount}</p>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Resolved</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-xl font-bold text-gray-900 mb-1">38</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Volunteers</p>
            </div>
            <Users size={20} className="text-gray-300" />
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-xl font-bold text-gray-900 mb-1">12</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Cleaners</p>
            </div>
            <Truck size={20} className="text-gray-300" />
          </div>
        </div>

        {/* Heatmap / Critical Zones Card */}
        <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertTriangle size={80} />
          </div>
          <h3 className="font-bold text-lg mb-3">Critical Zones</h3>
          <div className="space-y-2 z-10 relative">
            <div className="flex justify-between items-center bg-white/10 p-2 px-3 rounded-lg">
              <span className="text-sm font-semibold">Shaheb Bazar</span>
              <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded font-bold">3 Critical</span>
            </div>
            <div className="flex justify-between items-center bg-white/10 p-2 px-3 rounded-lg">
              <span className="text-sm font-semibold">Talaimari</span>
              <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded font-bold">2 High</span>
            </div>
            <div className="flex justify-between items-center bg-white/10 p-2 px-3 rounded-lg">
              <span className="text-sm font-semibold">Motihar</span>
              <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded font-bold">{pendingCount} Pending</span>
            </div>
          </div>
        </div>

        <h2 className="text-gray-900 font-bold mt-4 mb-2 px-1 text-sm">Critical Reports Requiring Action</h2>
        
        {criticalReports.map((r) => (
          <div key={r.id} className="bg-red-50 border border-red-100 p-4 rounded-2xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-red-900 text-lg leading-tight pr-4">{r.type}</h3>
              <StatusChip status={r.status} />
            </div>
            <p className="text-xs text-red-700 font-medium mb-1">Reported: {r.time}</p>
            <p className="text-xs text-red-700 font-medium mb-4 flex items-center">
              <CheckCircle size={12} className="mr-1" /> Verified by Volunteer
            </p>
            
            <button className="w-full py-2.5 bg-red-600 text-white rounded-xl text-sm font-bold shadow-md shadow-red-600/20 active:scale-95 transition-transform">
              Assign Cleaner Team
            </button>
          </div>
        ))}
        
        <button className="w-full mt-2 py-3 bg-white text-gray-800 border border-gray-200 rounded-xl text-sm font-bold shadow-sm active:scale-95 transition-transform flex items-center justify-center">
          Export Daily Summary
        </button>
      </div>
    </div>
  );
};

export default CoordinatorHome;
