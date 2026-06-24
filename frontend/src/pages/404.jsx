import { Link } from "react-router-dom";
import React from "react";
import ircelllogo from "../components/icons/ircellLogo.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center  align-middle text-2xl text-black">
         {isMobile ? <MobileNavbar /> : <NavBar />}
        <section className="min-h-[60vh] flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h5 className="text-xl text-gray-600 mb-2">Page not found</h5>

              <h3 className="text-4xl font-semibold text-[#0b1f4d]">
                <Link to="/" className="hover:underline">
                  Go back to the homepage
                </Link>
              </h3>

              <div className="mt-4 h-1 w-40 mx-auto rounded-full bg-[#d9c8f3]" />
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}
