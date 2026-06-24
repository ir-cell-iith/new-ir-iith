import React from "react";
import { isMobile } from "react-device-detect";
import NavBar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import Footer from "../components/footer";

export default function SwissGov() {
  return (
    <>
      {isMobile ? <MobileNavbar /> : <NavBar />}

      <div className="container-fluid">
        <div className="row">
          
            <section className="defaultSection mb-8">
              <div className="container-fluid">
                <div className="row">
                  <div className="w-full py-16 bg-[#f5f5f5]">
                    <h2 className="text-center text-5xl font-bold text-[#1b2942]">
                      Swiss Government Excellence Scholarships
                    </h2>

                    <div className="w-64 h-[4px] bg-[#c9c5df] mx-auto mt-4 mb-12"></div>

                    <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                      <h3 className="text-4xl font-semibold text-[#1b2942] leading-tight">
                        For Foreign Scholars and Artists for the 2024-2025
                        Academic Year
                      </h3>

                      <div className="w-24 h-[4px] bg-[#c9c5df] mt-4"></div>
                    </div>

                    <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
                      <p className="text-[20px] leading-10 text-[#1b2942]">
                        Each year, the Swiss Confederation awards Government
                        Excellence Scholarships to promote international
                        exchange and research cooperation between Switzerland
                        and over 180 other countries. Recipients are selected by
                        the awarding body, the Federal Commission for
                        Scholarships for Foreign Students (FCS).
                      </p>
                    </div>
                  </div>
                  {/* Information and Resources */}
                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h3 className="text-[32px] font-semibold text-[#1b2942]">
                      Information and Resources
                    </h3>
                    <div className="w-24 h-[4px] bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
                    <ul className="list-disc pl-8 space-y-3 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=RRZjsHok5N4"
                          className="text-blue-600 hover:underline"
                        >
                          One minute introduction to Swiss Government Excellence
                          Scholarships
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/de/dokumente/2017/08/eskas-faq.pdf.download.pdf/eskas_faq.pdf"
                          className="text-blue-600 hover:underline"
                        >
                          FAQs for scholarship applicants &amp; academic
                          supervisors (PDF, 126 kB, 19.07.2022)
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Research Scholarships */}
                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h3 className="text-[32px] font-semibold text-[#1b2942]">
                      Research Scholarships
                    </h3>
                    <div className="w-24 h-[4px] bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
                    <p className="text-[20px] leading-10 text-[#1b2942] mb-6">
                      The research scholarship (research fellowship, PhD,
                      Postdoc) is available to post-graduate researchers in any
                      discipline. Holding a master’s degree is the minimum
                      qualification required. This scholarship is designed for
                      those who plan to come to Switzerland to pursue research
                      or further studies at the doctoral or post-doctoral level.
                    </p>

                    <p className="text-[20px] leading-10 text-[#1b2942]">
                      Research scholarships are awarded for research or study at
                      all Swiss cantonal universities, universities of applied
                      sciences, and the two federal institutes of technology, as
                      well as the four research institutes. Please note that
                      only candidates nominated by an academic supervisor at one
                      of these higher education institutions will be considered
                      for this scholarship.
                    </p>
                  </div>

                  {/* Research Fellowship */}
                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h4 className="text-[28px] font-semibold text-[#1b2942]">
                      Research Fellowship
                    </h4>
                    <div className="w-24 h-[4px] bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8">
                    <p className="text-[20px] leading-10 text-[#1b2942] mb-6">
                      Abbreviated summary. For full details, please refer to the{" "}
                      <a
                        href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/06/guidelines.pdf.download.pdf/01_Guidelines4Applicants_2024_2025_e_.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Guidelines for Scholarship Applicants
                      </a>
                      .
                    </p>

                    <h4 className="text-2xl font-semibold text-[#1b2942] mt-8 mb-4">
                      Objectives
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        To enable selected applicants to undertake research in
                        the realm of their PhD at one of the 10 Swiss cantonal
                        universities, the two Swiss federal institutes of
                        technology, the public teaching and research institutes,
                        or the universities of applied sciences.
                      </li>
                      <li>Valid for full-time research in Switzerland only.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-[#1b2942] mt-8 mb-4">
                      Target Group
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        Highly qualified postgraduate researchers from all
                        academic fields as well as young medical doctors.
                      </li>
                      <li>
                        Primarily intended for scholars who have not already
                        been to Switzerland.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-[#1b2942] mt-8 mb-4">
                      Eligibility Criteria
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        Master’s degree or equivalent achieved before 31 July
                        2024 (except: ETH Zurich: 30 June 2024). Degree
                        certificate completed.
                      </li>
                      <li>Applicants must be born after 31 December 1988.</li>
                      <li>A research proposal including a timeframe.</li>
                      <li>
                        Mandatory letter from an academic host professor.
                        (including their short CV).
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-[#1b2942] mt-8 mb-4">
                      Duration
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        Scholarship starts for the academic year 2024-25: 1
                        September 2024.
                      </li>
                      <li>12 months maximum (starting in September).</li>
                      <li>No extension possible.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-[#1b2942] mt-8 mb-4">
                      Amount
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        The scholarship amounts to a monthly payment of CHF
                        1’920.-
                      </li>
                      <li>
                        The scholarship amount covers the living costs of one
                        person only.
                      </li>
                      <li>This scholarship is not a salary.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-[#1b2942] mt-8 mb-4">
                      Selection Criteria
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        The candidate: Academic profile, research capacity, and
                        motivation.
                      </li>
                      <li>
                        The research project: Originality and methodological
                        soundness of the research project.
                      </li>
                      <li>
                        The academic context: quality and context of supervision
                        and potential for future academic cooperation.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-[#1b2942] mt-8 mb-4">
                      Contact for Further Questions
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        See the contact address for your{" "}
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          country of origin
                        </a>
                        . (PDF, 136 kB, 05.09.2023) - this is the country
                        according to your passport.
                      </li>
                      <li>
                        Check the available scholarship types for your country.
                      </li>
                      <li>
                        Check the opening of the call and the submission
                        deadline. Applications submitted too late will not be
                        considered
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-[#1b2942] mt-8 mb-4">
                      To Apply
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        Download the{" "}
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/de/dokumente/2023/07/application_package_zip.zip.download.zip/ESKAS_Application_Package_2024-2025.zip"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          application package
                        </a>
                        . (ZIP, 3 MB, 18.07.2023) (application forms and
                        templates).
                      </li>
                      <li>Fill out and print the forms.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-[#1b2942] mt-8 mb-4">
                      To Submit
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10 text-[#1b2942]">
                      <li>
                        Note: Two paper copies of your application must be
                        submitted.
                      </li>
                      <li>
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          click here
                        </a>{" "}
                        (PDF, 136 kB, 05.09.2023) for the e-mail contact that
                        will give you the postal address of your country of
                        origin.
                      </li>
                    </ul>
                  </div>

                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h3 className="text-[32px] font-semibold text-[#1b2942]">
                      PhD Scholarship
                    </h3>
                    <div className="w-24 h-[4px] bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8 text-[#1b2942]">
                    <p className="text-[20px] leading-10 mb-6">
                      Abbreviated summary. For full details, please refer to the{" "}
                      <a
                        href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/06/guidelines.pdf.download.pdf/01_Guidelines4Applicants_2024_2025_e_.pdf"
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        Guidelines for Scholarship Applicants
                      </a>
                      .
                    </p>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Objectives
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        To enable selected applicants to undertake a PhD at one
                        of the 10 Swiss cantonal universities, the two Swiss
                        federal institutes of technology or the Graduate
                        Institute. Valid for full-time research in Switzerland
                        only.
                      </li>
                      <li>Valid for full-time research in Switzerland only.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Target Group
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Highly qualified postgraduate students (possessing the
                        required degrees to start a PhD).
                      </li>
                      <li>
                        Primarily intended for scholars who have not already
                        been to Switzerland.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Eligibility Criteria
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Master’s degree or equivalent university degree achieved
                        before 31 July 2024 (except: ETH Zurich: 30 June 2024).
                        Degree certificate completed.
                      </li>
                      <li>Applicants must be born after 31 December 1988.</li>
                      <li>A research proposal including a timeframe.</li>
                      <li>
                        Mandatory letter from an academic host professor
                        (including their short CV).
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Duration
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Scholarship starts for the academic year 2024-25: 1
                        September 2024.
                      </li>
                      <li>12 months (starting in September).</li>
                      <li>
                        Prolongable up to 36 months. The scholarship is awarded
                        in three steps of 12 months each based on the achieved
                        academic results.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">Amount</h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        The scholarship amounts to a monthly payment of CHF
                        1’920.-
                      </li>
                      <li>
                        The scholarship amount covers living expenses for one
                        person only.
                      </li>
                      <li>This scholarship is not a salary.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Selection Criteria
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        The candidate: academic profile, research capacity, and
                        motivation.
                      </li>
                      <li>
                        The research project: originality and methodological
                        soundness.
                      </li>
                      <li>
                        The academic context: quality and context of supervision
                        and potential for future academic cooperation.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Contact for Further Questions
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        See the contact address for your{" "}
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          country of origin{" "}
                        </a>
                        (PDF, 136 kB, 05.09.2023) - this is the country
                        according to your passport.
                      </li>
                      <li>
                        Check the available scholarship types for your country
                        of origin.
                      </li>
                      <li>
                        Check the opening of the call and the submission
                        deadline. Applications submitted too late will not be
                        considered.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      To Apply
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Download the
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2023/07/application_package_zip.zip.download.zip/ESKAS_Application_Package_2024-2025.zip"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          {" "}
                          application package{" "}
                        </a>
                        (ZIP, 3 MB, 18.07.2023) (application forms and
                        templates).
                      </li>
                      <li>Fill out and print all required forms.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      To Submit
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Note: Two paper copies of your application must be
                        submitted.
                      </li>
                      <li>
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          Click here
                        </a>{" "}
                        (PDF, 136 kB, 05.09.2023) for the e-mail contact that
                        will give you the postal address of your country of
                        origin.
                      </li>
                    </ul>
                  </div>

                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h3 className="text-[32px] font-semibold text-[#1b2942]">
                      Postdoctoral Scholarship
                    </h3>
                    <div className="w-24 h-[4px] bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8 text-[#1b2942]">
                    <p className="text-[20px] leading-10 mb-6">
                      Abbreviated summary. For full details, please refer to the{" "}
                      <a
                        href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/06/guidelines.pdf.download.pdf/01_Guidelines4Applicants_2024_2025_e_.pdf"
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        Guidelines for Scholarship Applicants
                      </a>
                      .
                    </p>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Objectives
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        To enable selected applicants to undertake a PhD at one
                        of the 10 Swiss cantonal universities, the two Swiss
                        federal institutes of technology or the Graduate
                        Institute. Valid for full-time research in Switzerland
                        only.
                      </li>
                      <li>Valid for full-time research in Switzerland only.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Target Group
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Highly qualified early career scientists at postdoctoral
                        level.
                      </li>
                      <li>
                        Primarily intended for scholars who have not already
                        been to Switzerland.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Eligibility Criteria
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        PhD degree achieved after 31 December 2020 and before 31
                        July 2024 (except: ETH Zurich: 30 June 2024). PhD degree
                        certificate completed.
                      </li>
                      <li>A research proposal including a timeframe.</li>
                      <li>
                        Mandatory letter from an academic host professor
                        (including their short CV).
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Duration
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Scholarship starts for the academic year 2024-25: 1
                        September 2024.
                      </li>
                      <li>12 months (starting in September).</li>
                      <li>No prolongation is possible.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">Amount</h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        The scholarship amounts to a monthly payment of CHF
                        3'500.-
                      </li>
                      <li>
                        The scholarship amount covers the living costs of one
                        person only.
                      </li>
                      <li>This scholarship is not a salary.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Selection Criteria
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        The candidate: academic profile, research capacity, and
                        motivation.
                      </li>
                      <li>
                        Originality and methodological soundness of the research
                        project.
                      </li>
                      <li>
                        The academic context: quality and context of supervision
                        and potential for future academic cooperation.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Contact for Further Questions
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        See the contact address for your
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          {" "}
                          country of origin
                        </a>
                        (PDF, 136 kB, 05.09.2023) - this is the country
                        according to your passport.
                      </li>
                      <li>Check scholarship availability for your country.</li>
                      <li>
                        Check the opening of the call and the submission
                        deadline. Applications submitted too late will not be
                        considered.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      To Apply
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Download the
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2023/07/application_package_zip.zip.download.zip/ESKAS_Application_Package_2024-2025.zip"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          application package
                        </a>{" "}
                        (ZIP, 3 MB, 18.07.2023) (application forms and
                        templates).
                      </li>
                      <li>Fill out and print the required forms.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      To Submit
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Note: Two paper copies of your application must be
                        submitted.
                      </li>
                      <li>
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          Click here
                        </a>{" "}
                        (PDF, 136 kB, 05.09.2023) for the e-mail contact that
                        will give you the postal address of your country of
                        origin.
                      </li>
                    </ul>
                  </div>

                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h3 className="text-[32px] font-semibold text-[#1b2942]">
                      Art Scholarship
                    </h3>
                    <div className="w-24 h-[4px] bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8 text-[#1b2942]">
                    <p className="text-[20px] leading-10 mb-6">
                      Abbreviated summary. For full details, please refer to the{" "}
                      <a
                        href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/06/guidelines.pdf.download.pdf/01_Guidelines4Applicants_2024_2025_e_.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Guidelines for Scholarship Applicants
                      </a>
                      .
                    </p>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Objectives
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        To enable selected applicants to undertake initial
                        Master’s studies in Switzerland at any Swiss
                        conservatory or university of the arts.
                      </li>
                      <li>Valid for full-time research in Switzerland.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Target Group
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Highly qualified young artists without a Master’s
                        degree.
                      </li>
                      <li>
                        Art scholarships only available to citizens of countries
                        with which Switzerland has a reciprocity agreement for
                        art scholarships.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Eligibility Criteria
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Bachelor’s degree or equivalent achieved before 31 July
                        2024. Degree certificate completed.
                      </li>
                      <li>Applicants must be born after 31 December 1988.</li>
                      <li>
                        Invalid: All applications for a second master’s degree.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Duration
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Scholarship starts for the academic year 2024-25: 1
                        September 2024.
                      </li>
                      <li>12 months (starting in September).</li>
                      <li>
                        Prolongable up to 21 months at most depending on the
                        Master programme chosen and the necessary ECTS credits.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">Amount</h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        The scholarship amounts to a monthly payment of CHF
                        1'920.-
                      </li>
                      <li>
                        The scholarship amount covers the living costs of one
                        person only.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Selection Criteria
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>Artistic profile, qualifications, and motivation.</li>
                      <li>
                        The submitted portfolio: artistic maturity and
                        potential.
                      </li>
                      <li>The host institute: available study places.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Contact for Further Questions
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        See the contact address for your
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          country of origin
                        </a>{" "}
                        (PDF, 136 kB, 05.09.2023) - this is the country
                        according to your passport.
                      </li>
                      <li>Check scholarship availability for your country.</li>
                      <li>
                        Check the opening of the call and the submission
                        deadline. Applications submitted too late will not be
                        considered.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      To Apply
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Download the{" "}
                        <a
                          href="#"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          application package
                        </a>{" "}
                        (ZIP, 3 MB, 18.07.2023) (application forms and
                        templates).
                      </li>
                      <li>Complete and print the required forms.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      To Submit
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Note: Two paper copies of your application must be
                        submitted.
                      </li>
                      <li>
                        <a
                          href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          Click here
                        </a>{" "}
                        (PDF, 136 kB, 05.09.2023) for the e-mail contact that
                        will give you the postal address of your country of
                        origin.
                      </li>
                    </ul>
                  </div>

                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h3 className="text-[36px] font-semibold text-[#1b2942]">
                      Application Procedure
                    </h3>
                    <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8 text-[#1b2942]">
                    <p className="text-[20px] leading-10 mb-6">
                      Release of the program for 180+ countries:{" "}
                      <a
                        href="https://www.sbfi.admin.ch/scholarships_eng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        www.sbfi.admin.ch/scholarships_eng
                      </a>{" "}
                      (early August)
                    </p>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Call for Applications
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Download{" "}
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {" "}
                          application documents{" "}
                        </a>
                        (this September). .
                      </li>
                      <li>
                        If you have questions, refer to the{" "}
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          list of contacts
                        </a>
                        .
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Prepare Application
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Fill out all required forms, including the research
                        proposal.
                      </li>
                      <li>Collect support letters and references.</li>
                      <li>
                        Ensure all documents are complete before the deadline.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Submission Deadline at Swiss Representation
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Submission deadlines and postal addresses vary from
                        country to country..
                      </li>
                      <li>
                        Check the official{" "}
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          list of contacts
                        </a>
                        for country-specific details.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Selection
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Applications are reviewed by the Federal Commission for
                        Scholarships (FCS).
                      </li>
                      <li>
                        Results are generally announced by the end of May.
                      </li>
                    </ul>

                    <h4 className="text-2xl font-semibold mt-8 mb-3">
                      Start of Scholarships
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-[20px] leading-10">
                      <li>
                        Scholarship recipients will start their programs at the
                        Swiss academic host institution in the following
                        (September.)
                      </li>
                    </ul>
                  </div>

                  {/* How to Apply */}

                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h3 className="text-[36px] font-semibold text-[#1b2942]">
                      How to Apply
                    </h3>
                    <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8 text-[#1b2942]">
                    <p className="text-[20px] leading-10 mb-6">
                      Select your country of origin according to your passport.
                      Find out about the types of scholarships available,
                      eligibility criteria, and application deadlines for your
                      country.
                    </p>

                    <p className="text-[20px] leading-10 mb-6">
                      For more information and questions, please contact the
                      address provided in the{" "}
                      <a
                        href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        list of contacts
                      </a>
                      .
                    </p>

                    <p className="text-[20px] leading-10 mb-6">
                      Select your country of origin{" "}
                      <a
                        href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/07/all-countries.pdf.download.pdf/2023_ESKAS_all_country_contacts_A_to_Z_for_application_documents.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        according to your passport
                      </a>
                      .
                    </p>

                    <p className="text-[20px] leading-10 mb-6">
                      Download the{" "}
                      <a
                        href="https://www.sbfi.admin.ch/dam/sbfi/de/dokumente/2023/07/application_package_zip.zip.download.zip/ESKAS_Application_Package_2024-2025.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Application Package
                      </a>
                      .
                    </p>

                    <p className="text-[20px] leading-10">
                      Read the{" "}
                      <a
                        href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/06/guidelines.pdf.download.pdf/01_Guidelines4Applicants_2024_2025_e_.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Application Guidelines
                      </a>{" "}
                      (PDF, 753 kB, 19.07.2023) and follow the instructions.
                      Prepare your application and submit two complete copies to
                      the relevant office in your country of origin according to
                      the{" "}
                      <a
                        href="https://www.sbfi.admin.ch/dam/sbfi/en/dokumente/2022/06/guidelines.pdf.download.pdf/01_Guidelines4Applicants_2024_2025_e_.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {" "}
                        list of contacts{" "}
                      </a>
                      (PDF, 136 kB, 05.09.2023) by the deadline.
                    </p>
                  </div>

                  {/* Selection */}

                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h3 className="text-[36px] font-semibold text-[#1b2942]">
                      Selection Criteria
                    </h3>
                    <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8 text-[#1b2942]">
                    <p className="text-[20px] leading-10 mb-6">
                      Applications are subject to preliminary selection by the
                      relevant national authorities and/or the Swiss diplomatic
                      representation. The shortlisted applications are then
                      assessed by the Federal Commission for Scholarships for
                      Foreign Students (FCS), which takes the final decision.
                    </p>

                    <p className="text-[20px] leading-10 mb-4">
                      The FCS assesses scholarship applications according to
                      three criteria:
                    </p>

                    <ol className="list-decimal pl-8 space-y-2 text-[20px] leading-10 mb-6">
                      <li>Candidate profile</li>
                      <li>Quality of the research project or artistic work</li>
                      <li>
                        Synergies and potential for future research cooperation
                      </li>
                    </ol>

                    <p className="text-[20px] leading-10">
                      The FCS is composed of professors from Swiss public
                      universities. Scholarship awards are decided on the basis
                      of academic and scientific excellence.
                    </p>
                  </div>

                  {/* Awards and Outlook */}

                  <div className="mx-8 bg-[#f0f0f0] px-8 py-8">
                    <h3 className="text-[36px] font-semibold text-[#1b2942]">
                      Awards and Outlook
                    </h3>
                    <div className="w-24 h-1 bg-[#c9c5df] mt-4"></div>
                  </div>

                  <div className="mx-8 bg-[#f5f5f5] px-8 py-8 text-[#1b2942]">
                    <p className="text-[20px] leading-10 mb-6">
                      The FCS will announce its decisions regarding the new
                      scholarship awards by the end of May at the latest.
                    </p>

                    <p className="text-[20px] leading-10">
                      The FCS will select scholarship holders for the 2024–25
                      academic year by the end of May 2024. Scholarships for the
                      2025–26 academic year will be advertised online from
                      August 2024.
                    </p>
                  </div>
                </div>
              </div>
            </section>
         
        </div>
      </div>

      <Footer />
    </>
  );
}
