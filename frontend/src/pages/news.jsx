import React from "react";
import "../App.css";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar.jsx";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import news1 from "../components/images/news1.jpeg";
import news2 from "../components/images/news2.jpeg";
const NewsPage = () => {
  // const pad = isMobile ? "0px" : "40px";

  return (
    <>
      {/* Navbar */}
      <div style={{ position: "sticky", top: "0", zIndex: 1000 }}>
         {isMobile ? <MobileNavbar /> : <NavBar />}
      </div>

     
        <section className="min-h-screen bg-[#f5f5f5] py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900">News</h1>
              <div className="w-56 h-1 bg-purple-200 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* News Cards */}
            <div className="flex flex-wrap justify-center gap-10 ">
              <a
                href="https://www.dailymessenger.net/education/news/9663"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[340px] bg-white border-[1px] border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={news1}
                  alt="News 1"
                  className="w-full h-56 object-cover p-5 rounded-lg"
                />
                <div className="p-5">
                  <h2 className="text-2xl font-bold leading-tight mb-4">
                    IIT Hyderabad is Upskilling Learners as Researchers and
                    Entrepreneurs
                  </h2>
                  <p className="text-gray-600 text-lg">
                    The Indian Institute of Technology Hyderabad (IITH) is
                    dedicated to providing research-focused education to...
                  </p>
                </div>
              </a>

              <a
                href="https://www.bd-pratidin.com/last-page/2023/10/21/932161"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[340px] bg-white border-[1px] border-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={news2}
                  alt="News 2"
                  className=" h-56 object-cover p-5"
                />
                <div className="p-5">
                  <h2 className="text-2xl font-bold leading-tight mb-4">
                    Scholarship Offers Higher Education Opportunities at IIT
                    Hyderabad
                  </h2>
                  <p className="text-gray-600 text-lg">
                    The institution is interested in working with the University
                    of Bangladesh.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      

      <Footer />
    </>
  );
};

export default NewsPage;
