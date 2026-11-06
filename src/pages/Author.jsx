import React, { useEffect, useState }from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";

const Author = () => {

  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getArtist () {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/author?authorId=${id}`
      );
      setArtist(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching artist details.", error);
    }
  }

  useEffect(() => {
    getArtist();
  }, [id]);

  if(!artist) return null;

  return (
    <>
    {loading ? (
      <p>Loading artist details...</p>
    ) : artist ? (
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
                            <span className="profile_username">@{artist.authorUsername}</span>
                            <span id="wallet" className="profile_wallet">
                              UDHUHWudhwd78wdt7edb32uidbwyuidhg7wUHIFUHWewiqdj87dy7
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
                        <div className="profile_follower">573 followers</div>
                        <Link to="#" className="btn-main">
                          Follow
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
        </div>
      </div>
    ) : (
      <p>Artist not found.</p>
    )}
    </>
  );
};

export default Author;
