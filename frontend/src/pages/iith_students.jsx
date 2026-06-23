import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import raquel from "../components/images/raquel.png";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
export default function IithStudents() {
  return (
    <div className="flex flex-col justify-center items-center  align-middle text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

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
                <h3 className="text-[36px] font-xl text-gray-900">
                  IITH Students
                </h3>
                <div className="w-40 h-1 bg-purple-200 mt-3 rounded-full"></div>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <h4 className="text-[24px] font-bold mb-6">
                  <b>Exchange Program</b>
                </h4>

                <p className="mb-6">
                  A student exchange program is a study program in which
                  students pursue education at one of the international partner
                  institutions for a period of more than 8 weeks upto a semester
                  or two.
                  <br />
                  <br />
                  IITH strongly recommends and encourages its students to pursue
                  a semester abroad in one of our partner Universities. Study
                  abroad programs are typically intended for undergraduates &
                  graduate students who would like to spend a semester abroad
                  taking courses/project work. Exposure to International
                  academic and cultural life is an important aspect of learning
                  for students These experiences play a major role in their
                  self-development and awareness leading to enhanced
                  self-confidence and self-esteem.
                </p>

                <p className="mb-2">
                  <b>PROCEDURE</b>
                </p>

                <p>
                  The student must apply against information circulated by the
                  International Relations office – Outbound Unit with whom IITH
                  has an active MOU, which typically offers a tuition fee waiver
                  and other facilities.
                  <br />
                  <br />
                  The student will then have to identify a set of courses to be
                  taken during the semester abroad and check the suitability of
                  the semester duration as well as the language of instruction.
                  <br />
                  <br />
                  He / She must then consult with the Faculty Advisor /
                  supervisor regarding the suitability of the proposed courses.
                  The approval of the Faculty Advisor is an essential step of
                  the process.
                  <br />
                  <br />
                  The student must obtain the approval of the Head of the
                  Department and the supervisor.
                  <br />
                  <br />
                  The student must then obtain the necessary clearances from the
                  Academic section and Dean, Academics approval prior to
                  submitting the request to the International Relations Office.
                  Students carrying backlogs will not be allowed to participate
                  in “study-abroad” programs. The student can submit his
                  application form and other necessary documents to the
                  International Relations Office. IR Office will then nominate
                  the applicant to the relevant Office at the foreign university
                  and facilitate the process of admission.
                  <br />
                  <br />* Usually UG students who have completed at least 4
                  semesters, PG students who have completed at least one
                  semester and PhD Students who have completed their course work
                  at IITH are recommended for these opportunities.
                </p>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <h4 className="text-[32px] font-bold mb-6">
                  <b>Joint Doctoral Program (JDP)</b>
                </h4>

                <p className="mb-6">
                  Potential Research scholars (PhD) are admitted into Joint
                  Doctoral Program with one of the international partner
                  institutions through open advertisement and stringent
                  scrutiny. Through this program he / she can pursue their
                  research interests at the partnered university for a period of
                  6 months to 1 year.
                  <br />
                  <br />
                  When a MS/PhD scholar spends a significant time abroad at a
                  research facility for thesis/project work/research work upto
                  12 months, there is a measurable gain to the scholar and to
                  the Institutes/Universities involved.
                </p>

                <p className="mb-2">
                  <b>PROCEDURE</b>
                </p>

                <p>
                  The IITH IR office will roll out the JDP advertisement for PhD
                  admission for July admissions with the approval of the
                  Director, Dean (Academics) and Dean (IR) on our IR Office
                  website and inform the PRO at IITH for wider publicity.
                  <br />
                  <br />
                  After the scrutiny and interview the student will be admitted.
                  <br />
                  <br />
                  Once the course work is completed at IITH he will be enrolled
                  at the partnering University and thereafter starts working
                  under the supervision of both universities.
                </p>
              </div>
            </div>
            <div className="col-lg-12 bg-[#f5f5f5] px-8 py-8">
              <div className="textBox text-[16px] leading-9">
                <h4 className="text-[32px] font-bold mb-6">
                  <b>INTERNSHIP</b>
                </h4>

                <p className="mb-6">
                  In today’s challenging economy experience counts more than
                  qualifications. Semester or summer internships abroad provide
                  tremendous opportunity to gain invaluable work experience
                  during college.
                  <br />
                  <br />
                  These internship opportunities differentiate yourself from
                  your peers by learning real-world skills, gaining foreign
                  language proficiency, and immersing yourself in cultural
                  opportunities. They help make your resume second to none.
                </p>

                <h5 className="text-[20px] font-bold mb-4">PROCEDURE</h5>

                <p>
                  The student should directly apply for the Internship on the
                  International University website after obtaining the required
                  permissions from the department and supervisor. On the
                  financial commitment (for travel, insurance &amp;
                  accommodation) of the concerned Supervisor the Dean IR will
                  give the NoC required for application.
                  <br />
                  <br />
                  <b>Things to be noted:</b>
                  <br />
                  <br />
                  At IITH Summer / Semester Internship is optional.
                  <br />
                  <br />
                  The Eligibility is UG Students with CGPA&gt;8.0 at the end of
                  4th semester.
                  <br />
                  <br />
                  Duration of Internship - 6 months. The semester internship
                  must be of minimum six months duration with a single company.
                  The semester internship can not be fractalized.
                  <br />
                  <br />
                  Internship Timelines - January to June (i.e. in the 6th
                  semester).
                  <br />
                  <br />
                  Credits - 6 credits. Evaluation at the end of internship by
                  faculty committee.
                  <br />
                  <br />
                  Internship Report - Students need to submit Internship Report
                  for grading by IITH Faculty.
                  <br />
                  <br />
                  The students should complete the credits of 6th semester
                  missed out due to Semester Internship in any other semesters
                  by end of 8th semester for award of B.Tech degree.
                  <br />
                  <br />
                  The students will not be allowed to register for any course
                  credits during the semester internship.
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
