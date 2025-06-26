import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-black py-4 mt-5">
      <div className="container text-center d-flex justify-content-between">
        <div>
          <small>
            &copy; {new Date().getFullYear()} CodeVerse. All rights reserved.
          </small>
        </div>
        <div>
          Check out more of my work at&nbsp;
          <a
            href="https://afreedshaik30.netlify.app/"
            style={{ color: "white", textDecoration: "none" }}
          >
            AfreedShaik30
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
