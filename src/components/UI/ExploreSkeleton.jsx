import React from 'react'

const ExploreSkeleton = () => {
  return (
    <div className="row">
      {new Array(8).fill(0).map((_, index) => (
        <div 
          key={index} 
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12" 
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <div className="skeleton_card">
            <div className="new_skeleton_card-wrapper">
              <div className="skeleton_img-wrap skeleton-box">
                <div className="new_skeleton_pp-wrapper">
                  <div className="new_skeleton_pp skeleton-box"></div>
                  <i className="fa fa-check new_skeleton_check"></i>
                </div>
              </div>
              <div className="new_skeleton-info">
                <div className="new_skeleton_card-title skeleton-box"></div>
                <div className="skel_price_row">
                  <div className="new_skeleton-price skeleton-box"></div>
                  <div className="new_skeleton_card-likes skeleton-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}  
    </div>
  );
};

export default ExploreSkeleton;