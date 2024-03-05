import React from 'react';
const ScrollAnim = React.lazy(() => import('../ScrollAnim/ScrollAnim'));
const Loader = () => {
  return (
    <>
      <ScrollAnim />
      <div className="loader-container">
        <div className="blue-blur-circle"></div>
        <div className="triangle-container">
          <svg className="triangle" viewBox="0 0 100 100">
            <path className="hidden" d="M 50 0 L 100 100 L 0 100 Z" />
          </svg>
          <p>Loading...</p>
        </div>
        <div className="green-blur-circle"></div>
      </div>
    </>
  );
};

export default Loader;
