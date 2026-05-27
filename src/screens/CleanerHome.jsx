import React from 'react';
import Header from '../components/Header';
import { Navigation, CheckCircle, UploadCloud } from 'lucide-react';
import StatusChip from '../components/StatusChip';

const CleanerHome = ({ reports }) => {
  const assignedReports = reports.filter((report) => ['Assigned', 'Pending', 'Verifying'].includes(report.status)).slice(0, 3);

  return (
    <div className="pb-20">
      <Header title="Cleaner Team Mode" subtitle="Boalia Cleanup Team 3" />
      
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col items-center">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-2">Vehicle Capacity</p>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 w-[60%]"></div>
          </div>
          <p className="text-sm font-bold text-gray-900 mt-2">60% Full</p>
        </div>

        <h2 className="text-gray-900 font-bold mb-3 px-1 text-sm">Assigned Tasks</h2>
        
        <div className="space-y-4">
          {assignedReports.map((r, i) => (
            <div key={r.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-900 text-lg leading-tight">{r.type}</h3>
                <StatusChip status={r.status} />
              </div>
              
              <div className="text-sm font-medium text-gray-600 mb-4 mt-2">
                <p>Location: <span className="text-gray-900">{r.location}</span></p>
                <p>Severity: <span className={r.severity === 'Critical' ? 'text-red-600' : 'text-gray-900'}>{r.severity}</span></p>
              </div>

              {i === 0 ? (
                <button className="w-full py-3 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-gray-900/20 active:scale-95 transition-transform flex items-center justify-center">
                  <Navigation size={16} className="mr-2" /> Navigate to Location
                </button>
              ) : (
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <button className="flex-1 py-2.5 bg-brand text-white rounded-xl text-xs font-bold shadow-md shadow-brand/20 active:scale-95 transition-transform">
                      Waste Collected
                    </button>
                    <button className="flex-1 py-2.5 bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-transform">
                      Bleaching Done
                    </button>
                  </div>
                  <button className="w-full py-2.5 bg-gray-100 text-gray-700 rounded-xl text-xs font-bold border border-gray-200 flex items-center justify-center active:scale-95 transition-transform">
                    <UploadCloud size={16} className="mr-2" /> Upload After Photo
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleanerHome;
