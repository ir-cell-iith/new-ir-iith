import React from "react";
// import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
// import raquel from "../components/images/raquel.png";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
export default function IntFaculties() {
  return (
    <div className="flex flex-col justify-center items-center  align-middle text-2xl text-black">
      {isMobile ? <MobileNavbar /> : <NavBar />}
      <section className="defaultSection mx-8 mb-8">
        <div className="container-fluid">
          <div className="row">
            <div className="w-full text-center py-12">
              <h2 className="text-4xl font-lg text-gray-900">
                International Collaboration and Mobility
              </h2>
              <div className="w-72 h-1 bg-purple-200 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="col-lg-12 bg-[#f0f0f0] px-8 py-6">
              <div className="subSectionHeading">
                <h3 className="text-[36px] font-bold text-gray-900">
                  International Faculty
                </h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <h4 className="text-[32px] font-bold mb-6">
                  <b>
                    Scheme for Promotion of Academic and Research Collaboration
                    (SPARC)
                  </b>
                </h4>

                <p className="mb-6">
                  The Scheme for Promotion of Academic and Research
                  Collaboration (SPARC), an initiative of Ministry of Human
                  Resource Development, Government of India, aims at improving
                  the research ecosystem of India’s higher educational
                  institutions by facilitating academic and research
                  collaborations between top ranked Indian Institutions and
                  globally ranked Foreign Institutions, through Joint Research
                  Projects involving mobility of students and faculty. The SPARC
                  Scheme is expected to have a major impact in providing the
                  best international expertise to address major national
                  problems, expose Indian academicians to the best collaborators
                  abroad, enable international faculty to stay in India for a
                  longer duration, provide Indian students an opportunity to
                  work in the world class laboratories, to develop strong
                  bilateral relationships in research, and improve the
                  international ranking of Indian Institutions.
                </p>

                <p className="mb-6">
                  28 Countries have been identified for collaboration in the
                  first phase of SPARC. There will be a set of Nodal
                  Institutions (NI) in India, one for each participating foreign
                  country, who will be responsible for hand holding, guiding
                  Indian institutes and coordination of activities between the
                  participating Indian Institutions in India and the respective
                  foreign country as well as act as the liaison with the SPARC
                  teams.
                </p>

                <p className="mb-2">
                  <b>Eligibility:</b> All Indian Institutions ranked in the
                  overall top-100 or category-wise top-100 in the India Rankings
                  (NIRF-2019) are eligible to apply. The partner Foreign
                  Institution shall be in the top-500 QS World University
                  Ranking or in the top-200 QS World University Ranking by
                  subject to be eligible to be supported under SPARC. The
                  project team should contain at least two international Faculty
                  members, two Indian Faculty members and two Researchers
                  pursuing PhD or post-doc level from each side.
                </p>

                <p className="mb-2">
                  <b>Duration and Funding:</b> The proposal will be for a period
                  of two years. The budget can be in any one of the three
                  baskets.
                </p>

                <ul className="list-disc ml-8 mb-6">
                  <li>Up to ₹ 50 lakhs</li>
                  <li>From ₹ 50 lakhs up to ₹ 75 lakhs</li>
                  <li>From ₹ 75 lakhs up to ₹ 100 lakhs</li>
                </ul>

                <p className="mb-6">
                  Proposals which have longer time visits of foreign faculty
                  will be given priority for larger sized baskets.
                </p>

                <p className="mb-2">
                  <b>Funding details:</b>
                </p>

                <ul className="list-disc ml-8 mb-6">
                  <li>
                    For a visit of foreign faculty ranging from 1 to 4 months,
                    payment will be made up to US$ 15,000/- for the first month
                    and US$ 10,000/- thereafter including honorarium, travel,
                    stay, etc. Usually, the honorarium of foreign faculty is
                    approx $333 per day.
                  </li>
                  <li>
                    For the visit of a foreign postdoctoral/doctoral scholar,
                    the host Institute will provide suitable free accommodation
                    and an out-of-pocket allowance of ₹ 12,000 per month subject
                    to an upper limit of ₹ 2 lakhs over the duration of the
                    project. The student has to stay for a minimum period of 3
                    months and register as a visiting foreign student. Tuition
                    fees will be waived by the Indian Institution. Usually, the
                    out-of-pocket allowance for a foreign student is Rs 400 per
                    day.
                  </li>
                  <li>
                    For the visit of an Indian student to the Foreign
                    Institution, payment will be made up to US$ 2000 for travel
                    and $1000 per month for out-of-pocket allowances. Usually,
                    the out-of-pocket allowance for an Indian student is approx.
                    $33 per day.{" "}
                    <a
                      href="https://sparc.iitkgp.ac.in/funding_budget.php"
                      className="text-blue-600 hover:underline"
                    >
                      For more info
                    </a>
                  </li>
                </ul>

                <p>
                  <b>VISA</b> The foreign academicians/experts/faculty visiting
                  India under SPARC should apply for Research VISA.
                  <br />
                  <br />
                  <b>Contact Details:</b>
                  <br />
                  SPARC Cell
                  <br />
                  Indian Institute of Technology Kharagpur
                  <br />
                  Kharagpur 721302
                  <br />
                  West Bengal, INDIA
                  <br />
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:support@sparc.iitkgp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    support@sparc.iitkgp.ac.in
                  </a>
                  <br />
                  <b>Website:</b>{" "}
                  <a
                    href="http://sparc.iitkgp.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    http://sparc.iitkgp.ac.in
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <h4 className="text-[32px] font-bold mb-6">
                  <b>VISITING ADVANCED JOINT RESEARCH FACULTY SCHEME (VAJRA)</b>
                </h4>

                <p className="mb-6">
                  VAJRA (Visiting Advanced Joint Research) Faculty Scheme is a
                  dedicated program exclusively for overseas scientists and
                  academicians with emphasis on Non-resident Indians (NRI) and
                  Persons of Indian Origin (PIO) / Overseas Citizen of India
                  (OCI) to work as adjunct / visiting faculty for a specific
                  period of time in Indian Public funded academic and research
                  institutions. The Scheme recognizes the value of collaborative
                  research as a crucial element for information sharing among
                  researchers for updating and acquiring knowledge and skills,
                  and also to draw different perspectives to solve a shared
                  problem. Science and Engineering Research Board (SERB)
                  welcomes accomplished Overseas Scientists to take up
                  challenging research problems in the Indian setting.
                </p>

                <p className="mb-2">
                  <b>Eligibility &amp; Funding:</b> The eligibility conditions
                  are:
                </p>

                <ul className="list-disc ml-8 mb-6">
                  <li>
                    The scheme is open to overseas scientists / faculty /
                    R&amp;D professionals including Non-resident Indians (NRI)
                    and Persons of Indian Origin (PIO) / Overseas Citizen of
                    India (OCI).
                  </li>
                  <li>
                    Should be an active researcher working with overseas
                    academic / research / industrial organizations with a proven
                    track record of research and development.
                  </li>
                </ul>

                <p className="mb-6">
                  The Faculty will work for a minimum of 1 month and a maximum
                  of 3 months a year in an institution in India. It is expected
                  that the Indian Host Institution may engage him/her for a
                  longer duration even after the completion of the assignment.
                  The adjunct position will be offered initially for a period of
                  1 year, and can be renewed every year.
                  <br />
                  <br />
                  The VAJRA Faculty will be provided a lump-sum amount of US
                  $15000 in the first month of engagement in a year and US
                  $10000 pm in the other two months to cover their travel and
                  honorarium. While no separate support is provided for
                  accommodation, medical / personal insurance etc., the host
                  institute may consider providing additional support. The
                  payment to the faculty will be made in Indian Rupees.
                </p>

                <p className="mb-6">
                  <b>For more information please visit</b>{" "}
                  <a
                    href="https://vajra-india.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://vajra-india.in/
                  </a>
                </p>

                <p>
                  <b>Visa Guidelines:</b> All foreign nationals entering India
                  are required to possess a valid international travel document
                  in the form of a national passport with a valid visa obtained
                  from an Indian Mission or Post abroad. The Ministry of Home
                  Affairs (MHA) has advised that if the period of stay is up to
                  3 months at a time, no registration is required with the
                  FRROs/FROs. However, if the faculty is engaged for a duration
                  exceeding 180 days, then registration may be as per the
                  requirement of the Employment Visa regime.
                  <br />
                  <br />
                  The foreign academicians/experts/faculty visiting India under
                  VAJRA should apply for Research VISA.
                  <br />
                  <br />
                  <b>Contact Details:</b>
                  <br />
                  Dr. Praveenkumar S, Programme Coordinator
                  <br />
                  Science and Engineering Research Board
                  <br />
                  5 &amp; 5A, Lower Ground Floor
                  <br />
                  Vasant Square Mall Sector-B, Pocket-5 Vasant Kunj
                  <br />
                  New Delhi-110070
                  <br />
                  Phone: 011 2659 0353
                  <br />
                  Tele fax: 011 2696 3695
                  <br />
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:praveen@nic.in"
                    className="text-blue-600 hover:underline"
                  >
                    praveen@nic.in
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <h4 className="text-[32px] font-bold mb-6">
                  <b>Global Initiative for Academic Networks (GIAN)</b>
                </h4>

                <p className="mb-6">
                  Union Cabinet, Govt. of India has approved a programme titled
                  Global Initiative for Academic Networks (GIAN) in Higher
                  Education aimed at tapping the talent pool of scientists and
                  entrepreneurs internationally to encourage their engagement
                  with the institutes of Higher Education in India so as to
                  augment the country's existing academic resources, accelerate
                  the pace of quality reform, and elevate India's scientific and
                  technological capacity to global excellence. GIAN is envisaged
                  to catalyse higher education institutions in the country, and
                  that it will initially include all IITs, IIMs, Central
                  Universities, IISc Bangalore, IISERs, NITs and IIITs
                  subsequently cover good State Universities where the spinoff
                  is vast. GIAN is an evolving scheme which will initially
                  include participation of foreign faculty in Institutes as
                  Distinguished / Adjunct / Visiting faculty / Professors of
                  Practice, etc., to participate in delivering Short or
                  Semester-long Courses.
                </p>

                <p className="mb-6">
                  <b>Funding:</b> A lump-sum amount of upto US$ 8000 for 12 to
                  14 hours of contact and upto US$ 12000 for 20 to 28 hours of
                  contact can be paid to the foreign experts covering their
                  travel and honorarium. Local hospitality will be arranged by
                  the Host Institution. The duration (number of weeks/days) can
                  be mutually decided by the host institution and the visiting
                  faculty.
                </p>

                <p className="mb-6">
                  <b>For more information please visit</b>{" "}
                  <a
                    href="https://gian.iitkgp.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://gian.iitkgp.ac.in/
                  </a>
                </p>

                <p className="mb-6">
                  <b>Visa:</b> The foreign academicians/experts/faculty visiting
                  India under GIAN should apply for VISA for at least one month
                  (preferably 2 months) before the scheduled departure as per
                  following guidelines:
                </p>

                <p>
                  <b>Visa Type:</b> Business VISA
                  <br />
                  <br />
                  <b>Contact Details:</b>
                  <br />
                  The National Coordinator, GIAN,
                  <br />
                  Indian Institute of Technology Kharagpur
                  <br />
                  Kharagpur – 721302, West Bengal, India
                  <br />
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:gian@iitkgp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    gian@iitkgp.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
