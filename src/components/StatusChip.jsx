import React from 'react';

const StatusChip = ({ status }) => {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case 'critical':
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'pending':
      case 'verifying':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'assigned':
      case 'in progress':
      case 'busy':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'cleaned':
      case 'verified':
      case 'available':
      case 'active':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles()}`}>
      {status}
    </span>
  );
};

export default StatusChip;
