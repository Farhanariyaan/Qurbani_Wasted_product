import React, { useState } from 'react';
import Header from '../components/Header';
import StatusChip from '../components/StatusChip';
import { MapPin, ChevronLeft, CheckCircle, Trash2 } from 'lucide-react';

const CleanupRequestScreen = ({ setCurrentScreen, cleanupRequests, onAddCleanupRequest, onDeleteCleanupRequest }) => {
  const [step, setStep] = useState(1);
  const [requestType, setRequestType] = useState('waste');
  const [location, setLocation] = useState('Ward 12, Near Mosque Road');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Medium');
  const [ticketId, setTicketId] = useState('');

  const categories = [
    { id: 'waste', label: 'Animal waste on road' },
    { id: 'blood', label: 'Blood flowing into drain' },
    { id: 'skin', label: 'Rotting skin / Rawhide' },
    { id: 'blocked', label: 'Blocked drain' },
    { id: 'smell', label: 'Bad smell / Health risk' },
    { id: 'illegal', label: 'Illegal dumping' },
    { id: 'other', label: 'Other issue' },
  ];

  const handleCategorySelect = (id) => {
    setRequestType(id);
    setStep(2);
  };

  const handleSubmitRequest = () => {
    const id = `CLR-${Math.floor(1000 + Math.random() * 9000)}`;
    const category = categories.find((c) => c.id === requestType);
    const newRequest = {
      id,
      type: category?.label ?? 'Cleanup Request',
      location,
      message: description || 'Cleanup needed at reported location',
      severity,
      status: 'Requested',
      time: 'Just now',
    };

    if (onAddCleanupRequest) {
      onAddCleanupRequest(newRequest);
    }
    setTicketId(id);
    setStep(3);
  };

  const renderCategorySelection = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Request cleanup for</h2>
      <div className="space-y-2.5">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => handleCategorySelect(c.id)}
            className="w-full text-left px-5 py-4 rounded-2xl bg-white text-gray-700 border border-gray-100 shadow-sm hover:border-brand transition-all active:scale-[0.98]"
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderRequestForm = () => (
    <div className="p-4 pb-20">
      <div className="flex items-center mb-4">
        <button onClick={() => setStep(1)} className="p-2 -ml-2 text-gray-500 hover:text-gray-900">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-bold text-gray-900">Request Cleanup</h2>
      </div>

      <div className="space-y-5">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center text-brand mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-xs font-bold uppercase tracking-wide">Location</span>
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full text-sm font-medium text-gray-900 bg-transparent outline-none"
          />
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <textarea
            placeholder="Describe the cleanup request..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-sm font-medium text-gray-900 bg-transparent outline-none min-h-[90px] resize-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block px-1">Severity</label>
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

        <button
          type="button"
          onClick={handleSubmitRequest}
          className="w-full py-4 rounded-2xl font-bold text-white bg-brand shadow-lg shadow-brand/30 active:scale-95 transition-transform"
        >
          Submit Cleanup Request
        </button>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <CheckCircle size={80} className="text-brand mb-6" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted</h2>
      <p className="text-sm text-gray-500 mb-8">The cleanup team will review this request and respond shortly.</p>

      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm w-full mb-8 text-left">
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Request ID</p>
        <p className="text-lg font-bold text-gray-900 mb-4">{ticketId || 'CLR-XXXX'}</p>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Status</p>
        <p className="text-sm font-semibold text-yellow-600">Requested</p>
      </div>

      <button
        type="button"
        onClick={() => setCurrentScreen('home')}
        className="w-full py-4 bg-brand text-white rounded-2xl font-bold shadow-lg shadow-brand/30 active:scale-95 transition-transform mb-3"
      >
        Back to Home
      </button>
      <button
        type="button"
        onClick={() => setStep(1)}
        className="w-full py-4 bg-white text-gray-700 rounded-2xl font-bold border border-gray-200 active:scale-95 transition-transform"
      >
        View Cleanup Requests
      </button>
    </div>
  );

  const renderRequestList = () => (
    <div className="px-4 mt-4 pb-8">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-gray-800 font-bold text-sm">Request cleanup list</h2>
        <span className="text-xs text-gray-500">{cleanupRequests.length} requests</span>
      </div>
      {cleanupRequests.length === 0 ? (
        <div className="bg-white p-4 rounded-2xl border border-gray-100 text-sm text-gray-500">No cleanup requests yet.</div>
      ) : (
        <div className="space-y-3">
          {cleanupRequests.map((request) => (
            <div key={request.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-900">{request.type}</h3>
                  <p className="text-xs text-gray-500 mt-1">{request.location}</p>
                </div>
                <StatusChip status={request.status} />
              </div>
              <p className="text-sm text-gray-700 mb-3">{request.message}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{request.time}</span>
                <button
                  type="button"
                  onClick={() => onDeleteCleanupRequest(request.id)}
                  className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-red-700 font-semibold"
                >
                  <Trash2 size={14} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      {step !== 3 && <Header title="Request Cleanup" />}
      {step === 1 && renderCategorySelection()}
      {step === 2 && renderRequestForm()}
      {step === 3 && renderConfirmation()}
      {step !== 2 && renderRequestList()}
    </div>
  );
};

export default CleanupRequestScreen;
