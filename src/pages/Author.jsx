import React, { useEffect, useState }from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AuthorSkeleton from "../components/UI/AuthorSkeleton";

const Author = () => {
  const { authorId } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);

  async function getArtist () {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
      );
      setArtist(data);
      setFollowerCount(data.followers);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching artist details.", error);
    }
  }

  useEffect(() => {
    getArtist();
  }, [authorId]);

  if(!artist) return null;

  const handleFollowToggle = (e) => {
    e.preventDefault(); 
    if (isFollowing) {
      setFollowerCount(prev => prev - 1);
      setIsFollowing(false);
    } else {
      setFollowerCount(prev => prev + 1);
      setIsFollowing(true);
    }
  }
  return (
    <>

      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
        
          <section
            id="profile_banner"
            aria-label="section"
            className="text-light"
            data-bgimage="url(images/author_banner.jpg) top"
            style={{ background: `url(${AuthorBanner}) top` }}
          ></section>
          {loading ? (
            <AuthorSkeleton/>
          ) : artist ? (
          <section aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <img src={artist.authorImage} alt="" />
                        <i className="fa fa-check"></i>

                        <div className="profile_name">
                          <h4>
                            {artist.authorName}
                            <span className="profile_username">@{artist.tag}</span>
                            <span id="wallet" className="profile_wallet">
                              {artist.address}
                            </span>
                            <button id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">{followerCount} followers</div>
                        <Link to="#" className="btn-main" onClick={handleFollowToggle}>
                          {isFollowing ? 'Unfollow' : 'Follow'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    <AuthorItems />
                  </div>
                </div>
              </div>
            </div>
          </section>
          ) : (
          <p>Artist not found.</p>
        )}
        </div>
      </div>
    </>
  );
};

export default Author;
