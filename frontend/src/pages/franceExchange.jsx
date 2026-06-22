import React from "react";
import { isMobile } from "react-device-detect";
import NavBar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import Footer from "../components/footer";
import "./styles/homeStyle.css";

export default function FranceExchange() {
  return (
    <>
      {isMobile ? <MobileNavbar /> : <NavBar />}

      <section className="defaultSection">
        <div className="container-fluid">
          <div className="row">

            {/* Main Heading */}
            <div className="col-lg-12">
              <div className="sectionHeading">
                <h2> France Excellence Charpak Exchange Scholarship 2024 (spring
              session)</h2>
                <hr />
              </div>
            </div>

            {/* Add your sections here */}
 <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="subSectionHeading">
            <h3>Campus France Invitation:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="textBox">
            The Campus France - Hyderabad, Embassy of France in India welcomes
            students to apply if there are any existing exchange partnerships
            with French institutions for the spring session.
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="subSectionHeading">
            <h3>Information on French Partners:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            For IITH French partners, click [link] and find the IITs - French
            Institutes Consortium MoU for you to choose the French Institute to
            apply for the Exchange Program.
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="subSectionHeading">
            <h3>Charpak Exchange Scholarship 2024:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            Exchange scholarship 2024 (spring session) Call for Application
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="subSectionHeading">
            <h3>Eligibility for Charpak Scholarship:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            The Charpak Exchange scholarship for the spring session is open to
            Indian students of all profiles studying at the bachelor's or
            master's level, leaving for a semester of study in France in the
            framework of a partnership between their Indian establishment and a
            French host institution.
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="subSectionHeading">
            <h3>Scholarship Details:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            The scholarship will be offered for one academic semester between
            January and June 2024.
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="subSectionHeading">
            <h3>Checking Exchange Partnerships:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            The applicants must check with their home institution for existing
            exchange partnerships with French institutions before applying for
            the scholarship.
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="subSectionHeading">
            <h3>Scholarship Inclusions:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            <ul>
              <li>Monthly living allowance of 860 euros</li>
              <li>Student visa and Etudes en France fee waiver</li>
              <li>Assistance in finding affordable accommodation</li>
              <li>Social Security benefits</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="subSectionHeading">
            <h3>Application Deadline:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            Deadline:{" "}
            <span style={{ fontWeight: 600 }}>15 October 2023 (23:59 IST)</span>
          </div>
        </div>
        <br />
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            <span style={{ fontWeight: 600 }}> For more information</span>
            <a href="https://www.inde.campusfrance.org/charpak-exchange-scholarship-spring-session-jan-june">
              Click here
            </a>
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="subSectionHeading">
            <h3>Testimonial:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            <span style={{ fontWeight: 550 }}>
              "My experience in France has opened doors to various
              opportunities, lessons, and perspectives. Winning the Charpak
              Exchange scholarship boosted my confidence and reassured me that I
              could grow and learn during my stay in France without unnecessary
              fears."
            </span>
            <br />
            <br />
            Navya Srivastava
            <br />
            Charpak Exchange Scholar 2022
            <br />
            Biological Engineering Department, Polytech Clermont
            (Clermont-Ferrand)
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="subSectionHeading">
            <h3>Contact Information:</h3>
            <hr />
          </div>
        </div>
        <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
          <div className="textBox">
            <span style={{ fontWeight: 550 }}>Contact Person: </span>Mirrin
            Raikhan
            <br />
            Manager - Campus France, Hyderabad (Andhra Pradesh and Telangana)
            <br />
            Embassy of France in India | Institut français en Inde (IFI)
            <br />
            <span style={{ fontWeight: 550 }}>Address: </span>Alliance Française
            de Hyderabad, Aurora Colony, Road No 3, Banjara Hills, Hyderabad
            500034
            <br />
            <span style={{ fontWeight: 550 }}>Email: </span>
            hyderabad@india-campusfrance.org
            <br />
          </div>
        </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

       
    
