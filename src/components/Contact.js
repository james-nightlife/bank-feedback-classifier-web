import React from "react";
import "./Contact.scss";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function Contact() {
  return (
    <div className="contact-layout">
      <div className="title-text">
        <h7>Srinakharinwirot University</h7>
        <br />
        <h7>Bachelor of Science Program, Computer Science.</h7>
      </div>

      <div className="contact-profile">
        <div className="profile one">
          <img src={require("../assets/img/About/jame.jpg")} />
          <div className="bg-text">
            <p className="text">Sutthiphong Kannikaklang</p>
            {/* <p>jame.kannikaklang@gmail.com</p> */}
          </div>
        </div>
        <div className="profile two">
          <img src={require("../assets/img/About/mook.jpg")} />
          <div className="bg-text">
            <p className="text">Prathana Khuankhwawong</p>
            {/* <p>prathana.khuan2000@gmail.com</p> */}
          </div>
        </div>
        <div className="profile three">
          <img src={require("../assets/img/About/khim.jpg")} />
          <div className="bg-text">
            <p className="text">Natnaree Dangsakul</p>
            {/* <p>knatnareennr@gmail.com</p> */}
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-title">
          <h4>Contact Us</h4>
        </div>
        <div className="about-text">
          <h8 className="about-name">
            <GrLocation />
            LOCATION
          </h8>
          <p>
            ชั้น 18 อาคาร 19 มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร 114 สุขุมวิท
            23 แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110
          </p>
          <h8 className="about-name">
            <MdOutlineMarkEmailUnread />
            EMAIL
          </h8>
          <p>
            jame.kannikaklang@gmail.com, prathana.khuan2000@gmail.com,
            knatnareennr@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
