import React from 'react';
import Header from '../components/Header';
import ActionCard from '../components/ActionCard';
import ReportCard from '../components/ReportCard';
import { AlertTriangle, PlusCircle, Trash2, ShoppingBag, CheckSquare } from 'lucide-react';
import { mockUser } from '../data/mockData';

const CitizenHome = ({ setCurrentScreen, reports, onDeleteReport }) => {
  const pendingReports = reports.filter((r) => r.status.toLowerCase() === 'pending');
  const recentReports = reports.slice(0, 3);
  const displayReports = pendingReports.length > 0 ? pendingReports.slice(0, 3) : recentReports;

  return (
    <div className="pb-6">
      <Header 
        title={`Assalamu Alaikum, ${mockUser.name.split(' ')[0]}`} 
        showLocation={true} 
      />
      
      {/* Alert Banner */}
      <div className="bg-red-50 border-l-4 border-accent p-3 mx-4 mt-4 rounded-r-lg flex items-start">
        <AlertTriangle size={20} className="text-accent mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-accent font-bold text-sm">Urgent Alert</h4>
          <p className="text-xs text-red-800 mt-0.5">Rotting rawhide reported near Shaheb Bazar. Avoid area and report if you see more.</p>
        </div>
      </div>

      <div className="px-4 mt-5">
        <h2 className="text-gray-800 font-bold mb-3 text-sm px-1">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <ActionCard 
            title="Report Waste" 
            icon={PlusCircle} 
            colorClass="bg-brand text-white" 
            onClick={() => setCurrentScreen('report')}
          />
          <ActionCard 
            title="Request Cleanup" 
            icon={Trash2} 
            colorClass="bg-white border border-gray-200 text-brand" 
            onClick={() => setCurrentScreen('report')}
          />
          <ActionCard 
            title="Find Skin Buyer" 
            icon={ShoppingBag} 
            colorClass="bg-blue-50 text-blue-600 border border-blue-100" 
            onClick={() => setCurrentScreen('map')}
          />
          <ActionCard 
            title="Qurbani Checklist" 
            icon={CheckSquare} 
            colorClass="bg-orange-50 text-orange-600 border border-orange-100" 
            onClick={() => setCurrentScreen('tasks')}
          />
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 font-medium">Ward Cleanliness</p>
            <p className="text-2xl font-bold text-brand mt-1">72%</p>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-gray-100 flex items-center justify-center relative">
            <svg className="absolute w-full h-full rotate-[-90deg]">
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-100" />
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="8" fill="none" strokeDasharray="175" strokeDashoffset="49" className="text-brand transition-all duration-1000" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-bold text-gray-700">Fair</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="bg-white p-3 rounded-xl border border-gray-100 text-center">
            <p className="text-lg font-bold text-gray-800">38</p>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1">Volunteers</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-100 text-center">
            <p className="text-lg font-bold text-gray-800">12</p>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1">Cleaners</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-100 text-center">
            <p className="text-lg font-bold text-accent">{pendingReports.length}</p>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1">Pending</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="flex justify-between items-end mb-3 px-1">
          <h2 className="text-gray-800 font-bold text-sm">Recent Activity</h2>
          <button className="text-xs text-brand font-semibold" onClick={() => setCurrentScreen('map')}>View Map</button>
        </div>
        
        {displayReports.map((report) => (
          <ReportCard
            key={report.id}
            report={report}
            onClick={() => setCurrentScreen('tasks')}
            onDelete={onDeleteReport}
          />
        ))}
      </div>
    </div>
  );
};

export default CitizenHome;
