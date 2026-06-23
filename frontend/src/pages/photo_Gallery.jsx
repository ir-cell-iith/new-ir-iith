import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
import flyer from "../components/images/Self Finance-Flyer.png";
export default function PhdSelfFin() {
  return (
    <div className="flex flex-col justify-center  align-middle text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

     <section>
  <div className="col-lg-12">
    <div className="sectionHeading">
      <h2>Photo Gallery</h2>
      <hr />
    </div>
  </div>
  <div
    className="photo_row row  justify-content-center "
    style={{ backgroundColor: "#f0f0f0" }}
  >
    <div className="photo_column column">
      <img src="/assets/images/photo_gallery/8 (1).jpg" />
      <img src="/assets/images/photo_gallery/15 (1).jpg" />
      <img src="/assets/images/photo_gallery/20210519_122904.jpg" />
      <img src="/assets/images/photo_gallery/20210708_142754.heic" />
      <img src="/assets/images/photo_gallery/Abhishek Gadi.jpeg" />
      <img src="/assets/images/photo_gallery/ALL_3554.jpg" />
      {/* <img src="/assets/images/photo_gallery/Dr Prakhar Gupta.jpg"> */}
    </div>
    <div className="photo_column column">
      <img src="/assets/images/photo_gallery/IITH PHC.jpg" />
      <img src="/assets/images/photo_gallery/IMG_0109 (1).JPG" />
      <img src="/assets/images/photo_gallery/IMG_0212.JPG" />
      <img src="/assets/images/photo_gallery/IMG_0256 (1).JPG" />
      <img src="/assets/images/photo_gallery/IMG_20220905_153500.jpg" />
      <img src="/assets/images/photo_gallery/IMG_20220905_153539.jpg" />
    </div>
    <div className="photo_column column">
      <img src="/assets/images/photo_gallery/IMG-20220905-WA0007.jpg" />
      <img src="/assets/images/photo_gallery/IMG-20220905-WA0008.jpg" />
      <img src="/assets/images/photo_gallery/WhatsApp Image 2022-06-03 at 1.56.56 PM.jpeg" />
      <img src="/assets/images/photo_gallery/WhatsApp Image 2022-12-04 at 7.27.16 PM.jpeg" />
      <img src="/assets/images/photo_gallery/WhatsApp Image 2022-12-04 at 7.28.40 PM.jpeg" />
      <img src="/assets/images/photo_gallery/WhatsApp Image 2022-12-04 at 7.29.17 PM.jpeg" />
      <img src="/assets/images/photo_gallery/WhatsApp Image 2022-12-04 at 7.29.50 PM.jpeg" />
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
