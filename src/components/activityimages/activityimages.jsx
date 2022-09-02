import React from "react";
import "./activityimages.scss";
import Slider from "react-slick";
import Sample1 from "../../assets/images/1.jpg";
import Sample2 from "../../assets/images/2.jpg";
import Sample3 from "../../assets/images/3.jpg";

const ActivityImages = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    lazyload: true,
  };
  return (
    <div>
      <div className="activity-save-btn-wrapper">
        <button className="activity-save-btn">Save</button>
      </div>
      <Slider {...settings}>
        <div className="carousel-img-wrapper">
          <img src={Sample1} alt="sample1" />
        </div>
        <div className="carousel-img-wrapper">
          <img src={Sample2} alt="sample1" />
        </div>
        <div className="carousel-img-wrapper">
          <img src={Sample3} alt="sample1" />
        </div>
      </Slider>
    </div>
  );
};
export default ActivityImages;
