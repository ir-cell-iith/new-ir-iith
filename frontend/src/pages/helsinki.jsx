import React from "react";
import { isMobile } from "react-device-detect";
import NavBar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import Footer from "../components/footer";
import "./styles/homeStyle.css";

export default function HelSinki() {
  return (
    <>
      {isMobile ? <MobileNavbar /> : <NavBar />}

      <section className="defaultSection">
        <div className="container-fluid">
          <div className="row">

            {/* Main Heading */}
            <div className="col-lg-12">
              <div className="sectionHeading">
                <h2>  FICORE - University of Helsinki - Competition for Students on
            Environmental Sensing</h2>
                <hr />
              </div>
            </div>

            {/* Add your sections here */}
 <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="subSectionHeading">
          <h3>About the Program:</h3>
          <hr />
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          As part of the FICORE (Finnish India Consortium for Research and
          Education) Network, the University of Helsinki is inviting students to
          join a competition on Environmental Sensing.The participants are
          expected to design, build, deploy, and demonstrate an end-to-end
          solution for environmental sensing projects. This competition gives
          students a chance to test their abstract knowledge against complex
          real-life problems. Student groups are also free to submit their
          ongoing course projects, and projects that are part of their thesis.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="subSectionHeading">
          <h3>Eligibility:</h3>
          <hr />
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="textBox">
          The competition is open to students from Bachelors/Masters/PhD or
          equivalent
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="subSectionHeading">
          <h3>
            Proposals are invited on the following themes (suggestive, not
            limited to):
          </h3>
          <hr />
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="textBox">
          <ul>
            <li>Air, water, and soil pollution sensing systems.</li>
            <li>
              Sensing solutions for smart buildings and green environments.
            </li>
            <li>
              Artificial Intelligence solutions for optimizing the performance
              of environment sensing systems.
            </li>
            <li>
              Data collection and data processing pipelines for environmental
              monitoring and protection.
            </li>
            <li>
              Weather monitoring, and disaster management sensing systems.
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="subSectionHeading">
          <h3>
            For More Information about Registration, and Selection Procedure:
          </h3>
          <hr />
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="textBox">
          <span style={{ fontWeight: 600 }}>
            Please Visit:{" "}
            <a href="https://www.helsinki.fi/en/researchgroups/ficore/events-and-activities/environmental-sensing-project-competition-2023">
              Environmental Sensing Project Competition (2023) | FICORE |
              University of Helsinki
            </a>
          </span>
        </div>
      </div>
      <br />
      <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="textBox">
          <span style={{ fontWeight: 600 }}> Last Date of Registration: </span>
          Please refer above link
        </div>
      </div>
      <br />
      <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="textBox">
          <span style={{ fontWeight: 600 }}>Documents Required: </span>Please
          refer above link
        </div>
      </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

      
     
  
  
