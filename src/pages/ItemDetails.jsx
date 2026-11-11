import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ItemSkeleton from "../components/UI/ItemSkeleton";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const ItemDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  
  async function fetchArt () {
    setLoading(true);
    try {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`
    );
      setArt(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching details.", error);
    }
  }

    fetchArt();
  }, [id])

  if(!art) return null;
  return (
    <>
    {loading ? (
      <ItemSkeleton />
    ) : art ? (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center" 
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img
                  src={art.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                />
              </div>
              <div className="col-md-6" 
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500">
                <div className="item_info">
                  <h2>{art.title} #{art.tag}</h2>
                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {art.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {art.likes}
                    </div>
                  </div>
                  <p>
                    {art.description}
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${art.ownerId}`}>
                            <img className="lazy" src={art.ownerImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${art.ownerId}`}>{art.ownerName}</Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${art.creatorId}`}>
                            <img className="lazy" src={art.creatorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${art.creatorId}`}>{art.creatorName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{art.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    ) : (
      <p>No details found</p>
    )}
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
    </>
  );
};

export default ItemDetails;
