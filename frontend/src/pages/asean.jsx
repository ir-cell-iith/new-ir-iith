import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
import toniRegis from "../components/images/toniRegis.jpg";
import khinChoWin from "../components/images/khinChoWin.jpg";
export default function Asean() {
  return (
    <div className="flex flex-col justify-center  align-middle text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

      <section className="defaultSection mx-8 mb-8">
        <div className="container-fluid">
          <div className="row">
            <div className="w-full text-center py-12">
              <h2 className="text-4xl font-lg text-gray-900">
                Doctoral Fellowship in India for AEAN
              </h2>
              <div className="w-72 h-1 bg-purple-200 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-[36px] font-semibold text-gray-900">
                  About the Program
                </h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                The internationally renowned Institutions in technical
                education, the Indian Institutes of Technology (IITs) are
                inviting scholars from ASEAN countries to apply for PhD
                fellowships to strengthen the deep and historical relations
                between India and ASEAN.
                <br />
                <br />
                The institution thrives for its quality education and strict
                selection criteria. When selected, you will be able to complete
                your Ph.D. with funding from the Government of India. The
                funding includes a monthly stipend and an annual research grant
                for up to 5 years of their Ph.D. program.
                <br />
                <br />
                Website:{" "}
                <a
                  href="https://asean-iit.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://asean-iit.in/
                </a>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold">Eligibility</h3>
                <div className="w-24 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Students from ASEAN countries can apply online through the
                    ASEAN DIA portal for PhD programs.
                  </li>
                  <li>
                    Admission into IIT Hyderabad is as per IITH rules and
                    regulations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold">
                  Application Procedure
                </h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Candidates desirous of admission under this Fellowship
                    Programme are required to apply through the ICCR A2A portal
                    through the link below.
                    <br />
                    <a
                      href="https://ecampus.iitd.ac.in/ASEAN/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://ecampus.iitd.ac.in/ASEAN/login
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold">Funding Details</h3>
                <div className="w-32 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ul className="list-disc ml-6">
                  <li>
                    Selected applicants are required to pay the fee as per
                    Institute norms.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold">Application Deadline</h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ul className="list-disc ml-6">
                  <li>
                    <a
                      href="https://ecampus.iitd.ac.in/ASEAN/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://ecampus.iitd.ac.in/ASEAN/login
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold">FAQ</h3>
                <div className="w-16 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <a
                  href="https://ecampus.iitd.ac.in/ASEAN/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://ecampus.iitd.ac.in/ASEAN/login
                </a>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold">Testimonials</h3>
                <div className="w-32 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ol className="list-decimal ml-6 space-y-10">
                  <li>
                    <div className="flex flex-col items-center text-center">
                      <img
                        className="w-40 h-auto rounded-lg border border-gray-300"
                        src={khinChoWin}
                        alt="Khin Cho Win"
                      />
                      <p className="mt-4 font-medium">
                        Ms. Khin Cho Win (ai20resch16001), ASEAN Fellowship
                        Scholar
                      </p>
                    </div>

                    <p className="mt-4">
                      Hi, I am Khin Cho Win from Myanmar, PhD scholar at IITH. I
                      realize that IITH is not only a good research environment
                      but also a good learning environment that can be explored.
                      Since the faculty, staff, and friends are very
                      understanding and supportive of me all the time, I did not
                      feel the culture shock and enjoyed the diversity of Indian
                      culture. In addition, the learning resources are very
                      helpful to me. I am very lucky to have a chance to study
                      at IITH.
                    </p>
                  </li>

                  <li>
                    <div className="flex flex-col items-center text-center">
                      <img
                        className="w-40 h-auto rounded-lg border border-gray-300"
                        src={toniRegis}
                        alt="Toni Regis"
                      />
                      <p className="mt-4 font-medium">
                        Mr. Toni Regis (cc21resch16001), ASEAN Fellowship
                        Scholar
                      </p>
                    </div>

                    <p className="mt-4">
                      Hi, I am Toni Regis from Philippines, PhD scholar at IITH.
                      IITH has been my home away from home, providing a diverse
                      experience of education, culture, and opportunities to
                      further my profession and career. The institution has also
                      provided a safe and healthy environment for learning,
                      innovating, and networking.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
