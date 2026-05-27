import React, { useState } from 'react';
import Header from '../components/Header';
import { Camera, MapPin, CheckCircle, AlertOctagon, ChevronLeft } from 'lucide-react';

const ReportScreen = ({ setCurrentScreen, onSubmitReport, onSubmitCleanupRequest }) => {
  const [step, setStep] = useState(1);
  const [reportType, setReportType] = useState('');
  const [isSkinMisuse, setIsSkinMisuse] = useState(false);
  const [location, setLocation] = useState('Ward 12, Near Mosque Road');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Medium');
  const [anonymous, setAnonymous] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const categories = [
    { id: 'waste', label: 'Animal waste on road' },
    { id: 'blood', label: 'Blood flowing into drain' },
    { id: 'skin', label: 'Rotting skin / Rawhide', highlight: true },
    { id: 'blocked', label: 'Blocked drain' },
    { id: 'smell', label: 'Bad smell / Health risk' },
    { id: 'illegal', label: 'Illegal dumping' },
    { id: 'other', label: 'Other issue' },
  ];

  const handleCategorySelect = (id) => {
    setReportType(id);
    setIsSkinMisuse(id === 'skin');
    setStep(2);
  };

  const handleSubmitReport = () => {
    const id = `EID-RAJ-${Math.floor(1000 + Math.random() * 9000)}`;
    const category = categories.find((c) => c.id === reportType);
    const newReport = {
      id,
      type: category?.label ?? 'Other issue',
      location,
      severity,
      status: 'Pending',
      time: 'Just now',
      isDrain: reportType === 'blood' || reportType === 'blocked',
      anonymous,
      lat: 24.3720,
      lng: 88.6200,
      description,
    };

    if (onSubmitReport) {
      onSubmitReport(newReport);
    }

    if (reportType === 'waste' && onSubmitCleanupRequest) {
      const cleanupId = `CLR-${Math.floor(1000 + Math.random() * 9000)}`;
      onSubmitCleanupRequest({
        id: cleanupId,
        type: category?.label ?? 'Animal waste on road',
        location,
        message: description || 'Cleanup requested for reported waste',
        severity,
        status: 'Requested',
        time: 'Just now',
      });
    }

    setTicketId(id);
    setStep(3);
  };

  const renderCategorySelection = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">What do you want to report?</h2>
      <div className="space-y-2.5">
        {categories.map(c => (
          <button
            key={c.id}
            onClick={() => handleCategorySelect(c.id)}
            className={`w-full text-left px-5 py-4 rounded-2xl font-semibold transition-all active:scale-[0.98] ${c.highlight ? 'bg-red-50 text-red-700 border border-red-100 shadow-sm' : 'bg-white text-gray-700 border border-gray-100 shadow-sm hover:border-brand'}`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderReportForm = () => (
    <div className="p-4 pb-20">
      <div className="flex items-center mb-4">
        <button onClick={() => setStep(1)} className="p-2 -ml-2 text-gray-500 hover:text-gray-900">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-bold text-gray-900">
          {isSkinMisuse ? 'Report Skin Misuse' : 'New Report'}
        </h2>
      </div>

      <div className="space-y-5">
        {/* Photo Upload */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl h-32 flex flex-col items-center justify-center text-gray-500 active:bg-gray-200">
          <Camera size={32} className="mb-2 text-gray-400" />
          <span className="text-sm font-medium">Tap to add photo/video</span>
        </div>

        {/* Location */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center text-brand mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-xs font-bold uppercase tracking-wide">Auto GPS Location</span>
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full text-sm font-medium text-gray-900 bg-transparent outline-none"
          />
        </div>

        {/* Description */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <textarea
            placeholder="Add details about the issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-sm font-medium text-gray-900 bg-transparent outline-none min-h-[80px] resize-none"
          ></textarea>
        </div>

        {/* Severity */}
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block px-1">Severity Level</label>
          <div className="flex space-x-2">
            {['Low', 'Medium', 'High', 'Critical'].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setSeverity(level)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${severity === level ? 'bg-brand text-white border-brand' : 'border-gray-200 bg-white text-gray-600'}`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-brand focus:ring-brand accent-brand" />
            <span className="text-sm font-medium text-gray-700">This is near drain/water</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-brand focus:ring-brand accent-brand" />
            <span className="text-sm font-medium text-gray-700">This is near mosque/market</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-brand focus:ring-brand accent-brand"
            />
            <span className="text-sm font-medium text-gray-700">Report anonymously</span>
          </label>
        </div>

        <button 
          onClick={handleSubmitReport}
          className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg active:scale-95 transition-transform ${isSkinMisuse ? 'bg-red-600 shadow-red-600/30' : 'bg-brand shadow-brand/30'}`}
        >
          Submit Report
        </button>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      {isSkinMisuse ? (
        <AlertOctagon size={80} className="text-red-500 mb-6" />
      ) : (
        <CheckCircle size={80} className="text-brand mb-6" />
      )}
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {isSkinMisuse ? 'Skin Risk Report Submitted' : 'Report Submitted'}
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        {isSkinMisuse ? 'Your report will be verified by a coordinator immediately.' : 'Estimated response: 1-3 hours.'}
      </p>

      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm w-full mb-8 text-left">
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Ticket ID</p>
        <p className="text-lg font-bold text-gray-900 mb-4">{ticketId || 'EID-RAJ-XXXX'}</p>
        
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Status</p>
        <p className="text-sm font-semibold text-yellow-600">Pending Verification</p>
      </div>

      <button 
        onClick={() => setCurrentScreen('tasks')}
        className="w-full py-4 bg-brand text-white rounded-2xl font-bold shadow-lg shadow-brand/30 active:scale-95 transition-transform mb-3"
      >
        Track Report
      </button>
      <button 
        onClick={() => setCurrentScreen('home')}
        className="w-full py-4 bg-white text-gray-700 rounded-2xl font-bold active:scale-95 transition-transform"
      >
        Back to Home
      </button>
    </div>
  );

  return (
    <div className="min-h-full bg-gray-50">
      {step !== 3 && <Header title="Report Issue" />}
      {step === 1 && renderCategorySelection()}
      {step === 2 && renderReportForm()}
      {step === 3 && renderConfirmation()}
    </div>
  );
};

export default ReportScreen;
