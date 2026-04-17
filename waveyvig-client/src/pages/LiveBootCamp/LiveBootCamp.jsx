import React from 'react';
import DropdownComponent from '../../ReusableComponents/DropdownComponent';

const LiveBootCamp = () => {
  const dropdownItems = [
    { label: 'Fullstack Bootcamp', path: '/fullstack-course' },
    { label: 'UI/UX Bootcamp', path: '/uiux-course' },
    { label: 'DevOps Bootcamp', path: '/devops-course' },
  ];

  return (
    <div className="bg-primary" style={{ padding: '10px', borderRadius: '10px' }}>
     
      {/* Your custom Dropdown component */}
      <DropdownComponent title="Live Bootcamp" items={dropdownItems} />
    </div>
  );
};

export default LiveBootCamp;