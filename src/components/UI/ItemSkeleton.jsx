import React from 'react'

const ItemSkeleton = () => {
  return (
    <section className="item_section">
        <div className="skel_container">
            <div className="skel_row">
                <div className="item_skel-img skeleton-box"></div>
                <div className="item_info-skel">
                    <div className="skel_title skeleton-box"></div>
                    <div className="item_info_counts">
                        <div className="skeleton_views skeleton-box"></div>
                        <div className="skeleton_views skeleton-box"></div>
                    </div>
                    <div className="item_info_p skeleton-box"></div>
                    <h6 className="font-24px">Owner</h6>
                    <div className="item_skel_pp">
                        <div className="item_pp skeleton-box"></div>
                        <div className="item_name skeleton-box"></div>
                    </div>
                    <h6 className="font-24px">Creator</h6>
                    <div className="item_skel_pp">
                        <div className="item_pp skeleton-box"></div>
                        <div className="item_name skeleton-box"></div>
                    </div>
                    <h6 className="font-24px">Price</h6>
                    <div className="item_name skeleton-box"></div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default ItemSkeleton
