import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative">
                <img
                  src="/images/images/main-banner.jpg"
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>Special Sale </h5>
                  <p>
                    From $9990 or $42/mo.
                    <br />
                    for 24 mo. Footnote*
                  </p>
                  <Link>
                    <button>Buy Now</button>
                  </Link>
                </div>
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
