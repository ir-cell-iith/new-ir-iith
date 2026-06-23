import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
import firstImg from "../components/images/FIRST@IITH Flyer.png";
export default function First() {
  return (
    <div className="flex flex-col justify-center  align-middle text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

      <section className="defaultSection mx-8 mb-8">
        <div className="container-fluid">
          <div className="row">
            <div className="w-full text-center py-12">
              <h2 className="text-4xl font-lg text-gray-900">
                Fellowship for International Research Scholars in Technology at
                IIT Hyderabad (FIRST@IITH)
              </h2>
              <div className="w-72 h-1 bg-purple-200 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox flex justify-center">
                <img
                  src={firstImg}
                  alt="FIRST@IITH Fellowship Flyer"
                  className="max-w-full h-auto border border-gray-300 rounded-lg shadow-sm"
                />
              </div>
            </div>
            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  About IITH
                </h3>
                <div className="w-24 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <p>
                  Indian Institute of Technology Hyderabad (IITH) is one of the
                  six new Indian Institutes of Technology established by the
                  Government of India in 2008. In a short span of 12 years, the
                  institute built on an imposing 578-acre campus and has been
                  ranked among the top 10 institutes for four consecutive years
                  in the NIRF released by the Ministry of Education, GoI. IITH
                  was also ranked under Top #10 in the recent edition ARIIA on
                  indicators related to "Innovation and Entrepreneurship
                  Development" among students and faculties. IIT Hyderabad has
                  325 full-time faculties, 53000+ students on roll of whom 20
                  percent are women, nearly 200 state-of-the-art laboratories
                  and five research and entrepreneurship centres. The Institute
                  has a strong research focus with more than 160+ million USD of
                  sanctioned research funding while PhD scholars account for
                  about 30% of total student strength. IITH students and faculty
                  are at the forefront of innovation with more than 11500
                  research publications and 460+ patent disclosures, 400+
                  sponsored/consultancy projects and 100+ industry &amp;
                  academic collaborations. IITH is creating a unique holistic
                  educational ecosystem that offers interactive learning, a
                  highly flexible academic structure, cutting-edge research,
                  strong industry collaboration, and entrepreneurship.
                </p>

                <p className="mt-6">
                  To know more, please visit:{" "}
                  <a
                    href="https://iith.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    IITH Official Website
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="https://ir.iith.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    IITH IR Cell
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  About the Program
                </h3>
                <div className="w-32 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <p>
                  IIT Hyderabad is pleased to announce the FIRST scheme to
                  support outstanding international scholars pursuing PhDs with
                  full financial support.
                </p>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Fellowship Duration
                </h3>
                <p className="mt-2 text-[16px] text-gray-700">4 years</p>
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
                <ol className="list-decimal ml-6 space-y-3">
                  <li>
                    Foreign Nationals (excluding OCI/NRI) with excellent
                    academic credentials, holding a master's degree in relevant
                    engineering or technology disciplines with a minimum CGPA of
                    8.5/10 or equivalent.
                  </li>
                  <li>
                    Both Bachelor's and Master's degrees must be obtained from
                    foreign universities.
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Desirable Qualifications
                </h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                Degrees from leading universities in the candidate's home
                country and research output, such as publications or patents,
                will be considered favorably during shortlisting.
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Financial Assistance
                </h3>
                <div className="w-32 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ul className="list-disc ml-6 space-y-2">
                  <li>Fellowship Amount: ₹60,000 per month</li>
                  <li>Contingency Support: ₹1,00,000 per year</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Departments Offering
                </h3>
                <div className="w-36 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                Artificial Intelligence, Biomedical, Biotechnology, Chemical
                Engineering, Climate Change, Civil Engineering, Computer Science
                Engineering, Electrical Engineering, Materials Science &amp;
                Metallurgical Engineering, Mechanical &amp; Aerospace
                Engineering, Chemistry, Physics, Mathematics, Liberal Arts,
                Design, Entrepreneurship and Management, Heritage Science &amp;
                Technology.
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
                    Download application form:{" "}
                    <a
                      href="{{ site.baseurl }}/assets/downloads/FIRST_APPLICATION_July-2026.pdf"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      FIRST_APPLICATION_July-2026.pdf
                    </a>
                  </li>

                  <li>
                    Program information:{" "}
                    <a
                      href="{{ site.baseurl }}/assets/downloads/FIRST@IITH INFORMATION.docx"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      FIRST@IITH INFORMATION.docx
                    </a>
                  </li>

                  <li>
                    For details and downloading the form, visit{" "}
                    <a
                      href="https://ir.iith.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://ir.iith.ac.in/
                    </a>
                  </li>

                  <li>
                    Forward the completed application form along with electronic
                    copies of the testimonials and one reference letter to{" "}
                    <a
                      href="mailto:ia.ir@iith.ac.in"
                      className="text-blue-600 hover:underline"
                    >
                      ia.ir@iith.ac.in
                    </a>{" "}
                    with the subject line{" "}
                    <strong>
                      “Application for FIRST@IITH fellowship - July-2026”
                    </strong>
                  </li>

                  <li>
                    There is no application fee. The last date to send the
                    application by email is{" "}
                    <strong>30-April-2026, 17:00 hrs IST</strong>.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Fee Details
                </h3>
                <div className="w-24 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                For fee structure details, visit{" "}
                <a
                  href="https://iith.ac.in/academics/fee-structure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://iith.ac.in/academics/fee-structure/
                </a>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Contact
                </h3>
                <div className="w-20 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                For any queries, please email{" "}
                <a
                  href="mailto:ia.ir@iith.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  ia.ir@iith.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
