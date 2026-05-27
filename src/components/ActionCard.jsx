import React from 'react';

const ActionCard = ({ title, icon: Icon, colorClass, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-2xl ${colorClass} shadow-sm active:scale-95 transition-transform`}
    >
      <Icon size={28} className="mb-2" />
      <span className="text-xs font-semibold text-center leading-tight">{title}</span>
    </button>
  );
};

export default ActionCard;
