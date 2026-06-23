import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
export default function Iccr() {
  return (
    <div className="flex flex-col justify-center  align-middle text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

      <section className="defaultSection mx-8 mb-8">
        <div className="container-fluid">
          <div className="row">
            <div className="w-full text-center py-12">
              <h2 className="text-4xl font-lg text-gray-900">
                Indian Coucil for Cultural Relations(ICCR)
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
                <p>
                  India is well known as an education hub attracting
                  international students from all over the world. India’s robust
                  education system, in the backdrop of its rich diversity and
                  vibrant culture &amp; history, affords a broad range of
                  options for students. And as a rapidly growing country with a
                  leading technological edge, studying in India has much to
                  offer, whether it is Engineering, Computers, Arts, Philosophy,
                  Political Sciences or Classics etc.
                  <br />
                  <br />
                  Indian Council for Cultural Relations administers various
                  scholarship programs annually and awards about 3000+
                  scholarships under 21 different schemes to foreign students
                  from about 180 countries. Amongst these 21 schemes, six are
                  funded by ICCR from its grant and others are administered on
                  behalf of MEA and Ministry of Ayush. The courses offered for
                  studies are for Under-graduation, Post-graduation and Ph.D.
                  levels. Each academic year, ICCR has about 6000+ of its
                  foreign scholars who are studying at various Central/State
                  Universities, Institutes, NITs, and Agricultural Institutions
                  etc.
                  <br />
                  <br />
                  In a step forward towards “Digital India” ICCR developed the
                  “Admissions to Alumni (A2A) Portal” to streamline the
                  enrolment process. The portal was launched on January 17, 2018
                  by then Honorable External Affairs Minister Late Smt. Sushma
                  Swaraj. With the introduction of the portal from the academic
                  year 2018-19 onwards, ICCR Scholarship programs are not only
                  digitized but also have become an effortless exercise. The
                  portal contains all relevant information regarding ICCR
                  sponsored scholarship schemes and other information like names
                  of the Indian Universities, courses offered by them and
                  guidelines of scholarship schemes etc.
                </p>

                <h6 className="text-lg font-medium mt-6">
                  Website:{" "}
                  <a
                    href="http://a2ascholarships.iccr.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    http://a2ascholarships.iccr.gov.in
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Eligibility
                </h3>
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
                <h3 className="text-2xl font-semibold text-gray-900">
                  Application Procedure
                </h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ul className="list-disc ml-6 space-y-3">
                  <li>
                    Candidates desirous of admission under this Fellowship
                    Programme are required to apply through the ICCR A2A portal
                    through the link below.
                  </li>
                </ul>

                <a
                  href="http://a2ascholarships.iccr.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  http://a2ascholarships.iccr.gov.in
                </a>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Funding Details
                </h3>
                <div className="w-32 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Selected applicants are required to pay the fee as per
                    Institute norms.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Application Deadline
                </h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ul className="list-disc ml-6">
                  <li>
                    <a
                      href="http://a2ascholarships.iccr.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      http://a2ascholarships.iccr.gov.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
