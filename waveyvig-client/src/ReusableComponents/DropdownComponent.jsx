import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownComponent = ({ title, items }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span style={{ color: 'white', cursor: 'pointer' }}>{title}</span>
      {show && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            zIndex: 1000,
            minWidth: '200px',
          }}
        >
          {items.map((item, index) => (
            <div key={index} style={{ padding: '8px' }}>
              <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }} onClick={() => setShow(false)}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;