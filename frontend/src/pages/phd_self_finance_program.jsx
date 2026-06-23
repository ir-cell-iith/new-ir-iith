import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
import flyer from "../components/images/Self Finance-Flyer.png";
export default function PhdSelfFin() {
  return (
    <div className="flex flex-col justify-center  align-middle text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

      <section className="defaultSection mx-8 mb-8">
        <div className="container-fluid">
          <div className="row">
            <div className="w-full text-center py-12">
              <h2 className="text-4xl font-lg text-gray-900">
                FOREIGN NATIONAL ADMISSION FOR PhD PROGRAM
              </h2>
              <h3>(SELF FINANCING PROGRAM)</h3>
              <div className="w-72 h-1 bg-purple-200 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Flyer */}
            <div className="w-full mb-5 border border-gray-300 bg-[#f5f5f5] px-5 py-5">
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
                IIT Hyderabad invites foreign nationals to apply for PhD
                programs at IITH under the Self-Financing Scheme.
              </p>
            </div>

            {/* About IITH */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                About IITH
              </h2>
              <div className="mt-3 h-1 w-40 rounded-full bg-[#d9c8f3]" />
            </div>

            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <p className="text-[20px] leading-[2] text-black">
                Indian Institute of Technology Hyderabad, established in 2008,
                is one of the 23 IITs and among the premier institutions in
                India. Ranked 3rd in Innovation and 8th among Engineering
                institutes in NIRF-2023, IITH has expertise in AI/ML, Future
                Communications, Autonomous Navigation & Smart Mobility, Advanced
                Materials, Climate Change, and many other emerging fields. With
                300+ full-time faculty and around 4,200 students, IITH has a
                strong research ecosystem supported by approximately USD 110
                million in research funding. Guided by the motto "Inventing and
                Innovating in Technology for Humanity," IITH strives for
                excellence in academics, research, and technology development.
              </p>

              <p className="mt-6 text-[20px] leading-[2] text-black">
                To know more, please visit{" "}
                <a
                  href="https://iith.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://iith.ac.in/
                </a>{" "}
                &{" "}
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

            {/* About the Program */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                About the Program
              </h2>
              <div className="mt-3 h-1 w-56 rounded-full bg-[#d9c8f3]" />
            </div>

            <div className="w-full bg-[#f5f5f5] px-8 py-10">
              <p className="text-[20px] leading-[2] text-black">
                International students interested in pursuing a full-time PhD
                program at IITH can explore the departments and programs offered
                and apply through the Office of International Relations.
              </p>
            </div>

            {/* Duration */}
            <div className="w-full bg-[#f0f0f0] px-8 py-8">
              <h2 className="text-3xl font-medium text-[#0b1f4d]">
                Duration: <span className="font-normal">5 Years</span>
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
                  qualifications and a Master's degree in Engineering/Technology
                  in relevant disciplines can apply.
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
                Artificial Intelligence, Biomedical Engineering, Biotechnology,
                Climate Change, Chemical Engineering, Chemistry, Civil
                Engineering, Computer Science Engineering, Design, Electrical
                Engineering, Entrepreneurship and Management, Liberal Arts,
                Materials Science &amp; Metallurgical Engineering, Mathematics,
                Mechanical &amp; Aerospace Engineering, Physics, Heritage
                Science &amp; Technology.
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
                Shortlisting followed by an Online Interview.
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
                  Download the application form:{" "}
                  <a
                    href="/assets/downloads/PhD Self Finance Application Form-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    PhD Self Finance Application Form-2026.pdf
                  </a>
                </li>

                <li>
                  Program information:{" "}
                  <a
                    href="/assets/downloads/PhD-Self Finance Information.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    PhD-Self Finance Information.docx
                  </a>
                </li>

                <li>
                  For additional details, visit{" "}
                  <a
                    href="https://ir.iith.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://ir.iith.ac.in/
                  </a>
                </li>

                <li>Complete the application form in all respects.</li>

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
                    "Application for Direct Admission for PhD Program -
                    July-2026"
                  </strong>
                  .
                </li>
              </ul>
            </div>

            {/* Last Date of Application */}
            <div className="bg-[#f5f5f5] py-12 px-8">
              <h2 className="text-3xl font-semibold text-[#0b215f]">
                Last Date of Application
              </h2>
              <div className="mt-3 h-1 w-56 bg-[#d7c4f3] rounded-full" />
            </div>

            <div className="bg-[#fafafa] px-8 py-10">
              <p className="text-xl text-gray-800">
                Last date to send application by email is{" "}
                <span className="font-semibold">
                  30-April-2026, 17:00 hrs IST
                </span>
              </p>
            </div>

            {/* Documents Required */}
            <div className="bg-[#f5f5f5] py-12 px-8">
              <h2 className="text-3xl font-semibold text-[#0b215f]">
                Documents Required
              </h2>
              <div className="mt-3 h-1 w-56 bg-[#d7c4f3] rounded-full" />
            </div>

            <div className="bg-[#fafafa] px-8 py-10">
              <ul className="list-disc pl-8 space-y-4 text-xl text-gray-800">
                <li>Academic Transcripts &amp; PG Grade Cards (in English)</li>
                <li>Statement of Purpose</li>
                <li>Two Recommendation Letters</li>
                <li>GRE Score (Optional)</li>
                <li>TOEFL/IELTS Score (if applicable)</li>
                <li>
                  Proof of Financing (Bank statement showing US $20,000 balance)
                </li>
                <li>Passport Size Photo</li>
                <li>Passport Copy</li>
              </ul>
            </div>

            {/* Fee Structure */}
            <div className="bg-[#f5f5f5] py-12 px-8">
              <h2 className="text-3xl font-semibold text-[#0b215f]">
                Fee Structure
              </h2>
              <div className="mt-3 h-1 w-56 bg-[#d7c4f3] rounded-full" />
            </div>

            <div className="bg-[#fafafa] px-8 py-10 space-y-6 text-xl text-gray-800">
              <p>
                <span className="font-semibold">Fee Structure Document:</span>{" "}
                <a
                  href="/assets/downloads/PhD Fee Structure-Self Finance-July-2026.pdf"
                  className="text-blue-600 hover:underline"
                >
                  PhD Fee Structure - Self Finance (July 2026)
                </a>
              </p>

              <p>
                <span className="font-semibold">Payment Method:</span> Bank
                transfer to IITH account.
                <br />
                <span className="font-semibold">Bank Details:</span>{" "}
                <a
                  href="/assets/downloads/IITH Bank Details for Fess Credit.pdf"
                  className="text-blue-600 hover:underline"
                >
                  IITH Bank Details for Fee Credit
                </a>
              </p>
            </div>

            {/* Important Notes */}
            <div className="bg-[#f5f5f5] py-12 px-8">
              <h2 className="text-3xl font-semibold text-[#0b215f]">
                Important Notes
              </h2>
              <div className="mt-3 h-1 w-56 bg-[#d7c4f3] rounded-full" />
            </div>

            <div className="bg-[#fafafa] px-8 py-10">
              <ul className="list-disc pl-8 space-y-4 text-xl text-gray-800">
                <li>
                  This is a self-financing program – no fellowship or financial
                  assistance is provided.
                </li>
                <li>
                  Students are responsible for all tuition fees, living
                  expenses, and other costs.
                </li>
                <li>Fee payment is required as per the institute schedule.</li>
                <li>
                  For the latest application forms and fee structure, please
                  visit the downloads page.
                </li>
              </ul>
            </div>
            {/* Contact Information */}
            <div className="bg-[#f5f5f5] py-12 px-8">
              <h2 className="text-3xl font-semibold text-[#0b215f]">
                Contact Information
              </h2>
              <div className="mt-3 h-1 w-56 bg-[#d7c4f3] rounded-full" />
            </div>

            <div className="bg-[#fafafa] px-8 py-10">
              <p className="text-xl text-gray-800 mb-6">
                For any queries regarding the PhD Self-Financing Program, please
                contact:
              </p>

              <div className="text-xl text-gray-800 space-y-2">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:ia.ir@iith.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    ia.ir@iith.ac.in
                  </a>
                </p>

                <p>
                  <span className="font-semibold">Office:</span> Office of
                  International Relations, IIT Hyderabad
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
