import React from 'react';
import StatusChip from './StatusChip';
import { MapPin, Clock, Trash2 } from 'lucide-react';

const ReportCard = ({ report, onClick, onDelete }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-3 active:scale-[0.98] transition-transform cursor-pointer"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-800 flex-1 pr-2">{report.type}</h3>
        <StatusChip status={report.status} />
      </div>
      
      <div className="flex items-center text-xs text-gray-500 mb-1 mt-3">
        <MapPin size={12} className="mr-1 text-gray-400" />
        <span>{report.location}</span>
      </div>
      
      <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
        <span className="flex items-center">
          <Clock size={12} className="mr-1" />
          {report.time}
        </span>
        {report.severity === 'Critical' && (
          <span className="text-red-500 font-semibold bg-red-50 px-2 py-0.5 rounded">High Priority</span>
        )}
      </div>
      {onDelete && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(report.id);
          }}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-red-700 transition hover:bg-red-100"
        >
          <Trash2 size={14} /> Delete Report
        </button>
      )}
    </div>
  );
};

export default ReportCard;
