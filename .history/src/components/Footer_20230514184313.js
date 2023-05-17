import React from "react";
import { BsLinkedin, BsYoutube, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row  align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact us </h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                  PinCode: 131103
                </address>

                <a
                  href="tel: +91 9015756558"
                  className="text-white d-block mb-2 mt-2"
                >
                  +91 9015756558
                </a>
                <a
                  href="mailto:anamika.tomar@gmail.com"
                  className="text-white d-block mb-2 mt-2"
                >
                  anamika.tomar@gmail.com
                </a>

                <div className="socialicons d-flex align-item-center gap-30">
                  <a href="" className="text-white">
                    <BsLinkedin className=" fs-3" />
                  </a>
                  <a href="" className="text-white">
                    <BsYoutube className=" fs-3" />
                  </a>
                  <a href="" className="text-white">
                    <BsGithub className=" fs-3" />
                  </a>
                  <a href="" className="text-white">
                    <BsInstagram className=" fs-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Return Policy</Link>
                <Link className="text-white py-2 mb-1">
                  Terms and condition
                </Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About us </Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>

            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}Powered by Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
