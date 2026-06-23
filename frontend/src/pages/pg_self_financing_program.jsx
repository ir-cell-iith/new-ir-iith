import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
import flyer from "../components/images/Self Finance-Flyer.png";
export default function PgSelfFin() {
  return (
    <div className="flex flex-col justify-center  align-middle text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

      <section className="defaultSection mx-8 mb-8">
        <div className="container-fluid">
          <div className="row">
            <div className="w-full text-center py-12">
              <h2 className="text-4xl font-lg text-gray-900">
                FOREIGN NATIONAL ADMISSION FOR MASTERS PROGRAM
              </h2>
              <h3>(SELF FINANCING PROGRAM)</h3>
              <div className="w-72 h-1 bg-purple-200 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Flyer */}
            <div className="w-full mb-5 border border-gray-300 bg-[#f5f5f5] px-8 py-8">
              <div className="flex justify-center">
                <img
                  src={flyer}
                  alt="PhD and PG Self Finance Flyer"
                  className="h-auto max-w-full"
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="w-full bg-[#f5f5f5] px-8 py-8">
              <p className="text-[20px] leading-[2] text-black">
                IIT Hyderabad invites foreign nationals to apply for Master's
                programs at IITH under the Self-Financing Scheme.
              </p>
            </div>

            {/* About the Program */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                About the Program
              </h2>
              <div className="mt-3 h-1 w-56 rounded-full bg-[#d9c8f3]" />
            </div>

            <div className="w-full bg-[#f5f5f5] px-8 py-8">
              <p className="text-[20px] leading-[2] text-black">
                International students who want to pursue a full-time Master's
                program can go through IITH departments and programs offered and
                apply through the Office of International Relations.
              </p>
            </div>

            {/* Duration */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                Duration: <span className="font-normal">2 Years</span>
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
              <ul className="list-disc space-y-5 pl-8 text-[20px] leading-[2] text-black">
                <li>
                  Foreign Nationals (including OCI/NRI) with excellent academic
                  qualifications having a Bachelor's degree in
                  Engineering/Technology in relevant disciplines can apply.
                </li>
                <li>
                  The medium of instruction across all courses is English.
                  Applicants should have functional knowledge of English for
                  reading, writing, understanding, and speaking the language.
                </li>
              </ul>
            </div>

            {/* Departments Offering */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                Departments Offering
              </h2>
              <div className="mt-3 h-1 w-72 rounded-full bg-[#d9c8f3]" />
            </div>
            {/* Departments Offering Content */}
            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <p className="text-[20px] leading-[2] text-black">
                <strong>Master of Technology (M.Tech):</strong> Artificial
                Intelligence, Biomedical Engineering, Biotechnology, Climate
                Change, Chemical Engineering, Civil Engineering, Computer
                Science Engineering, Electrical Engineering, Entrepreneurship
                and Management, Materials Science and Metallurgical Engineering,
                Mechanical and Aerospace Engineering, Heritage Science and
                Technology (Online Program).
              </p>

              <p className="mt-6 text-[20px] leading-[2] text-black">
                <strong>Master of Science (M.Sc):</strong> Chemistry, Physics,
                Mathematics.
              </p>

              <p className="mt-6 text-[20px] leading-[2] text-black">
                <strong>Master of Arts (M.A):</strong> Liberal Arts.
              </p>

              <p className="mt-6 text-[20px] leading-[2] text-black">
                <strong>Master of Design (M.Des):</strong> Design.
              </p>
            </div>

            {/* Selection Procedure */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                Selection Procedure
              </h2>
              <div className="mt-3 h-1 w-64 rounded-full bg-[#d9c8f3]" />
            </div>

            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <p className="text-[20px] leading-[2] text-black">
                Shortlisting followed by Online Interview.
              </p>
            </div>

            {/* About IITH */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                About IITH
              </h2>
              <div className="mt-3 h-1 w-40 rounded-full bg-[#d9c8f3]" />
            </div>
            {/* About IITH Content */}
            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <p className="text-[20px] leading-[2] text-black">
                Indian Institute of Technology Hyderabad (IITH) is one of the
                six new Indian Institutes of Technology established by the
                Government of India in 2008. The institute is built on an
                imposing 578-acre campus and is among the top institutes in NIRF
                rankings. IITH has 325 full-time faculty, 53,000+ students on
                roll, nearly 200 state-of-the-art laboratories, and five
                research and entrepreneurship centres. The institute has 160+
                million USD of sanctioned research funding, 11,500+
                publications, 460+ patent disclosures, and 100+ industry and
                academic collaborations.
              </p>

              <p className="mt-6 text-[20px] leading-[2] text-black">
                To know more, please visit:{" "}
                <a
                  href="https://iith.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://iith.ac.in/
                </a>{" "}
                and{" "}
                <a
                  href="https://ir.iith.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://ir.iith.ac.in/
                </a>
              </p>
            </div>

            {/* Application Procedure */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                Application Procedure
              </h2>
              <div className="mt-3 h-1 w-72 rounded-full bg-[#d9c8f3]" />
            </div>

            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <ul className="list-disc space-y-5 pl-8 text-[20px] leading-[2] text-black">
                <li>
                  Download application form:{" "}
                  <a
                    href="/assets/downloads/PG SELF FINANCE APPLICATION FORM-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    PG SELF FINANCE APPLICATION FORM-2026.pdf
                  </a>
                </li>

                <li>
                  Program information:{" "}
                  <a
                    href="/assets/downloads/PG-Self Finance Information.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    PG-Self Finance Information.docx
                  </a>
                </li>

                <li>
                  Forward the completed application form along with the payment
                  receipt and required documents to{" "}
                  <a
                    href="mailto:ia.ir@iith.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    ia.ir@iith.ac.in
                  </a>{" "}
                  with the subject line{" "}
                  <strong>
                    "Application for Direct Admission for PG Program -
                    July-2026"
                  </strong>
                  .
                </li>
              </ul>
            </div>

            {/* Last Date of Application */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                Last Date of Application
              </h2>
              <div className="mt-3 h-1 w-72 rounded-full bg-[#d9c8f3]" />
            </div>

            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <p className="text-[20px] leading-[2] text-black">
                Last date to send the application by email is{" "}
                <strong>30-April-2026, 17:00 hrs IST</strong>.
              </p>
            </div>

            {/* Documents Required */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                Documents Required
              </h2>
              <div className="mt-3 h-1 w-64 rounded-full bg-[#d9c8f3]" />
            </div>

            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <ul className="list-disc space-y-5 pl-8 text-[20px] leading-[2] text-black">
                <li>Academic Transcripts and UG Grade Cards (in English).</li>
                <li>Statement of Purpose.</li>
                <li>Two Recommendation Letters.</li>
                <li>GRE Score (Optional).</li>
                <li>
                  TOEFL/IELTS score may be required if schooling was not in
                  English.
                </li>
                <li>
                  Proof of financing: Bank statement showing a balance of US
                  $10,000.
                </li>
                <li>Passport-size photograph.</li>
                <li>Passport copy.</li>
              </ul>
            </div>

            {/* Fee Structure */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                Fee Structure
              </h2>
              <div className="mt-3 h-1 w-48 rounded-full bg-[#d9c8f3]" />
            </div>

            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <p className="text-[20px] leading-[2] text-black">
                <strong>Fee Structure Document:</strong>{" "}
                <a
                  href="/assets/downloads/PG Fee Structure-July-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  PG Fee Structure – July 2026
                </a>
              </p>

              <p className="mt-6 text-[20px] leading-[2] text-black">
                <strong>Bank Details:</strong>{" "}
                <a
                  href="/assets/downloads/IITH Bank Details for Fess Credit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  IITH Bank Details for Fee Credit
                </a>
              </p>
            </div>

            {/* Contact Information */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                Contact Information
              </h2>
              <div className="mt-3 h-1 w-64 rounded-full bg-[#d9c8f3]" />
            </div>

            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <p className="text-[20px] leading-[2] text-black">
                For any queries regarding the PG Self-Financing Program, contact{" "}
                <a
                  href="mailto:ia.ir@iith.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  ia.ir@iith.ac.in
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
