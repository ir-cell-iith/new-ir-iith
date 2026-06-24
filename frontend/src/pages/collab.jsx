import React from "react";
// import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
export default function Collab() {
  return (
    <div className="flex flex-col justify-center  text-center align-center text-2xl text-black">
      {isMobile && MobileNavbar()}
      {!isMobile && NavBar()}

      {/* IC Section */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              International Collaboration and Mobility
            </h2>
            <div className="w-64 h-1 bg-purple-200 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <a
              href="/international_students"
              className="block bg-gray-100 hover:bg-gray-200 transition rounded-md px-12 py-10"
            >
              <h4 className="text-2xl font-semibold text-black">
                International Students
              </h4>
            </a>

            <a
              href="/iith_students"
              className="block bg-gray-100 hover:bg-gray-200 transition rounded-md px-12 py-10"
            >
              <h4 className="text-2xl font-semibold text-black">
                IITH Students
              </h4>
            </a>

            <a
              href="/international_faculty"
              className="block bg-gray-100 hover:bg-gray-200 transition rounded-md px-12 py-10"
            >
              <h4 className="text-2xl font-semibold text-black">
                International Faculty
              </h4>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
