import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TopSkeleton from "../UI/TopSkeleton";

const TopSellers = () => {

  const [topSellers, setTopSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function getTopSellers() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
      );
      setTopSellers(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching top sellers:", error);
    }
  }

    getTopSellers();
  }, []);

  return (
    <>
      <section id="section-popular" className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Top Sellers</h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>  
            <div className="col-md-12">               
              <ol className="author_list">
                {loading ? (
                  <TopSkeleton />
                ) : topSellers.length > 0 ? (
                  topSellers.map((seller) => ( 
                <li key={seller.id}>
                  <div className="author_list_pp">
                    <Link to={`/author/${seller.authorId}`}>
                      <img
                        className="lazy pp-author"
                        src={seller.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to="/author">{seller.authorName}</Link>
                    <span>{seller.price} ETH</span>
                  </div>
                </li>
                  ))              
                ) : (
                  <p>No top sellers found.</p>
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSellers;
