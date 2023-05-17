import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner-content p-3 position-relative">
                <img
                  src="/images/images/main-banner.jpg"
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="main-banner-content position-absolute">
                <h4>This is headding</h4>
                <h5>ipad s 13 </h5>
                <p> Frp, 888 to 999 /month</p>
                <Link>Buy Now</Link>
              </div>
            </div>

            <div className="col-6">
              <div className="col-3">
                <img src="/images/images/catbanner-01.jpg" alt="catbanner-01" />
              </div>
              <div className="col-3">
                <img src="/images/images/catbanner-02.jpg" alt="catbanner-02" />
              </div>
              <div className="col-3">
                <img src="/images/images/catbanner-03.jpg" alt="catbanner-03" />
              </div>
              <div className="col-3">
                <img src="/images/images/catbanner-04.jpg" alt="catbanner-04" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
