// import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import bgiith from "../components/images/bg_life_iith.png";
import charminar from "../components/images/6f049-hyderabad1.png";
import { isMobile } from 'react-device-detect';
import MobileNavbar from '../components/mobileNavbar';
import life from "../components/downloadables/Group244.pdf";

export default function LifeAtIITH() {
    return (
        <div className="h-full w-full">
            
            
            {/* Background Image */}
            <div className="relative">
                <img src={bgiith} alt="Life at IITH" className="w-full h-screen object-cover absolute" />
                
                <h1 className="text-white text-4xl md:text-6xl font-bold relative" style={{marginTop:"", color:"black", top:"5vh", left:"5vw"}}>Life at IITH</h1>
                
            </div>
            <div style={{position:"sticky", top:"0", marginTop:"100vh"}}>
                 {isMobile ? <MobileNavbar /> : <NavBar />}
                
            </div>

            {/* Hyderabad & Telangana Section */}
            <section className="py-8 px-4 my-16 md:px-16 lg:px-32" style={{marginTop:"0vh"}}>
                <h2 className="text-red-600 text-[64px] text-center font-semibold my-4">Hyderabad & Telangana</h2>
                <p className="text-gray-700 text-[16px] mb-4">
                    Telangana, the 29th state of India, was formed on 2nd June 2014, with Hyderabad as its capital.
                    Covering 1,14,840 sq. km and housing 3,52,69,757 people, it is the twelfth largest and most populous state.
                    Known for its distinctive culture, unique cuisine, and rich history, Telangana's language, 
                    Telugu, signifies the state's rich heritage, preserved by the Godavari and Krishna rivers.
                </p>
                <p className="text-gray-700 text-[16px]-lg">
                    As a tourist destination, it offers attractions like Charminar, Birla Mandir, and Warangal Fort.
                    The economy is driven by agriculture, with rice as the major crop, and a thriving IT and startup sector 
                    with 68 special economic zones. Telangana's foundation is built on literacy, social justice, and development.
                </p>
            </section>

            {/* Charminar Image */}
            <div className="py-8">
                <img src={charminar} alt="Charminar" className="w-full h-80 object-cover grayscale" />
            </div>

            <div className='flex flex-col justify-center items-center'>
                <a href={life} download style={{fontSize:"3rem", color:"#1d1d1d", backgroundColor:"#F73A48", fontWeight:"700", padding:"10px", borderRadius:"15px"}}>Download Life Brochure</a>
            </div>

            <br /><br /><br />
            <Footer />
        </div>
    );
}
// Old site life at iith
{/* <section className="defaultSection">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="sectionHeading">
          <h2>LIFE AT IITH</h2>
          <hr />
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="subSectionHeading">
          <h3>Hyderabad and Telangana</h3>
          <hr />
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="col-lg-6 mx-auto">
          <div className="imageSection d-flex align-items-center justify-content-center">
            <img src="./assets/photos/6f049-hyderabad.webp" />
          </div>
        </div>
        <div className="textBox">
          Telangana, the 29th state of India, is one of the youngest states of
          the country. Carved out of Andhra Pradesh, this state was formed on
          2nd June 2014, with Hyderabad as its capital. The state has an area of
          1,14,840 sq km and population of 3,52,86,757, which makes it the
          twelfth largest and twelfth most populous state of India. This state
          is known for its distinctive culture, unique cuisine and rich History.
          <br />
          <br />
          This Telugu speaking state is situated in the southern part of the
          country with two major rivers Godavari and Krishna passing through.
          The state makes a perfect tourist destination with its diverse and
          unique attractions like Charminar, Birla Mandir, Warangal fort and so
          on. <br />
          <br />
          The state’s economy is majorly driven by agriculture and Farming with
          rice being its major food crop. Alongside that, Telangana is also
          considered as a booming state for IT and startups with 68 special
          economic zones. The aspirational foundation of Telangana lies on
          Liberty, Social Justice and Development.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="subSectionHeading">
          <h3>IIT Hyderabad</h3>
          <hr />
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="col-lg-6 mx-auto">
          <div className="imageSection">
            <img src="./assets/photos/4.png" />
          </div>
        </div>
        <div className="textBox">
          Indian Institute of technology, Hyderabad (IITH) is a second
          generation IIT started in 2008. Located in Kandi Village of Sanga
          Reddy district, Telangana, IITH is ranked among top 10 institutions in
          India for engineering (NIRF), making it one of the finest schools for
          science and technology in the Country. <br />
          <br />
          The campus is spread across 576 acres (234 ha) and is designed by the
          renowned architects, Prof. Christopher Charles Benninger of Pune and
          ARCOP of New Delhi. IITH’s special relationship with Japan is
          reflective on its campus architecture. <br />
          <br />
          IITH emphasizes on modern and interdisciplinary academia, with courses
          diversifying from engineering, Science to Design and Liberal arts to
          name a few. The foundation of IITH lies on research and innovation
          with vibrant research culture including innovation centers and
          incubators to promote entrepreneurship.
        </div>
        <div className="row mx-auto d-flex align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="imageSection">
              <img src="./assets/photos/6.jpg" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="imageSection">
              <img src="./assets/photos/7.jpg" style={{ maxWidth: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="subSectionHeading">
          <h3>Academic life</h3>
          <hr />
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Library</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/asdfasdfsdafsdafsd.png" />
            </div>
          </div>
          The IITHLibrary plays a vital role in supporting the mission of the
          IITH by helping students, faculty, and staff gain the skills and
          knowledge they need to access and create information effectively. To
          achieve this, the library offers a range of resources and services,
          including research support and the creation of new knowledge. As part
          of this commitment, we have launched the PRAGYAAN (PRAUDYOGIKI GYAAN
          NIDHI) one million books project to develop a library collection in
          STEM(Science, technology, engineering, and mathematics) and Humanities
          subjects.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Cultural Council</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/IMG_0142.JPG" />
            </div>
          </div>
          They are a bunch of motivated individuals who believe that a college
          should have its equal share of fun &amp; frolic along with the case
          studies. Our is an attempt to capture the vibrant persona of the
          students by offering them a platform to showcase their inner
          musicians, dancers, actors, painters, writers, photographers, and
          dreamers. They as a cultural team are responsible for keeping the
          spirits alive on the campus by organizing the multitude of cultural
          activities around the year. Be it a celebration of almost every
          festival or frequent open-air jamming sessions they make sure that
          every event lasts in your memory for a lifetime. Clubs under the
          Cultural Council are Infocus, Behind the lens, Vibes, Rang de manch,
          Gesture Shuffle, LitSoc.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Sports Council</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/volleyball_2.jpg" />
            </div>
          </div>
          IITH's sports is one of the more brilliant facets of this campus life.
          Our fiery enthusiasm and zeal are embodied in our motto, "the name on
          the front of a jersey is more important than the name on the back".
          IITH offers plenty of sports facilities, which include a common
          football and cricket ground, a hockey ground, a well equipped swimming
          pool, floodlit courts for basketball, badminton, tennis, and multiple
          courts for volleyball. Facilities for indoor games like table tennis,
          caroms, and chess are also available.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Media Council</b> <br /> <br />
          The media council of IITH was formed in May 2014 and is a student
          council that helps take IITH to every individual in and outside IITH.
          They are involved in publicizing our institute through social media,
          social events, etc. The Media Council is currently engaged in various
          newsletters of IITH like the academic newsletter, placement newsletter
          with the guidance of different faculties, and PR Office of IITH.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Scitech Council</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/chess.jpg" />
            </div>
          </div>
          A Science &amp; Technology club to provide a platform to technocrats
          to explore their ideas and bring in new innovations.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Mess Council</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/13495404_705004842973056_834034876648450714_o.jpg" />
            </div>
          </div>
          Mess monitoring council, also known as MMC, assists in the robust
          functioning of mess in coordination with mess wardens and HCU. Headed
          by the mess secretary, it represents the students' voice. MMC is
          responsible for menu preparation, mess inspection, and the grievance
          cell. It also regularly inspects the operations to look for various
          faults and ensure that the food quality is maintained at IITH. It
          strives to ensure that all the students have enjoyable and healthy
          meals at their second home.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="subSectionHeading">
          <h3>Hostel life</h3>
          <hr />
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Accommodation</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/accomodation.webp" />
            </div>
          </div>
          Accommodations at IITH are excellently comfortable for students. The
          hostels are designed with radiant cooling technology to combat the
          summertime heat. Every student is given a single room equipped with
          the necessities including a bed, a wardrobe, a study table and a
          chair. Washing machines are available on each floor to be shared among
          the floormates. There are two restrooms and two bathrooms in each pod,
          to be shared among 8 people. The pods are architectured in a society
          like manner to get along well with each other and stay in touch,
          creating a home like environment away from home.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Dining</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/dining.jpg" />
            </div>
          </div>
          All of the hostels at IITH share two common dining halls namely, UDH
          and LDH, also new mess building is under construction. The dining
          halls serve both north Indian and south Indian cuisine (You can also
          buy extras if you wish to). The Mess secretary and the MMC student
          representatives periodically check the food's quality and hygeine.
          Also we have special dinner every month and the menu is revised every
          month according to the feedback given by the students.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Festivals and Celebrations at IITH</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img
                src="./assets/photos/festival.JPG"
                style={{ maxWidth: "80%" }}
              />
            </div>
          </div>
          Every March, IIT Hyderabad holds Elan &amp;nVision, a techno-cultural
          festival where students can participate and take part in a range of
          events. Milan, The General Championship, mostly held around September,
          is a competition where every hostel pits itself against the others in
          a range of sporting, technological, and cultural events in an effort
          to come out on top. All the festivals are celebrated with equal
          enthusiasm to portray the huge cultural diversity of India yet
          remarking the unity among the students. In addition to this,
          international festivals and important days are also celebrated with
          equal enthusiasm along with our international students respecting all
          cultures worldwide.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Sports and Recreation</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/sports.jpg" />
            </div>
          </div>
          You can explore and participate in a variety of sports, including
          football, cricket, squash, volleyball, basketball, badminton and many
          more. The recreational and friendship rooms, which are located between
          hostel buildings, provide a great place to socialize with people other
          than one's batchmates while playing games like chess, carrom, and
          other activities. A new sports complex with more amenities and
          facilities is under construction and is expected to be ready soon.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Hospital and Medical Care</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/hospital.jpeg" />
            </div>
          </div>
          You can visit the hospital 24X7 in campus for any medical care, where
          prescriptions are free and medicines are offered at a discount of 80%
          in the hospital's medical store ( You need to carry a medical booklet
          which you can get from the hostel office). You can also dial +91
          8331036100 to call for an ambulance. In case of some serious issues
          you are referred to the continental hospital, hyderabad, where the
          bill amount is adjusted with the medical insurance provided by the
          institute.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Grocery shopping</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/sampoorna.jpg" />
            </div>
          </div>
          Sampoorna, the supermarket of IITH, is located besides the faculty
          towers where you can get all the basic items, including toiletries,
          snacks, stationary, fruits and vegtables. Also, there is a general
          store besides canteen near hostels, which has all the basic items of
          daily use along with printing facilities.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Canteen and Eatery</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/canteen.jpg" />
            </div>
          </div>
          Vendikins are available on the ground floors of some hostels and on
          different floors of Academic Block, with a variety of drinks and
          snacks. Nescafe and Amul Eatouts are available in the Canteen area,
          along with a wet canteen, bakery shop, juice center and a tea stall.
          Canteens and Eatout places are also there in Academic Blocks Ishthara,
          the food court of IITH has numerous famous Dine in/ Take away stalls
          which also offer delivery till hostels or Academic Blocks, around the
          campus.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Importance and Showcase of Culture</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/culture.jpeg" />
            </div>
          </div>
          Bus stops, canteen are being beautifully painted by our design
          department students making the campus more eye catching beyond its
          amazing architecture.
        </div>
      </div>
      <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="textBox">
          <b>Transport Facilities</b> <br /> <br />
          <div className="col-lg-6 mx-auto">
            <div className="imageSection">
              <img src="./assets/photos/ev.jpg" />
            </div>
          </div>
          EVs and Buses run across the campus through different routes for easy
          travel inside the campus. In addition to it, Sangareddy and Miyapur
          Bus servies are also going to start soon.
        </div>
      </div>
    </div>
  </div>
</section> */}
