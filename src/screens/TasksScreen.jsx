import React, { useState } from 'react';
import Header from '../components/Header';
import StatusChip from '../components/StatusChip';
import { CheckSquare, List, MapPin } from 'lucide-react';

const TasksScreen = ({ currentRole, reports, onDeleteReport }) => {
  const [activeTab, setActiveTab] = useState(currentRole === 'citizen' ? 'reports' : 'tasks');
  const citizenReports = reports.filter((r) => ['Pending', 'Verifying', 'Assigned'].includes(r.status));

  const renderCitizenView = () => (
    <div className="p-4 space-y-4">
      {citizenReports.slice(0, 2).map((r, idx) => (
        <div key={r.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Report {r.id}</p>
              <h3 className="font-bold text-gray-900 leading-tight">{r.type}</h3>
            </div>
            <StatusChip status={r.status} />
          </div>
          
          <div className="relative pl-4 border-l-2 border-brand/30 space-y-4 mb-2">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand"></div>
              <p className="text-xs font-bold text-gray-800">Submitted</p>
              <p className="text-[10px] text-gray-500">Citizen • {r.time}</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand"></div>
              <p className="text-xs font-bold text-gray-800">Verification Assigned</p>
              <p className="text-[10px] text-gray-500">System • Just now</p>
            </div>
            {idx === 1 && (
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                <p className="text-xs font-bold text-gray-400">Cleaner Notified</p>
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
            {idx === 1 && (
              <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-xl text-xs font-bold active:scale-95 transition-transform border border-gray-200">
                Cancel Report
              </button>
            )}
            <button
              type="button"
              onClick={() => onDeleteReport?.(r.id)}
              className="w-full py-2 bg-red-50 text-red-700 rounded-xl text-xs font-bold active:scale-95 transition-transform border border-red-200"
            >
              Delete Report
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderChecklist = () => (
    <div className="p-4 space-y-3">
      <div className="bg-brand/10 p-4 rounded-2xl mb-4">
        <h3 className="font-bold text-brand mb-1">Qurbani Preparation</h3>
        <p className="text-xs text-brand/80 mb-3">7 of 15 tasks completed</p>
        <div className="h-1.5 w-full bg-brand/20 rounded-full overflow-hidden">
          <div className="h-full bg-brand w-[46%]"></div>
        </div>
      </div>
      
      {[
        { id: 1, text: 'Confirm slaughter location', done: true },
        { id: 2, text: 'Prepare waste bags', done: true },
        { id: 3, text: 'Prepare salt for skin', done: true },
        { id: 4, text: 'Keep bleaching powder', done: false },
        { id: 5, text: 'Keep blood away from drains', done: false },
        { id: 6, text: 'Separate skin, bones, entrails', done: false },
      ].map(item => (
        <label key={item.id} className={`flex items-center p-3 rounded-xl border ${item.done ? 'bg-gray-50 border-gray-100' : 'bg-white border-gray-200 shadow-sm'} transition-colors`}>
          <input type="checkbox" defaultChecked={item.done} className="w-5 h-5 rounded border-gray-300 text-brand focus:ring-brand accent-brand mr-3" />
          <span className={`text-sm font-medium ${item.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{item.text}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      <Header title="My Tasks" />
      
      {currentRole === 'citizen' && (
        <div className="flex p-4 pb-0 space-x-2">
          <button 
            onClick={() => setActiveTab('reports')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center ${activeTab === 'reports' ? 'bg-gray-800 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}
          >
            <List size={16} className="mr-2" /> My Reports
          </button>
          <button 
            onClick={() => setActiveTab('checklist')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center ${activeTab === 'checklist' ? 'bg-gray-800 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}
          >
            <CheckSquare size={16} className="mr-2" /> Checklist
          </button>
        </div>
      )}

      {activeTab === 'reports' ? renderCitizenView() : renderChecklist()}
    </div>
  );
};

export default TasksScreen;
