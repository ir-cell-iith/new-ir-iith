
import React from "react";
import { isMobile } from "react-device-detect";
import NavBar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import Footer from "../components/footer";
import "./styles/homeStyle.css"
export default function RamanChaprak() {
  return (
    <>
      {isMobile ? <MobileNavbar /> : <NavBar />}

      
            {/* Paste ALL your converted content here.
                Keep using:
                className="col-lg-12"
                className="subSectionHeading"
                className="textBox"
            */}
            
  <section className="defaultSection mb-8">
    <div className="container-fluid">
      <div className="row">
     <div className="text-center py-12">
  <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
    Raman–Charpak Fellowship Program
  </h1>
  <div className="w-64 h-1 bg-gray-300 mx-auto mt-3"></div>
</div>
        {/* Honorees and Launch Date Section */}
    <div className="mx-8 mb-0 bg-[#ececec]">
  {/* Header */}
  <div className="px-8 py-8">
    <h2 className="text-3xl font-normal text-slate-900">
      Honorees
    </h2>
    <div className="w-40 h-1 bg-gray-300 mt-3"></div>
  </div>

  {/* Content */}
  <div className="bg-[#f5f5f5] px-8 py-8 text-lg leading-8 text-slate-900">
    <p className="mb-4">Honorees:</p>

    <ul className="list-disc pl-8 mb-0 space-y-2">
      <li>Prof C.V. Raman, Indian Nobel Laureate (1930)</li>
      <li>Prof Georges Charpak, French Nobel Laureate (1992)</li>
    </ul>

    <p>
      Launch Date: February 2013, during the State visit of the
      President of France to India.
    </p>
  </div>
</div>
        {/* Program Details */}
      { /* Aim Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "40px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Aim
  </h2>

  <div className="w-[180px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Aim Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "45px 50px" }}
>
  <p className="text-[20px] leading-[1.8] text-[#1b2942] m-0">
    The Raman–Charpak Fellowship Program aims to facilitate the exchange
    of doctoral students and, more recently, Master's students between
    India and France. The program aims to broaden the scope and depth of
    future Science, Technology, and Innovation engagements.
  </p>
</div>
        {/* Funding */}
       {/* Funding Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Funding
  </h2>

  <div className="w-[170px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Funding Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <p className="text-[20px] text-[#1b2942] mb-6">
    This is the only Indo-French bilateral Fellowship program jointly funded by:
  </p>

  <ul className="list-disc pl-10 space-y-3 text-[20px] text-[#1b2942]">
    <li>
      Department of Science and Technology (DST), Government of India
    </li>
    <li>
      French Institute in India (IFI), French Embassy in India,
      Ministry for Europe and Foreign Affairs, Government of France
    </li>
  </ul>
</div>
        {/* Implementing Body Section */}
        {/* Implementing Body Header */}
<div className="mx-8 bg-[#ececec]" style={{ padding: "35px 50px 30px 50px" }}>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Implementing Body
  </h2>

  <div className="w-[230px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Implementing Body Content */}
<div className="mx-8 bg-[#f5f5f5]" style={{ padding: "40px 50px" }}>
  <p className="text-[20px] text-[#1b2942] mb-4">
    <strong>Implementing Body:</strong>
  </p>

  <p className="text-[20px] text-[#1b2942]">
    Indo French Centre for Promotion of Advanced Research
    (IFCPAR/CEFIPRA)
  </p>
</div>
       {/* Objectives Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Objectives
  </h2>

  <div className="w-[180px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Objectives Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <ul className="list-disc pl-10 space-y-3 text-[20px] text-[#1b2942]">
    <li>
      Improve the doctoral and Master's skills of Indian and French students
    </li>
    <li>
      Provide an opportunity for students to carry out part of their research
      work in a University or Research &amp; Development Institute in France
      or India, respectively
    </li>
    <li>Promote professional relationships</li>
    <li>Foster new Science and Technology cooperation</li>
    <li>Allow students to experience a different cultural context</li>
    <li>
      Exposure to current research methods and trends in France/India
    </li>
  </ul>
</div>
        {/* Eligibility */}

       {/* Eligible Participants Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Eligible Participants
  </h2>

  <div className="w-[280px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Eligible Participants Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <p className="text-[20px] text-[#1b2942] mb-4">
    Highly qualified PhD students registered in an Indian or French
    Research Institute/University.
  </p>

  <p className="text-[20px] text-[#1b2942]">
    Master's Students from France.
  </p>
</div>

{/* Duration Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Duration
  </h2>

  <div className="w-[150px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Duration Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <p className="text-[20px] text-[#1b2942] mb-4">
    Minimum: 2 months
  </p>

  <p className="text-[20px] text-[#1b2942]">
    Maximum: 6 months
  </p>
</div>
        {/* Fields of Research */}
      {/* Fields of Research Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Fields of Research
  </h2>

  <div className="w-[240px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Fields of Research Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <p className="text-[20px] text-[#1b2942] mb-6">
    The Raman-Charpak Fellowship program covers various fields of research,
    including but not limited to:
  </p>

  <ol className="list-decimal pl-10 space-y-3 text-[20px] text-[#1b2942]">
    <li>Atmospheric Sciences, Earth Sciences, and Environmental Sciences</li>
    <li>Materials Sciences</li>
    <li>Physical Sciences</li>
    <li>Chemical Sciences</li>
    <li>Engineering Sciences</li>
    <li>Biological Sciences, Life, and Medical Sciences</li>
    <li>Mathematical and Computational Sciences</li>
    <li>Agricultural Sciences</li>
  </ol>
</div>

{/* Application Requirement Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Application Requirement
  </h2>

  <div className="w-[320px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Application Requirement Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <p className="text-[20px] leading-[1.8] text-[#1b2942] m-0">
    Applicants must have a pre-determined project proposal discussed and
    agreed upon by the student and the two supervisors (Indian and French)
    before applying.
  </p>
</div>
        {/* Fellowship Support */}
      
{/* Fellowship Support Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Fellowship Support
  </h2>

  <div className="w-[240px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Fellowship Support Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <p className="text-[20px] text-[#1b2942] mb-4 font-semibold">
    For Indian Fellow:
  </p>

  <ul className="list-disc pl-10 space-y-3 text-[20px] text-[#1b2942] mb-8">
    <li>
      Fellowship Support: 1500 Euros per month for daily expenses,
      local travel, accommodation charges, plus Social Security
      charges.
    </li>
  </ul>

  <p className="text-[20px] text-[#1b2942] mb-4 font-semibold">
    For French Fellow:
  </p>

  <ul className="list-disc pl-10 space-y-3 text-[20px] text-[#1b2942] mb-8">
    <li>
      Fellowship Support: Rs. 40,000 per month for daily expenses,
      local travel, etc., plus accommodation charges not exceeding
      Rs. 45,000 per month.
    </li>
  </ul>

  <p className="text-[20px] text-[#1b2942] mb-4 font-semibold">
    Both Indian and French Fellows receive the following support:
  </p>

  <ul className="list-disc pl-10 space-y-3 text-[20px] text-[#1b2942] mb-8">
    <li>
      To and fro air ticket in economy class between India and France.
    </li>
    <li>
      Insurance coverage (travel &amp; health) wherever required.
    </li>
    <li>
      Any administrative costs for Visa and Registration (if any).
    </li>
    <li>Carte de Sejour (if any).</li>
  </ul>

  <p className="text-[20px] leading-[1.8] text-[#1b2942]">
    Additionally, a Fellow may receive additional support (up to Euro
    500 for Indian Fellows and equivalent support in Indian Rupees for
    French Fellows) for participating in a Seminar/Workshop during
    their fellowship term and staying in their host countries. This
    support is limited to registration fees (if any), bus/train tickets
    for travel (if any), and accommodation charges (if any). Such
    claims will be provided on actual receipts, proof of
    participation/acceptance of the paper, and after the completion of
    the fellowship duration by the awarded student (at the time of
    TA/DA settlement). Please note that no support will be provided for
    family members during the fellowship period.
  </p>
</div>


 
{/* Eligibility (PhD students) Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Eligibility (PhD students)
  </h2>

  <div className="w-[320px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Eligibility (PhD students) Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <ul className="list-disc pl-10 space-y-3 text-[20px] leading-[1.8] text-[#1b2942]">
    <li>
      Applicants from India must be Indian citizens residing in India and
      have registered for a PhD in a recognised university or research
      institution in India.
    </li>
    <li>
      Applicants from France must be residing in France and have registered
      for a PhD/Master’s degree in a recognised university or research
      institution in France.
    </li>
    <li>
      The maximum age limit is 30 years as of April 1, 2023.
    </li>
    <li>
      Students previously supported by CEFIPRA or who have a permanent
      position in institutions/universities are not eligible.
    </li>
    <li>
      Pre-authorization or prior consent from their
      Institute/University is required to apply for a foreign fellowship
      program.
    </li>
    <li>
      Eligibility also requires compliance with traveling and local
      sanitary regulations as well as the university or institute's
      sanitary rules.
    </li>
  </ul>
</div>

{/* Eligibility (French Master students) Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Eligibility (French Master students)
  </h2>

  <div className="w-[420px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Eligibility (French Master students) Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <ul className="list-disc pl-10 space-y-3 text-[20px] leading-[1.8] text-[#1b2942]">
    <li>
      Applicants must be residing in France and must be registered in the
      Master 1 program and must be able to plan their visit during the time
      of Master 2.
    </li>
    <li>
      Applicants in the Master 2 program are also eligible to apply.
    </li>
    <li>
      The maximum age limit is 30 years as of April 1, 2023.
    </li>
    <li>
      Students who are part of CEFIPRA projects or have a permanent
      position in institutions/universities are not eligible.
    </li>
    <li>
      Similar to PhD applicants, eligibility requires compliance with
      traveling and local sanitary regulations as well as the university
      or institute's sanitary rules.
    </li>
  </ul>
</div>
       
{/* Application Procedure & Documents Required for PhD Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Application Procedure &amp; Documents Required for PhD (Indian or French)
  </h2>

  <div className="w-[500px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Application Procedure & Documents Required for PhD Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <ol className="list-decimal pl-10 space-y-4 text-[20px] leading-[1.8] text-[#1b2942]">
    <li>
      Only online submissions will be considered. Candidates need to
      register and apply at{" "}
      <a
        href="http://www.cefipra.org/proposal/index.aspx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        www.cefipra.org
      </a>.
    </li>

    <li>
      Detailed description of the Research Plan/Proposal/Educational
      Proposal (maximum up to 5 pages) in the prescribed format,
      including the title and research work plan, an explanation of the
      expected benefit from the stay in the proposed Research
      Institute/University in France/India, etc.
    </li>

    <li>
      A CV (maximum up to 2 pages) in the prescribed format with a recent
      photograph, including a summary of achievements and research
      interests, list of relevant publications (maximum 5 most important
      ones), etc.
    </li>

    <li>
      A letter of recommendation from the Ph.D. supervisor.
    </li>

    <li>
      A letter of agreement from the proposed host supervisor in the
      fellowship lab (Foreign Research Institute/University). French host
      supervisors for Indian applications are requested to seek prior
      approval for access to the lab in cases of any limitations (ZRR for
      instance).
    </li>

    <li>
      PhD synopsis or short summary of PhD work with title (up to 2 pages
      only).
    </li>

    <li>
      Research experience letter or publications, if any (first author or
      co-author). Kindly combine the first page of all publications and
      enclose them as a single PDF file.
    </li>

    <li>
      No Objection Certificate from the Head of the Institution (Only for
      Indian students).
    </li>

    <li>
      A scan copy of a valid passport (both front and back).
    </li>

    <li>
      A recent photograph.
    </li>
  </ol>
</div>


        {/* Application Procedure for French Master Students */}
      
{/* Application Procedure for French Master Students Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Application Procedure for French Master Students
  </h2>

  <div className="w-[420px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Application Procedure for French Master Students Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <ul className="list-disc pl-10 space-y-4 text-[20px] leading-[1.8] text-[#1b2942]">
    <li>
      Only online submission will be considered; candidates need to register
      and apply at{" "}
      <a
        href="http://www.cefipra.org/proposal/index.aspx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        www.cefipra.org
      </a>.
    </li>

    <li>
      Copy of highest diploma obtained (Licence – i.e. Bachelor – or Master 1).
    </li>

    <li>
      Proof of registration in License or Master 1 for 2022-2023.
    </li>

    <li>
      Proof of submission/acceptance in Master 1 or Master 2 for 2023-2024
      (candidates are required to update the documents of
      acceptance/registration in Master ASAP and at the latest by the end of
      September 2023; documents have to be shared by email to
      kunal@cefipra.org).
    </li>

    <li>
      Detailed description of the Research Plan (maximum up to 3 pages) in the prescribed format, which notably asks for: the title and the research work plan, an explanation of the expected benefit from his/her stay in the proposed Research Institute/University in India, etc.
    </li>

    <li>
      A CV (maximum up to 2 pages) in the prescribed format with a recent photograph including a summary of achievements and research interests, list of relevant publications (maximum 5 most important ones), etc.
    </li>

    <li>
      A letter of recommendation from the French Faculty
      Supervisor/head of the Master Program.
    </li>

    <li>
      A letter of agreement from the proposed host supervisor in the fellowship
      lab (Foreign Research Institute/University).
    </li>

    <li>
     Research experience letter or publications, if any (first author or co-author); 
     (kindly combine the first page of all the publications and enclose as a single PDF file).
    </li>

    <li>
      A scan copy of a valid passport (both front and back).
    </li>

    <li>
      A recent photograph.
    </li>
  </ul>
</div>


        {/* Prescribed Formats and Submission */}
        
{/* Prescribed Formats and Submission Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Prescribed Formats and Submission
  </h2>

  <div className="w-[340px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Prescribed Formats and Submission Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <div className="text-[20px] leading-[1.8] text-[#1b2942] space-y-6">
    <p>
      The documents enclosed must respect the lengths indicated above. It is
      strongly encouraged to apply early for timely processing rather than
      towards the end of the deadline. Please ensure that you completely fill
      the application form and then submit with all the requested
      documents/attachments. Only complete applications will be considered.
    </p>

    <p>
      The candidate should not apply again if the application is successfully
      submitted.
    </p>

    <p>
      Applications received through post or submitted after the deadline will
      not be considered for evaluation.
    </p>

    <p>
      Applicants must name the documents as follows (in red text) before
      uploading:
    </p>

    <ul className="list-disc pl-10 space-y-2">
      <li>Research Proposal: Proposal "Your Name"</li>
      <li>CV: CV "Your Name"</li>
      <li>Letter of Recommendation from PhD supervisor: LoR1 "Your Name"</li>
      <li>Letter of Recommendation from Host supervisor: LoR2 "Your Name"</li>
      <li>No Objection Certificate: NOC "Your Name"</li>
      <li>PhD Synopsis: Synopsis "Your Name"</li>
      <li>
        Summary of the internships (only for Master's students):
        Internships "Your Name"
      </li>
      <li>Passport: Passport "Your Name"</li>
    </ul>

    <p>Applicants must follow the prescribed format:</p>

    <ul className="list-disc pl-10 space-y-2">
      <li>For Indian &amp; French Ph.D. students:</li>
      <ul className="list-disc pl-10">
        <li>
          <a
            href="http://www.cefipra.org/downloads/Format_for_Phd_students.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Download the format for Research Proposal
          </a>
        </li>
        <li>
          <a
            href="http://www.cefipra.org/downloads/CV_Phd_students.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Download the format for CV
          </a>
        </li>
      </ul>

      <li>For French Master's Students:</li>
      <ul className="list-disc pl-10">
        <li>
          <a
            href="http://www.cefipra.org/downloads/Format_for_Masters_students.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Download the format for Research Proposal
          </a>
        </li>
        <li>
          <a
            href="http://www.cefipra.org/downloads/CV_Masters_students.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Download the format for CV
          </a>
        </li>
      </ul>
    </ul>

    <p>
      The following other documents are to be on the official letterhead of the
      institute/supervisor, signed, and stamped:
    </p>

    <ul className="list-disc pl-10 space-y-2">
      <li>NoC from parent Institute for applying to RCF.</li>
      <li>
        Recommendation letter from Ph.D. supervisor/Faculty Supervisor (for
        Master's students).
      </li>
      <li>
        Letter of agreement/hosting under RCF from host supervisor.
      </li>
      <li>
        Please note candidates must submit their Research Proposal and CV in
        the prescribed formats.
      </li>
    </ul>
  </div>
</div>


{/* Time Line for Applications Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Time Line for Applications
  </h2>

  <div className="w-[280px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Time Line for Applications Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <p className="text-[20px] text-[#1b2942] mb-6 font-semibold">
    Indian and French PhD Students &amp; French Masters Students:
  </p>

  <ul className="list-disc pl-10 space-y-3 text-[20px] leading-[1.8] text-[#1b2942]">
    <li>Launching: 17th July 2023</li>

    <li>
      End of Deadline: 30th September 2023 (For Indian &amp; French PhD
      students)
    </li>

    <li>
      End of Deadline: 30th September 2023 (Only for French Masters students)
    </li>

    <li>Evaluations: Oct to Nov. 2023 (Tentative)</li>

    <li>Declaration of Result: End Dec, 2023 (Tentative)</li>

    <li>
      Starting date of fellowship: Dec 2023 to 31st March 2024
    </li>

    <li>
      Awarded students are expected to start their fellowship no later than
      31st March 2024 preferably.
    </li>

    <li>
      In case of awarded French Masters students, their visit duration after
      31st March 2024 can be considered only based on request and the timeline
      of their Masters’ curricula.
    </li>
  </ul>
</div>

{/* Guidelines & Important Instructions Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Guidelines &amp; Important Instructions
  </h2>

  <div className="w-[380px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Guidelines & Important Instructions Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <ul className="list-disc pl-10 space-y-4 text-[20px] leading-[1.8] text-[#1b2942]">
    <li>
     Awarded fellows shall be invited to submit a valid travel itinerary according to their proposed duration of fellowship and travel details, as per the rules, and after the Government of India's advisory. No change will be accepted once the travel itinerary is submitted. Please note that all international travel regulations and protocols in place at the time of the award must be followed.
    </li>

    <li>
      Do not send any hard copies of your documents. Only soft copies uploaded
      online will be accepted.
    </li>

    <li>
      Applicants must ensure that they fulfill all the prescribed eligibility conditions and other terms and conditions specified in the advertisement. If at any stage, it is found that the information furnished by the applicant is false or the applicant does not fulfill the eligibility conditions, the fellowship is liable to be canceled.
    </li>

    <li>
      Applicants must clearly indicate their preference for one of the Raman-Charpak Fellowships in their research proposal. There is no need to make a separate application for a particular fellowship.
    </li>

    <li>
      The award of the Raman-Charpak Fellowship is subject to successful
      completion of all necessary documentation as per CEFIPRA guidelines
      and the fellow's home institution.
    </li>

    <li>
      French applicants are requested to indicate a direct scientific
      interest in the area of Indo-French cooperation.
    </li>

    <li>
      The names of selected students will be announced on the CEFIPRA
      website and through an official email.
    </li>

    <li>
      Students are required to inform CEFIPRA immediately of any change in their contact information (email, phone number, etc.) during the selection process.
    </li>

    <li>
      All candidates are requested to follow the advice of their own country’s travel advisory (For Indian students: https://www.mea.gov.in/covid-19-advisories.htm; For French students: https://www.diplomatie.gouv.fr/fr/) and to consult the Indian and French consulates or embassies in their home country for the latest updates on visa and travel requirements.
    </li>

    <li>
      The fellow must ensure compliance with the traveling and local sanitary regulations as well as the university or institute's sanitary rules. In case of violation of these regulations, CEFIPRA reserves the right to cancel the fellowship, and the fellow must bear the consequences, including repatriation if needed.
    </li>

    <li>
      Applications not fully filled in and not accompanied by copies of all required documents and incomplete/incorrect application forms will be summarily rejected.
    </li>

    <li>
      Incomplete applications will not be considered for evaluation.
    </li>
  </ul>
</div>
{/* Contact Information Header */}
<div
  className="mx-8 bg-[#ececec]"
  style={{ padding: "35px 50px 30px 50px" }}
>
  <h2 className="text-[38px] font-normal text-[#1b2942] m-0">
    Contact Information
  </h2>

  <div className="w-[240px] h-[4px] bg-[#c9c5df] mt-4"></div>
</div>

{/* Contact Information Content */}
<div
  className="mx-8 bg-[#f5f5f5]"
  style={{ padding: "40px 50px" }}
>
  <p className="text-[20px] leading-[1.8] text-[#1b2942] mb-8">
    If you have any questions or need further information, please feel free
    to contact our representatives:
  </p>

  {/* India-based inquiries */}
  <div className="mb-10">
    <h4 className="text-[24px] font-semibold text-[#1b2942] mb-3">
      For India-based inquiries:
    </h4>

    <p className="text-[20px] text-[#1b2942]">
      <strong>Ms. Kamal Kapoor</strong>
    </p>

    <p className="text-[20px] text-[#1b2942]">
      CEFIPRA India Office
    </p>

    <p className="text-[20px] text-[#1b2942]">
      Email:{" "}
      <a
        href="mailto:kunal@cefipra.org"
        className="text-blue-600 underline"
      >
        kunal@cefipra.org
      </a>
    </p>
  </div>

  {/* France-based inquiries */}
  <div>
    <h4 className="text-[24px] font-semibold text-[#1b2942] mb-3">
      For France-based inquiries:
    </h4>

    <p className="text-[20px] text-[#1b2942]">
      <strong>Ms. Virginie Schmeltz</strong>
    </p>

    <p className="text-[20px] text-[#1b2942]">
      CEFIPRA France Office
    </p>

    <p className="text-[20px] text-[#1b2942]">
      Email:{" "}
      <a
        href="mailto:virginie@cefipra.org"
        className="text-blue-600 underline"
      >
        virginie@cefipra.org
      </a>
    </p>
  </div>
</div>

      </div>
    </div>
  </section>
         

      <Footer />
    </>
  );
}
