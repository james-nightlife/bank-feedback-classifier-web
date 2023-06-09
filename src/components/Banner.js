import React from "react";
import "./Banner.scss";

let BanData = {
  title: "TM Web Application",
  desc: "We use machine learning to classify bank complaints.",
};

function Banner() {
  return (
    <div className="banner">
      <div className="banner-con">
        <div className="element-banner">
          <div className="banner-text">
            <h1>{BanData.title}</h1>
            <p>{BanData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
