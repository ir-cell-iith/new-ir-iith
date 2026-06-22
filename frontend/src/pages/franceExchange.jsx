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

      <section className="defaultSection mb-8">
        <div className="container-fluid">
          <div className="row">
            {/* Main Heading */}
            <div className="mx-8">
              {/* Main Heading */}
              <div className=" py-10 text-center">
                <h2 className="text-[36px] font-bold leading-tight text-[#1b2942]">
                  France Excellence Charpak Exchange Scholarship 2024
                  <br />
                  (spring session)
                </h2>
                <div className="w-60 h-1 bg-[#c9c5df] mx-auto mt-6"></div>
              </div>

              {/* Campus France Invitation */}
              <div className="bg-[#f0f0f0] px-8 py-8">
                <h3 className="text-[36px] font-semibold text-[#1b2942]">
                  Campus France Invitation:
                </h3>
                <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
              </div>

              {/* Content */}
              <div className="bg-[#f5f5f5] px-8 py-8">
                <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                  The Campus France - Hyderabad, Embassy of France in India
                  welcomes students to apply if there are any existing exchange
                  partnerships with French institutions for the spring session.
                </p>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>
            <div className="bg-[#f0f0f0] px-8 py-8 ">
                <h3 className="text-[36px] font-semibold text-[#1b2942] ">
                Information on French Partners:</h3>
                <hr />
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div></div>
            </div>
            <div className="bg-[#f5f5f5] px-8 py-8 mx-8">
                <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                For IITH French partners, click [link] and find the IITs -
                French Institutes Consortium MoU for you to choose the French
                Institute to apply for the Exchange Program.
              </p>
            </div>
            <div className="bg-[#f0f0f0] px-8 py-8 mx-8">
                <h3 className="text-[36px] font-semibold text-[#1b2942] ">Charpak Exchange Scholarship 2024:</h3>
                <hr />
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>
             <div className="bg-[#f5f5f5] px-8 py-8 mx-8">
                <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                Exchange scholarship 2024 (spring session) Call for Application
              </p>
            </div>
            {/* Eligibility for Charpak Scholarship */}
            <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                Eligibility for Charpak Scholarship:
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
              <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                The Charpak Exchange scholarship for the spring session is open
                to Indian students of all profiles studying at the bachelor's or
                master's level, leaving for a semester of study in France in the
                framework of a partnership between their Indian establishment
                and a French host institution.
              </p>
            </div>

            {/* Scholarship Details */}
            <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                Scholarship Details:
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
              <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                The scholarship will be offered for one academic semester
                between January and June 2024.
              </p>
            </div>
            {/* Checking Exchange Partnerships */}
            <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                Checking Exchange Partnerships:
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
              <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                The applicants must check with their home institution for
                existing exchange partnerships with French institutions before
                applying for the scholarship.
              </p>
            </div>

            {/* Scholarship Inclusions */}
            <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                Scholarship Inclusions:
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
              <ul className="list-disc pl-8 space-y-3 text-[20px] leading-[1.8] text-[#1b2942]">
                <li>Monthly living allowance of 860 euros</li>
                <li>Student visa and Etudes en France fee waiver</li>
                <li>Assistance in finding affordable accommodation</li>
                <li>Social Security benefits</li>
              </ul>
            </div>

            {/* Application Deadline */}
            <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                Application Deadline:
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
              <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                Deadline:{" "}
                <span className="font-semibold">
                  15 October 2023 (23:59 IST)
                </span>
              </p>
            </div>

            <div className="mx-8 bg-[#f5f5f5] px-8 py-8 mt-4">
              <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                <span className="font-semibold">For more information: </span>
                <a
                  href="https://www.inde.campusfrance.org/charpak-exchange-scholarship-spring-session-jan-june"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Click here
                </a>
              </p>
            </div>

            {/* Testimonial */}
            <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                Testimonial:
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
              <p className="text-[20px] leading-[1.8] text-[#1b2942] italic font-medium">
                "My experience in France has opened doors to various
                opportunities, lessons, and perspectives. Winning the Charpak
                Exchange scholarship boosted my confidence and reassured me that
                I could grow and learn during my stay in France without
                unnecessary fears."
              </p>

              <div className="mt-6 text-[20px] leading-[1.8] text-[#1b2942]">
                <p>Navya Srivastava</p>
                <p>Charpak Exchange Scholar 2022</p>
                <p>
                  Biological Engineering Department, Polytech Clermont
                  (Clermont-Ferrand)
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
              <h3 className="text-[36px] font-semibold text-[#1b2942]">
                Contact Information:
              </h3>
              <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
            </div>

            <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
              <div className="text-[20px] leading-[1.8] text-[#1b2942] space-y-2">
                <p>
                  <span className="font-semibold">Contact Person:</span> Mirrin
                  Raikhan
                </p>
                <p>
                  Manager - Campus France, Hyderabad (Andhra Pradesh and
                  Telangana)
                </p>
                <p>
                  Embassy of France in India | Institut français en Inde (IFI)
                </p>
                <p>
                  <span className="font-semibold">Address:</span> Alliance
                  Française de Hyderabad, Aurora Colony, Road No 3, Banjara
                  Hills, Hyderabad 500034
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  hyderabad@india-campusfrance.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
