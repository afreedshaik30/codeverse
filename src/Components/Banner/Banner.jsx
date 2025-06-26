import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-div">
        <div className="overlay">
          <h1>Welcome to CodeVerse</h1>
        </div>
        <img src="/media/Banner.jpg" alt="Banner" className="imgStyle" />
      </div>
    </>
  );
};

export default Banner;
