import React from 'react'

const CollSkeleton = () => {
  return (
    <>
    <div className="skeleton_container">
        <div className="skeleton_row">
            <button className="skeleton_btn skeleton_btn-left">
                <span aria-label="prev">❮</span>
            </button>
            <div className="skeleton_row-wrapper"> 
                <div className="skeleton_card">
                    <div className="skeleton_card-wrapper">
                    <div className="skeleton_wrap skeleton-box">
                    </div>
                    <div className="skeleton_pp-wrapper">
                        <div className="skeleton_pp skeleton-box"></div>
                            <i className="fa fa-check skeleton_check"></i>
                    </div>
                    <div className="skeleton_info skeleton-box">
                    </div>
                    </div>
                </div>
                <div className="skeleton_card">
                    <div className="skeleton_card-wrapper">
                    <div className="skeleton_wrap skeleton-box">
                    </div>
                    <div className="skeleton_pp-wrapper">
                        <div className="skeleton_pp skeleton-box"></div>
                            <i className="fa fa-check skeleton_check"></i>
                    </div>
                    <div className="skeleton_info skeleton-box">
                    </div>
                    </div>
                </div>
                <div className="skeleton_card">
                    <div className="skeleton_card-wrapper">
                    <div className="skeleton_wrap skeleton-box">
                    </div>
                    <div className="skeleton_pp-wrapper">
                        <div className="skeleton_pp skeleton-box"></div>
                            <i className="fa fa-check skeleton_check"></i>
                    </div>
                    <div className="skeleton_info skeleton-box">
                    </div>
                    </div>
                </div>
                <div className="skeleton_card">
                    <div className="skeleton_card-wrapper">
                    <div className="skeleton_wrap skeleton-box">
                    </div>
                    <div className="skeleton_pp-wrapper">
                        <div className="skeleton_pp skeleton-box"></div>
                            <i className="fa fa-check skeleton_check"></i>
                    </div>
                    <div className="skeleton_info skeleton-box">
                    </div>
                    </div>
                </div>
            </div>
            <button className="skeleton_btn skeleton_btn-right">
                <span aria-label="next">❯</span>
            </button>    
        </div>
    </div>
    </>
  )
}

export default CollSkeleton
