import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CollSkeleton from '../../components/UI/CollSkeleton';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HotCollections = () => {

  const [art, setArt] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function getArt() {
      setLoading(true);
      try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`
      );
      setArt(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching collections:", error);
    } 
  }
  getArt();
  
  }, [])

  return (
    <>
      <section id="section-collections" className="no-bottom">
        <div className="container">
          <div className="row" data-aos="zoom-out-up">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Hot Collections</h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>
              {loading ? (
                <CollSkeleton />
              ) : art.length > 0 ? (
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              dots={false}
              responsive={{
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 },
                1200: { items: 4 },
              }}
            >
              {art.map((item) => (
                <div className="nft_card" key={item.id}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to={`/item-details/${item.nftId}`}>
                        <img src={item.nftImage} className="img-fluid" alt="" />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to={`/author/${item.authorId}`}>
                        <img className="lazy pp-coll" src={item.authorImage} alt="" />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{item.title}</h4>
                      </Link>
                      <span>ERC-{item.code}</span>
                    </div>
                  </div>
                </div>
                ))}               
              </OwlCarousel>
              ) : (
                <p>No Collections found.</p>
              )}
          </div>
        </div>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
      </section>
    </>
  );
};

export default HotCollections;
