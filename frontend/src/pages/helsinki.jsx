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

      <section className="defaultSection mb-8">
        <div className="container-fluid">
          <div className="row">
            {/* Main Heading */}
            <div className="mx-8">
              <div className="text-center py-10 ">
                <h2 className="text-[36px] font-bold leading-tight ">
                  FICORE - University of Helsinki - Competition for Students on
                  <br />
                  Environmental Sensing
                </h2>
                <div className="w-60 h-1 bg-[#c9c5df] mx-auto mt-6"></div>
              </div>

              <div className="bg-[#f0f0f0] px-8 py-8">
                <h3 className="text-[36px] font-semibold text-[#1b2942]">
                  About the Program:
                </h3>
                <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
              </div>

              <div className="bg-[#f5f5f5] px-8 py-8">
                <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                  As part of the FICORE (Finnish India Consortium for Research
                  and Education) Network, the University of Helsinki is inviting
                  students to join a competition on Environmental Sensing.The
                  participants are expected to design, build, deploy, and
                  demonstrate an end-to-end solution for environmental sensing
                  projects. This competition gives students a chance to test
                  their abstract knowledge against complex real-life problems.
                  Student groups are also free to submit their ongoing course
                  projects, and projects that are part of their thesis.
                </p>
              </div>
            </div>
            <div className="bg-[#f0f0f0] px-8 py-8 mx-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                Eligibility:
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="bg-[#f5f5f5] px-8 py-8 mx-8">
              <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                The competition is open to students from Bachelors/Masters/PhD
                or equivalent
              </p>
            </div>

            <div className="bg-[#f0f0f0] px-8 py-8 mx-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                Proposals are invited on the following themes (suggestive, not
                limited to):
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="bg-[#f5f5f5] px-8 py-8 mx-8">
              <ul className="list-disc pl-8 space-y-3 text-[20px] leading-[1.8] text-[#1b2942]">
                <li>Air, water, and soil pollution sensing systems.</li>
                <li>
                  Sensing solutions for smart buildings and green environments.
                </li>
                <li>
                  Artificial Intelligence solutions for optimizing the
                  performance of environment sensing systems.
                </li>
                <li>
                  Data collection and data processing pipelines for
                  environmental monitoring and protection.
                </li>
                <li>
                  Weather monitoring, and disaster management sensing systems.
                </li>
              </ul>
            </div>
            <div className="bg-[#f0f0f0] px-8 py-8 mx-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                For More Information about Registration, and Selection
                Procedure:
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="bg-[#f5f5f5] px-8 py-8 mx-8">
              <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                <span className="font-semibold">Please Visit: </span>
                <a
                  href="https://www.helsinki.fi/en/researchgroups/ficore/events-and-activities/environmental-sensing-project-competition-2023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Environmental Sensing Project Competition (2023) | FICORE |
                  University of Helsinki
                </a>
              </p>
            </div>

            <div className="bg-[#f5f5f5] px-8 py-8  mx-8">
              <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                <span className="font-semibold">
                  Last Date of Registration:{" "}
                </span>
                Please refer above link
              </p>
            </div>

            <div className="bg-[#f5f5f5] px-8 py-8 mx-8">
              <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                <span className="font-semibold">Documents Required: </span>
                Please refer above link
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
