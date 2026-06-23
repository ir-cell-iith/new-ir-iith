import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";

export default function Deakin() {
  return (
    <div className="flex flex-col justify-center  align-middle text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

<section className="defaultSection mx-8 mb-8">
  <div className="container-fluid">
    <div className="row">
   
          <div className="w-full text-center py-12">
              <h2 className="text-4xl font-lg text-gray-900">
                IITH-DEAKIN JOINT DOCTORAL PROGRAM (JDP)
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
      Indian Institute of Technology Hyderabad (IITH) is one of the six new
      Indian Institutes of Technology established by the Government of India in
      2008. In a short span of 12 years, the institute built on an imposing
      578-acre campus and has been ranked among the top 10 institutes for four
      consecutive years in the NIRF released by the Ministry of Education, GoI.
      IITH was also ranked under Top #10 in the recent edition ARIIA on
      indicators related to ‘Innovation and Entrepreneurship Development’ among
      students and faculties. IIT Hyderabad has 255 full-time faculties, 4000+
      students on roll of whom 20 percent are women, nearly 200
      state-of-the-art laboratories and five research and entrepreneurship
      centres. The Institute has a strong research focus with more than Rs. 500
      crore of sanctioned research funding while PhD scholars account for about
      30% of total student strength. IITH students and faculty are at the
      forefront of innovation with more than 6081 research publications and
      100+ patent disclosures, 400+ sponsored/consultancy projects and 50
      industry &amp; academic collaborations. IITH is creating a unique
      holistic educational ecosystem that offers interactive learning, a highly
      flexible academic structure, cutting-edge research, strong industry
      collaboration, and entrepreneurship.
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
    {/* About Deakin University */}
<div className="w-full bg-[#f0f0f0] px-8 py-8">
  <h2 className="text-3xl font-medium text-[#0b1f4d]">
    About Deakin University
  </h2>
  <div className="mt-3 h-1 w-52 rounded-full bg-[#d9c8f3]" />
</div>

<div className="w-full bg-[#f5f5f5] px-8 py-10">
  <p className="text-[20px] leading-[2.3] text-black">
    Established in 1974, Deakin University is one of Australia's leading
    tertiary education providers and is ranked in the top 1% of world
    universities (ARWU). It has won numerous awards and teaches over 60,000
    students each year offering students world-class programs and endless
    opportunities. Deakin University offers world-class courses delivered from
    14 schools, across 4 faculties. With 78,000+ high-achieving online
    graduates, it is the #1 university careers service in Australia &amp; the
    #1 university in Victoria for student satisfaction. Deakin University was
    the first international education provider to set up an office in India in
    1994.
  </p>

  <p className="mt-6 text-[20px] leading-[2.3] text-black">
    To know more, please visit:{" "}
    <a
      href="https://www.deakin.edu.au/about-deakin"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      https://www.deakin.edu.au/about-deakin
    </a>
  </p>
</div>

{/* About the Program */}
<div className="w-full bg-[#f0f0f0] px-8 py-8">
  <h2 className="text-3xl font-medium text-[#0b1f4d]">
    About the Program
  </h2>
  <div className="mt-3 h-1 w-52 rounded-full bg-[#d9c8f3]" />
</div>

<div className="w-full bg-[#f5f5f5] px-8 py-10">
  <p className="text-[20px] leading-[2.3] text-black">
    IITH and Deakin University are offering a joint doctoral program for bright
    and motivated students to work on frontier areas of science and technology.
    The candidates admitted to this program with MTech/ME will get their PhD
    degree from both Deakin and IITH. Candidates joining with BTech/BE will
    receive a dual degree (MTech from IITH and PhD from both Deakin and IITH).
    Candidate(s) chosen for this Joint Doctoral Program will spend up to 12
    months at Deakin depending upon the research requirements.
  </p>
</div>
     {/* Fellowship Duration */}
<div className="w-full bg-[#f0f0f0] px-8 py-6">
  <h2 className="text-2xl font-medium text-[#0b1f4d]">
    Fellowship Duration: <span className="font-normal">4 Years</span>
  </h2>
</div>

{/* Eligibility */}
<div className="w-full bg-[#f0f0f0] px-8 py-8">
  <h2 className="text-3xl font-medium text-[#0b1f4d]">
    Eligibility
  </h2>
  <div className="mt-3 h-1 w-40 rounded-full bg-[#d9c8f3]" />
</div>

<div className="w-full bg-[#f5f5f5] px-8 py-10">
  <ol className="list-decimal space-y-6 pl-8 text-[20px] leading-[2] text-black">
    <li>
      BE/B.Tech in the relevant branches of science/engineering with a CGPA of
      <strong> 8.5 </strong>
      (on a 10-point scale) or equivalent for the general category.
      Relaxation will be provided for other categories as per Government of
      India norms. Applicants should have a valid GATE score. The GATE
      requirement may be waived for students from IITs and NITs.
    </li>

    <li>
      M.Des/M.Sc/M.Tech in the relevant branch of
      design/science/engineering with a CGPA of
      <strong> 8.5 </strong>
      (on a 10-point scale) or equivalent for the general category.
      Relaxation will be provided for other categories as per Government of
      India norms.
    </li>
  </ol>
</div>

{/* Research Thrust Areas */}
<div className="w-full bg-[#f0f0f0] px-8 py-8">
  <h2 className="text-3xl font-medium text-[#0b1f4d]">
    Research Thrust Areas under IITH–Deakin Joint Doctoral Program
  </h2>
  <div className="mt-3 h-1 w-72 rounded-full bg-[#d9c8f3]" />
</div>

<div className="w-full bg-[#f5f5f5] px-8 py-10">
  <p className="mb-6 text-[20px] leading-[2] text-black">
    The Joint Doctoral Program (JDP) seeks to recruit research scholars under
    the following thematic areas (but is not limited to these):
  </p>

  <ol className="list-decimal space-y-5 pl-8 text-[20px] leading-[2] text-black">
    <li>
      Critical Technology (Artificial Intelligence, Machine Learning,
      Cyber Security &amp; Data Science)
    </li>

    <li>
      Future Sustainable Infrastructure (Energy, Smart Mobility,
      Transportation, Waste Management, Sustainability &amp; Climate Change)
    </li>

    <li>
      Healthcare Technologies (Sensors and Devices, Robotics &amp;
      Nanotechnology)
    </li>

    <li>
      Materials &amp; Smart Manufacturing (Additive Manufacturing)
    </li>

    <li>
      Bio-Inspired Processes and Systems (Biotechnology)
    </li>
  </ol>
</div>
     {/* <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="subSectionHeading">
    <h3>Departments Offering</h3>
    <hr />
  </div>
</div>

<div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
  <div className="textBox">
    Artificial Intelligence, Biomedical Engineering, Biotechnology, Chemical
    Engineering, Chemistry, Civil Engineering, Climate Change, Computer Science
    and Engineering, Design, Electrical Engineering, Entrepreneurship &
    Management, Heritage Science & Technology, Materials Science and
    Metallurgical Engineering, Mathematics, Mechanical and Aerospace
    Engineering, Physics
  </div>
</div> */}

<div className="w-full bg-[#f0f0f0] px-8 py-8">
  <h2 className="text-3xl font-medium text-[#0b1f4d]">
    Financial Assistance
  </h2>
  <div className="mt-3 h-1 w-56 rounded-full bg-[#d9c8f3]" />
</div>

<div className="w-full bg-[#f5f5f5] px-8 py-10">
  <p className="text-[20px] leading-[2] text-black">
    IITH will provide the regular PhD fellowship to the students during their
    stay at IITH and when the students travel to Deakin, students will receive
    a stipend at the rate of $A30,000 per annum for the duration of their
    stay. In addition to the above, Deakin will provide a full tuition fee
    waiver for up to 4 years and a top-up stipend of $A150 per month for 3
    years while they are at IITH.
  </p>
</div>

{/* <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="subSectionHeading">
    <h3>Application Procedure</h3>
    <hr />
  </div>
</div>

<div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
  <div className="textBox">
    <ol>
      <li>
        Download the application form from{" "}
        <a href="downloads.html">
          https://ircell.iith.ac.in/downloads
        </a>
      </li>
      <li>Complete the application form in all respects.</li>
      <li>
        Forward the completed form along with all documents and testimonials
        to{" "}
        <a href="mailto:jdp.admission@iith.ac.in">
          jdp.admission@iith.ac.in
        </a>{" "}
        with the subject line
        <strong> "IITH-Deakin JDP Application Form - 2023"</strong> on or
        before 24th April, 2023 / 17:00 IST.
      </li>
    </ol>
  </div>
</div>

<div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="subSectionHeading">
    <h3>Last Date of Application</h3>
    <hr />
  </div>
</div>

<div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
  <div className="textBox">
    The last date of application is 24th April, 2023 / 17:00 IST.
  </div>
</div> */}
     <div className="w-full bg-[#f0f0f0] px-8 py-8">
  <h2 className="text-3xl font-medium text-[#0b1f4d]">
    Contact
  </h2>
  <div className="mt-3 h-1 w-32 rounded-full bg-[#d9c8f3]" />
</div>

<div className="w-full bg-[#f5f5f5] px-8 py-10">
  <p className="text-[20px] leading-[2] text-black">
    For any queries related to IITH-DEAKIN JDP please write to{" "}
    <a
      href="mailto:jdp.admission@iith.ac.in"
      className="text-blue-600 hover:underline"
    >
      jdp.admission@iith.ac.in
    </a>
  </p>
</div>

{/* <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
    <div className="subSectionHeading">
        <h3>FAQ</h3>
        <hr />
    </div>
</div>

<div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
    <div className="textBox">
        <ol>
            <li>
                What is FIRST?<br /><br />
                <b><u>F</u></b>ellowship for
                <b><u>I</u></b>nternational
                <b><u>R</u></b>esearch
                <b><u>S</u></b>cholars in
                <b><u>T</u></b>echnologY
            </li>
            <br />

            <li>
                Who are eligible?<br /><br />
                Foreign nationals with excellent academic qualifications
                having a master's degree in engineering/technology in the
                relevant disciplines and a minimum CGPA of 8.5.
            </li>
            <br />

            <li>
                Will OCI/PIO be eligible through this route?<br /><br />
                Anyone holding a foreign passport should be eligible to
                apply, provided they meet the other criteria.
            </li>
            <br />

            <li>
                What is PIO?<br /><br />
                An individual who is an Indian by birth or descent who
                lives outside India.
            </li>
            <br />

            <li>
                What is Overseas Citizen of India (OCI)?<br /><br />
                OCI allows eligible foreign citizens of Indian origin to
                live and work in India under applicable rules.
            </li>
            <br />

            <li>
                What is the Selection Process?<br />
                Shortlisting followed by online Interview.
            </li>
            <br />

            <li>
                Is financial support available for international travel for
                joining the institute?<br />
                No. Travel support will not be provided.
            </li>
            <br />

            <li>
                Are candidates eligible for annual travel support?<br />
                No. Annual travel support will not be provided.
            </li>
            <br />

            <li>
                Is hostel accommodation provided at the same rates as for
                Indian students?<br />
                Yes.
            </li>
        </ol>
    </div>
</div>

<div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
    <div className="subSectionHeading">
        <h3>Testimonials</h3>
        <hr />
    </div>
</div>

<div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
    <div className="textBox">
        <div className="mx-auto d-block">
            <img
                src="/assets/images/testinomials/abulHasanath.jpg"
                className="mx-auto d-block max-width-auto"
            />
            <br />
            <p className="text-center">
                Abul Hasanath (ce21resch16001), FIRST@IITH Scholar
            </p>
        </div>

        <div>
            Hi, this is Abul, the first International Research Scholar
            through the FIRST@IITH initiative. I belong to Bangladesh,
            where I earned bachelor's and master's degrees in civil
            engineering. The world-class facilities, learning environment,
            and research exposure have given me more confidence in
            competing with institutions around the world. I invite you to
            join the IIT Hyderabad family. Thank you very much.
        </div>
    </div>
</div> */}
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
