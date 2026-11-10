import React from 'react'
import Skeleton from './Skeleton'

const AuthorSkeleton = () => {
  return (
    <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
        
          <section aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <Skeleton 
                            width="150px" 
                            height="150px" 
                            borderRadius="50%"
                        />
                        <i className="fa fa-check"></i>

                        <div className="profile_name"
                            style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'flex-start' }}>
                          <Skeleton 
                            width="200px" 
                            height="40px"
                            className="h4"
                            />
                            <Skeleton 
                                width="200px" 
                                height="18px" 
                                className="profile_username"
                            />
                            <Skeleton 
                                width="200px" 
                                height="16px" 
                                className="profile_wallet"
                            />
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <span style={{marginRight: '20px'}}>
                        <Skeleton 
                            width="100px" 
                            height="16px"
                            style={{marginRight: '8px'}}
                        />
                        </span>
                        <Skeleton 
                            width="125px" 
                            height="42px" 
                            className="profile_follower"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default AuthorSkeleton
