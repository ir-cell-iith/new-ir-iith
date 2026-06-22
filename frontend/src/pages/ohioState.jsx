import React from "react";
import { isMobile } from "react-device-detect";
import NavBar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import Footer from "../components/footer";

export default function OhioState() {
  return (
    <>
      {isMobile ? <MobileNavbar /> : <NavBar />}

      <>
        <section className=" mb-8">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="sectionHeading py-5">
                  <h3
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: "700",
                      color: "#1b2942",
                      textAlign: "center",
                    }}
                  >
                    Research Internship for Young Academics
                    <br />
                    (RIYA)
                  </h3>
                  <hr
                    style={{
                      width: "250px",
                      margin: "15px auto",
                      border: "2px solid #c9c5df",
                    }}
                  />
                </div>
              </div>

              <div
                className="col-lg-12 mx-8"
                style={{
                  backgroundColor: "#ececec",
                  padding: "35px 50px 30px 50px",
                }}
              >
                <h4
                  style={{
                    fontSize: "3rem",
                    color: "#1b2942",
                    fontWeight: "400",
                    margin: 0,
                  }}
                >
                  Aim
                </h4>

                <hr
                  style={{
                    width: "90px",
                    border: "2px solid #c9c5df",
                    marginTop: "16px",
                    marginLeft: 0,
                  }}
                />
              </div>

              <div
                className="col-lg-12"
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "40px 50px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.8",
                    color: "#1b2942",
                    margin: 0,
                  }}
                >
                  The Ohio State University’s Research Internship for Young
                  Academics (RIYA) program is designed to facilitate
                  cutting-edge research experiences for undergraduate mechanical
                  engineering students from top institutes in India.
                </p>
              </div>
              {/* Program Details Header */}
              <div
                className="mx-8 bg-[#ececec]"
                style={{ padding: "35px 50px 30px 50px" }}
              >
                <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
                  Program Details
                </h2>

                <div className="w-[220px] h-[4px] bg-[#c9c5df] mt-4"></div>
              </div>

              {/* Program Details Content */}
              <div
                className="mx-8 bg-[#f5f5f5]"
                style={{ padding: "40px 50px" }}
              >
                <ul className="list-disc pl-10 space-y-5 text-[20px] leading-[1.8] text-[#1b2942]">
                  <li>
                    10-week program (from May to July, with some flexibility in
                    the dates)
                    <br />
                    <span className="font-semibold">
                      (Note: Only virtual internships are planned in Summer
                      2024.)
                    </span>
                  </li>

                  <li>
                    Candidates must have completed three years in a recognized
                    mechanical engineering Bachelor of Technology program or a
                    combined bachelor’s/master’s degree program (in a related
                    discipline) to be eligible.
                  </li>

                  <li>
                    Through a generous gift from the Singh Family Fund and other
                    endowments, each on-campus participant may receive an
                    allowance of $2,500 to $5,000. This funding includes a
                    nominal stipend, housing subsidy, and an international
                    travel allowance.
                    <br />
                    <span className="font-semibold">
                      (Note: No allowance can be provided to the RIYA scholars
                      in the virtual internship mode while working as volunteers
                      from India.)
                    </span>
                  </li>

                  <li>
                    Students’ faculty mentors in India will receive $500 to
                    permit research by their RIYA scholar during the academic
                    year in his/her Indian institution.
                  </li>

                  <li>
                    Faculty mentors in India who regularly participate in the
                    program are eligible for a travel grant to visit The Ohio
                    State University.
                  </li>
                </ul>

                <p className="mt-8 text-[20px] leading-[1.8] text-[#1b2942]">
                  This prestigious award provides each student with a rewarding
                  learning experience that will help strengthen his or her
                  knowledge, leadership, and research skills. By participating
                  in this unique program, students will develop an understanding
                  of graduate-level studies, which will position them to have a
                  successful career in an academic or industrial research and
                  design (R&amp;D) setting. Most RIYA scholars have pursued
                  master&apos;s degrees or doctoral-level studies in renowned
                  U.S. universities or comparable institutions elsewhere after
                  graduation.
                </p>
              </div>

              {/* Facilities participating in the RIYA program */}
              <div
                className="mx-8 bg-[#ececec]"
                style={{ padding: "35px 50px 30px 50px" }}
              >
                <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
                  Facilities participating in the RIYA program (subject to
                  changes)
                </h2>

                <div className="w-[420px] h-[4px] bg-[#c9c5df] mt-4"></div>
              </div>

              <div
                className="mx-8 bg-[#f5f5f5]"
                style={{ padding: "40px 50px" }}
              >
                <ul className="list-disc pl-10 space-y-3 text-[20px] leading-[1.8] text-[#1b2942]">
                  <li>
                    <a
                      href="https://adl.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Acoustics and Dynamics Laboratory
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://apl.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Applied Physics Laboratory
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://acml.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Automated Computational Mechanics Laboratory
                    </a>
                  </li>

                  <li>
                    <a
                      href="http://engine.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Flow, Engine, and Acoustics Research Laboratories
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://gearlab.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Gear and Power Transmission Research Laboratory
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://hrl.engineering.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Hoelzle Research Lab
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://nbl.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Laboratory for Nanoengineering and Biodesign
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://msns.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Microsystems and Nanosystems Laboratory
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://mmm.engineering.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Microsystems for Mechanobiology and Medicine Group
                    </a>
                  </li>

                  <li>
                    <a
                      href="http://movement.osu.edu/"
                      className="text-blue-600 underline"
                    >
                      Movement Lab
                    </a>
                  </li>

                  <li>Solar Applications &amp; Innovation Lab (CLEAR Lab)</li>
                </ul>
              </div>

              {/* Requirements Header */}
              <div
                className="mx-8 bg-[#ececec]"
                style={{ padding: "35px 50px 30px 50px" }}
              >
                <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
                  Requirements
                </h2>

                <div className="w-[180px] h-[4px] bg-[#c9c5df] mt-4"></div>
              </div>

              {/* Requirements Content */}
              <div
                className="mx-8 bg-[#f5f5f5]"
                style={{ padding: "40px 50px" }}
              >
                <ul className="list-disc pl-10 space-y-4 text-[20px] leading-[1.8] text-[#1b2942]">
                  <li>
                    Formal (full) application form (to be provided only to the
                    most promising students)
                  </li>

                  <li>Course transcript for the first two or three years</li>

                  <li>
                    Two letters of recommendation and a scan of the passport or
                    government-issued ID
                  </li>
                </ul>
              </div>

              {/* Deadline Header */}
              <div
                className="mx-8 bg-[#ececec]"
                style={{ padding: "35px 50px 30px 50px" }}
              >
                <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
                  Deadline
                </h2>

                <div className="w-[140px] h-[4px] bg-[#c9c5df] mt-4"></div>
              </div>

              {/* Deadline Content */}
              <div
                className="mx-8 bg-[#f5f5f5]"
                style={{ padding: "40px 50px" }}
              >
                <p className="text-[20px] leading-[1.8] text-[#1b2942]">
                  Initial application deadline:{" "}
                  <span className="font-semibold">October 5, 2023</span>
                </p>

                <p className="mt-4 text-[20px] leading-[1.8] text-[#1b2942]">
                  Deadline to submit the formal application and supplemental
                  materials:{" "}
                  <span className="font-semibold">
                    November 15, 2023 (for qualified applicants)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
}
