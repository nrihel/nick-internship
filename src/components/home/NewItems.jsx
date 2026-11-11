import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NewSkeleton from '../../components/UI/NewSkeleton';
import { Countdown } from "../UI/Countdown";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const NewItems = () => {

  const [newArt, setNewArt] = useState([]);
  const [loading, setLoading] = useState(true);

  const eventDate = Math.floor(
    new Date('6:00:00').getTime() / 1000
  );
    
  useEffect(() => {
      async function getArt() {
        setLoading(true);
        try{
          const { data } = await axios.get(
            `https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`
          );
          setNewArt(data);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } catch (error) {
          console.error("Error fetching new art:", error);
          setLoading(false);
        }
      }
      getArt();

    }, []);
  return (
    <>
      <section id="section-items" className="no-bottom">
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>New Items</h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>
            {loading ? (
              <NewSkeleton />
            ) : newArt.length > 0 ? (
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
              {newArt.map((item) => (
                <div className="item" key={item.id}>
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link
                        to={`/author/${item.authorId}`}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={item.creator}
                    >
                      <img className="lazy" src={item.authorImage} alt={item.creator} />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  {item.expiryDate > Date.now() && (
                    <div className="de_countdown">
                      <Countdown targetUnixTimestamp={item.expiryDate} />
                    </div>
                  )}

                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-facebook fa-lg"></i>
                          </a>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-twitter fa-lg"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-envelope fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <Link to={`/item-details/${item.nftId}`}>
                      <img
                        src={item.nftImage}
                        className="nft__item_preview"
                        alt={item.title}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="nft__item_info">
                    <Link to={`/item-details/${item.nftId}`}>
                      <h4>{item.title}</h4>
                    </Link>
                    <div className="nft__item_price">{item.price} ETH</div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </OwlCarousel>
            ) : (
            <p>No new items available.</p>
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

export default NewItems;
