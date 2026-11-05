import React from 'react'

const NewSkeleton = () => {
  return (
    <>
        <div className="skeleton_container">
            <div className="skeleton_row">
                <button className="skeleton_btn skeleton_btn-left">
                    <span aria-label="prev">❮</span>
                </button>
                <div className="skeleton_row-wrapper">
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
                <button className="skeleton_btn skeleton_btn-right">
                    <span aria-label="next">❯</span>
                </button>
            </div>
      
        </div>
    </>
  )
}

export default NewSkeleton
