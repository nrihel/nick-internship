import React from 'react';
import { Link } from 'react-router-dom';

export default function LoadMoreButton({ totalItems, visibleCount, setVisibleCount }) {
  
  if (visibleCount >= totalItems) {
    return null; 
  }

  const handleNextStep = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <Link 
      to="#" 
      onClick={(e) => {
        e.preventDefault();
        handleNextStep();
      }}
      className="btn-main lead"
    >
      Load More
    </Link>
  );
}
