import React from "react";
import NavBar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import japanFlag from "../components/partners/Flag_of_Japan.svg 10.png";
import usaFlag from "../components/partners/flag_usa2.png";
import canadaFlag from "../components/partners/canada_flag10.png";
import germanyFlag from "../components/partners/flag_germany4.png";
import singaporeFlag from "../components/partners/Flag_of_Singapore.svg.png";
import portlandFlag from "../components/partners/portland_flag.png";
const visitors = [
    {
      title: "Prof. Benard Chenevier",
      description: "CNRS Director of Research (France), Professor and Senior University Research Administrator (URA)",
      logo: japanFlag,
      university: "Okayama University",
      country: "Japan",
    },
    {
      title: "Satyajit Dattagupta",
      description:"Chief Enrollment Officer, Special Advisor to the President, Senior Vice Chancellor",
      logo: usaFlag,
      university: "Northeastern University",
      country: "USA",
    },
    {
      title: "Bradly Booke",
      description: "Assistant Vice Chancellor of Enrollment",
      logo: usaFlag,
      university: "Northeastern University",
      country: "USA",
    },
    {
      title: "Kirsten Feddersen",
      description: "Senior Director of International Enrollment Management",
      logo: usaFlag,
      university: "Northeastern University",
      country: "USA",
    },
    {
      title: "Samol Ork",
      description: "Director- Recruitment Operations",
      logo: usaFlag,
      university: "Khoury College of Computer Sciences, San Francisco",
      country: "USA",
    },
    {
      title: "Steve Amato",
      description: "Professor and Department Chair of Regulatory Affairs & Quality Assurance",
      logo: usaFlag,
      university: "Northeastern University",
      country: "USA",
    },
    {
      title: "Frederic Ndiaye",
      description: "Head of Roux Institute",
      logo: portlandFlag,
      university: "",
      country: "Portland",
    },
    {
      title: "Justin Repici",
      description: "Coordinator of International Student Programs & Academic Advisor for Asian Studies, and Economics",
      logo: usaFlag,
      university: "CSSH",
      country: "USA",
    },
    {
      title: "Dominik Beckers",
      description: "Director of Strategic Partnerships",
      logo: canadaFlag,
      university: "Vancouver Campus",
      country: "Canada",
    },
    {
      title: "Dr. Sakth Kumar",
      description: "Deputy Director & Bio Nano Electronics Centre",
      logo: japanFlag,
      university: "Tokyo University",
      country: "Japan",
    },
    {
      title: "Prof. Tim White",
      description: "Vice President, International Engagement and President's Chair in Materials Science & Engineering",
      logo: singaporeFlag,
      university: "NTU Singapore",
      country: "Singapore",
    },
    {
      title: "Prof B.V.R Chowdari",
      description: "Senior Executive Director, India Strategy (International Engagement)",
      logo: singaporeFlag,
      university: "NTU Singapore",
      country: "Singapore",
    },
    {
      title: "Ms. Preeti Dawra",
      description: "Director, Global Marketing, Office of International Engagement",
      logo: singaporeFlag,
      university: "NTU Singapore",
      country: "Singapore",
    },
    {
      title: "Prof. Kenzo Fujisue",
      description: "Former MP & WEB3 Lab at University of Tokyo",
      logo: japanFlag,
      university: "	University of Tokyo",
      country: "Japan",
    },
    {
      title: "Prof. Satoshi Shima",
      description: "",
      logo: japanFlag,
      university: "",
      country: "Japan",
    },
    {
      title: "Mr. Yosikazu Takasaki",
      description: "",
      logo: japanFlag,
      university: "",
      country: "Japan",
    },
    {
      title: "Prof. Masahiro Takasaki",
      description: "CEO",
      logo: japanFlag,
      university: "	Doreming Ltd.",
      country: "Japan",
    },
    {
      title: "Ambassadar Bhaswati Mukherjee",
      description: "Former Ambassodar to Netherlands",
      logo: canadaFlag,
      university: "",
      country: "Canada",
    },
    {
      title: "CHENN L Kuechler Michaela",
      description: "German Consul General",
      logo: germanyFlag,
      university: "",
      country: "Germany",
    },
    {
      title: "Dr. Sano Hiroshi",
      description: "Mitsubishi Chemical Corporation, Japan",
      logo: japanFlag,
      university: "",
      country: "Japan",
    },
    {
      title: "	Prof. Miki Chitoshi",
      description: "President of Tokyo City University, Japan",
      logo: japanFlag,
      university: "",
      country: "Japan",
    },
  ];
  
  export default function Visitors() {
    return (
      <div className="gap-4 flex flex-col items-center px-4">
        {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

       
        <h1 className="text-3xl font-bold mb-12">Visitors</h1>
        {visitors.map((visitor, index) => (
          <div
            key={index}
            className="bg-[#FCFCFC] border-[0.125px] shadow-md w-full flex flex-col sm:flex-row items-center rounded-[16px] px-5 py-[20px] sm:py-[40px] gap-4 sm:gap-[80px] justify-between"
          >
            <div className="flex flex-col text-center sm:text-left gap-2 mb-3 sm:mb-0">
              <h1 className="text-[16px] font-bold">{visitor.title}</h1>
              <p className="text-sm sm:text-base">{visitor.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <img className="h-[40px] sm:h-[50px] shadow-md rounded-md" src={visitor.logo} alt="Country Flag" />
              <div className="flex flex-col text-center sm:text-left">
                <p className="text-sm sm:text-base">{visitor.university}</p>
                <p className="text-sm sm:text-base">{visitor.country}</p>
              </div>
            </div>
          </div>
        ))}
      <Footer />
      </div>
    );
  }