import React from 'react'
import Skeleton from './Skeleton';

const TopSkeleton = () => {
  return (
    <>
        {new Array(12).fill(0).map((_, index) => (
        <li key={index}>
          <div className="author_list_pp">
            <Skeleton width="50px" height="50px" borderRadius="50%" />
            <i className="fa fa-check"></i>
          </div>
          <div className="author_list_info">
            <Skeleton width="100px" height="20px" />
            <span>
              <Skeleton width="40px" height="20px" />
            </span>
          </div>
        </li>
      ))}
                  
    </>
  )
}

export default TopSkeleton
