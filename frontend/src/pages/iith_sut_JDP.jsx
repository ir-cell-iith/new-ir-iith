import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
export default function SutJdp() {
  return (
    <div className="flex flex-col justify-center   align-middle text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

      <section className="defaultSection mx-8 mb-8">
        <div className="container-fluid">
          <div className="row">
            <div className="w-full text-center py-12">
              <h2 className="text-4xl font-lg text-gray-900">
                IITH-SUT Joint Doctoral Program
              </h2>
              <div className="w-72 h-1 bg-purple-200 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-[36px] font-semibold text-gray-900">
                  About IITH
                </h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <p>
                  Indian Institute of Technology Hyderabad was established in
                  2008, as one of the 23 IITs, the premier institutions in
                  India. In the recent National rankings (NIRF-2023), IITH is
                  placed at 3rd in Innovation and 8th among Engineering
                  institutes in the country. IITH has unique capabilities in the
                  fields of AI/ML, Future communications, Autonomous navigation
                  &amp; smart mobility, Healthcare, Semiconductors &amp;
                  Devices, Advanced Materials, Climate change &amp;
                  Sustainability, Additive manufacturing, Entrepreneurship,
                  Energy, Sensors. With about 300+ full-time faculty, ~4,200
                  students, 18 Departments, IITH is the largest among the 2nd
                  and 3rd Gen IITs. The institute has a strong research focus
                  with 2,200+ sponsored/consultancy projects of ~110 M USD of
                  sanctioned research funding, with PG + PhD students accounting
                  for about 60% of total student strength. IITH has more than
                  9000+ research publications with 1,35,000+ Citations, 190+
                  Patents, and about 130+ startups that have generated a revenue
                  of ~140 M USD. With the motto of "Inventing and Innovating in
                  Technology for Humanity (IITH)" we are striving forward to be
                  one of the best in academics, research and technology
                  development.
                </p>

                <p className="mt-6">
                  To know more, please visit:{" "}
                  <a
                    href="https://iith.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://iith.ac.in/
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="https://ircell.iith.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://ircell.iith.ac.in/
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  About SUT
                </h3>
                <div className="w-32 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <p>
                  Swinburne University of Technology is a world-class university
                  creating social and economic impacts through science,
                  technology and innovation. Founded in 1908 by the Honourable
                  George and Ethel Swinburne as the ‘Eastern Suburbs Technical
                  College’, Swinburne has continued to evolve, gaining
                  university status in 1992. Swinburne has three campuses
                  located in the eastern suburbs of Melbourne — at Hawthorn,
                  Croydon and Wantirna — offering tertiary education for higher
                  education as well as Pathways and Vocational Education (PAVE).
                  We also have a fourth campus in Sarawak, Malaysia. The
                  National Institute of Circus Arts is located in Prahran,
                  Melbourne and we also offer a range of qualifications online
                  through Swinburne Online and Open Universities Australia.
                  <br />
                  <br />
                  In 2019, we unveiled new locations in Sydney and Vietnam, each
                  offering a small suite of sought-after Swinburne courses, and
                  also opened an office in Nanjing, China — further connecting
                  us to some of the fast-growing regions in the world. As a
                  dual-sector university, Swinburne offers higher education and
                  Pathways and Vocational Education (PAVE). We offer courses in
                  a broad range of disciplines and our close ties with industry
                  provide students with opportunities for valuable workplace
                  experiences during their studies.
                  <br />
                  <br />
                  Swinburne researchers have a reputation for high-quality
                  research with particular strengths in astronomy, physics,
                  engineering, materials science, computer science and
                  information technology, design and innovation, health
                  sciences, neurosciences and mental health. Underpinned by
                  leading digital technology platforms, Swinburne researchers
                  are collaborating with industry through embedded partnerships
                  to drive innovation and create impact.
                  <br />
                  <br />
                  Since 2015, Swinburne has risen more than 200 places in the QS
                  rankings and the current result confirms Swinburne’s place in
                  the top 1% of universities globally in both the QS rankings
                  and the latest ARWU rankings. In 2022, Swinburne was ranked as
                  the 50th top university in the world under 50 years old by
                  Times Higher Education.
                </p>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  IITH-SUT Joint Doctoral Program (JDP)
                </h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                IITH and SUT are offering a joint doctoral program for bright
                and motivated students to work on frontier areas of science and
                technology. The students admitted in the JDP will have an
                opportunity to spent up to 12 months at SUT supported by
                scholarship from SUT &amp; IITH.
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Fellowship Duration:{" "}
                  <span className="font-medium">4 years</span>
                </h3>
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
                1. MDes/MSc/MTech in the relevant branch of
                design/science/engineering with a CGPA of 8.5 (in 10-point
                scale) or equivalent for the general category (relaxation will
                be given for other categories as per the Govt. of India norms).
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Number of Intakes <span className="font-medium">5</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Departments Offering
                </h3>
                <div className="w-32 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                Artificial Intelligence, Biomedical Engineering, Biotechnology,
                Chemical Engineering, Chemistry, Civil Engineering, Climate
                Change, Computer Science and Engineering, Design, Electrical
                Engineering, Entrepreneurship &amp; Management, Heritage Science
                &amp; Technology, Materials Science and Metallurgical
                Engineering, Mathematics, Mechanical and Aerospace Engineering,
                Physics, Liberal Arts.
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
                The students admitted in the JDP will receive a fellowship as
                per the Ministry of Education norms while at IIT Hyderabad.
                While at SUT, students will receive a stipend up to 9 months
                identical to the Swinburne University Postgraduate Research
                Awards (SUPRAs), and IITH will provide additional 3-months
                stipend to make up their onshore period for a year.
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Application Procedure
                </h3>
                <div className="w-32 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <ol className="list-decimal ml-6 space-y-3">
                  <li>
                    Download the application form from{" "}
                    <a
                      href="https://ir.iith.ac.in/downloads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://ir.iith.ac.in/downloads
                    </a>{" "}
                    under admissions tab.
                  </li>

                  <li>Complete the application form in all respects.</li>

                  <li>
                    Forward the completed form along with all documents and
                    testimonials to{" "}
                    <a
                      href="mailto:jdp.admission@iith.ac.in"
                      className="text-blue-600 hover:underline"
                    >
                      jdp.admission@iith.ac.in
                    </a>{" "}
                    with a subject line{" "}
                    <b>“IITH-SUT JDP Application Form - 2024”</b> on or before
                    27th MAY, 2024 / 17:00 IST.
                  </li>
                </ol>
              </div>
            </div>

            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Last Date of Application:{" "}
                  <span className="font-medium">
                    27th MAY, 2024 / 17:00 IST
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
