import React from 'react'

const TopSkeleton = () => {
  return (
    <>
            <div className="container">
              <div className="row">  
                <div className="col-md-12">               
                  <ol className="author_list">
                    {new Array(12).fill(0).map((_, index) => (
                    <li key={index}>
                        <div className="author_list_pp">
                            <div className="top_skeleton_pp skeleton-box"></div>
                            <i className="fa fa-check top_skeleton_check"></i>
                        </div>
                        <div className="author_list_info">
                            <div className="top_skeleton_name skeleton-box"></div>
                            <div className="top_skeleton_tag skeleton-box"></div>
                        </div>
                    </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
    </>
  )
}

export default TopSkeleton
