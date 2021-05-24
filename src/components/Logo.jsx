import React from 'react';

const Logo = ({ className }) => (
  <svg
    className={className}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 45 21"
    enableBackground="new 0 0 45 21"
    xmlSpace="preserve"
  >
    <g>
      <rect width="3" height="21"></rect>
      <rect x="6" width="3" height="21"></rect>
      <rect x="12" width="3" height="21"></rect>
      <rect x="18" width="3" height="21"></rect>
      <g>
        <rect x="24" y="18" width="21" height="3"></rect>
        <rect x="24" y="12" width="21" height="3"></rect>
        <rect x="24" y="6" width="21" height="3"></rect>
        <rect x="24" width="21" height="3"></rect>
      </g>
    </g>
  </svg>
);

export default Logo;
