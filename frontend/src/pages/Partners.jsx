import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
import NavBar from "../components/navbar";
import {
  Box,
  IconButton,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Collapse,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import img1 from "../components/images/partnerhome.png";
import { doctprogram, erasmus, partner } from "../components/partners/data";

import shortcut from "../components/partners/shortcut.png";
import Footer from "../components/footer";

const images = [img1];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const [expandedCard, setExpandedCard] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  let wow = "70vw"
  if (isMobile){
    wow = "90vw"
  }

  return (
    <div>
      <div style={{ position: "static", top: "0", width: "100%", zIndex: "1000" }}>
        {isMobile ? <MobileNavbar /> : <NavBar />}
      </div>
      <br />
      <div className="flex flex-col items-center">
        <img src={shortcut} alt="shortcut" style={{ width: wow, height: "auto" }} />
      </div>
      
      <br /><br />

      <Box backgroundColor="#1D1D1D" padding="20px" marginTop="20px">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          marginBottom="20px"
        >
          Our Partners
        </Text>
        <HStack spacing={4} className="flex flex-wrap justify-center items-center align-middle" style={{width:"80vw", marginLeft:"auto", marginRight:"auto", padding:"2px"}}>
          {partner.map((p, index) => (
            <Box
              key={index}
              width="360px"
              backgroundColor="white"
              borderRadius="8px"
              overflow="hidden"
              boxShadow="md"
              position="relative"
              className="flex flex-col items-center p-5"
              style={{margin:"10px"}}
            >
              <p style={{fontWeight:"700"}}>{p.country}</p>
              <Image
                src={p.image}
                alt={`Partner ${index + 1}`}
                width="100%"
                height="auto"
              />
              <Button
                width="100%"
                onClick={() => toggleExpand(index)}
              
              >
                {expandedCard === index ? (
    <VStack spacing={0} className="flex flex-col items-center justify-center">
      <Text fontSize="sm">Click to See Less</Text>
      <ChevronUpIcon boxSize={5} color="#F73A48" />
    </VStack>
  ) : (
    <VStack spacing={0} className="flex flex-col items-center justify-center">
      <Text fontSize="sm">Click to See More</Text>
      <ChevronDownIcon boxSize={5} color="#F73A48" />
    </VStack>
  )}
              </Button>
              <Collapse
                in={expandedCard === index}
                style={{width:"100%"}}
                startingHeight={0}
              >
                <Box padding="10px" textAlign="left" width="100%">
                    {p.partnership ? (
                      p.partnership.split(",").map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: "6px" }}>
                          <span style={{ marginRight: "8px", flexShrink: 0, color: "#2D3748" }}>•</span>
                          <span style={{ fontSize: "14px", color: "#2D3748", whiteSpace: "pre-line" }}>
                            {item.trim()}
                          </span>
                        </div>
                      ))
                    ) : (
                      <Text fontSize="14px" color="gray.500">Partnership details coming soon</Text>
                    )}
                  </Box>
              </Collapse>
            </Box>
          ))}
        </HStack>

          {/*For other part*/}
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          marginBottom="20px"
        >
          Joint Doctoral Programmes
        </Text>
        <HStack spacing={4} className="flex flex-wrap justify-center items-center align-middle" style={{width:"80vw", marginLeft:"auto", marginRight:"auto", padding:"2px"}}>
          {doctprogram.map((pa, index) => (
            <Box
              key={index}
              width="auto"
              backgroundColor="white"
              borderRadius="8px"
              overflow="hidden"
              boxShadow="md"
              position="relative"
              className="flex flex-col items-center p-5"
              style={{margin:"10px"}}
            >
              <p style={{fontWeight:"700"}}>{pa.country}</p>
              <Image
                src={pa.image}
                alt={`Partner ${index + 1}`}
                width="100%"
                height="auto"
              />
              <Button
                width="100%"
                onClick={() => toggleExpand(index)}
                
              >
               {expandedCard === index? (
    <VStack spacing={0} className="flex flex-col items-center justify-center">
      <Text fontSize="sm">Click to See Less</Text>
      <ChevronUpIcon boxSize={5} color="#F73A48" />
    </VStack>
  ) : (
    <VStack spacing={0} className="flex flex-col items-center justify-center">
      <Text fontSize="sm">Click to See More</Text>
      <ChevronDownIcon boxSize={5} color="#F73A48" />
    </VStack>
  )}
              </Button>
              <Collapse
                in={expandedCard === index}
                startingHeight={0}
                style={{width:"100%"}}
              >
                <Box padding="10px" textAlign="left" width="100%">
                    {pa.partnership ? (
                      pa.partnership.split(",").map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: "6px" }}>
                          <span style={{ marginRight: "8px", flexShrink: 0, color: "#2D3748" }}>•</span>
                          <span style={{ fontSize: "14px", color: "#2D3748", whiteSpace: "pre-line" }}>
                            {item.trim()}
                          </span>
                        </div>
                      ))
                    ) : (
                      <Text fontSize="14px" color="gray.500">Partnership details coming soon</Text>
                    )}
                  </Box>
              </Collapse>
            </Box>
          ))}
        </HStack>


        {/*For erasmus part*/}
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          marginBottom="20px"
        >
          Erasmus+ Programme
        </Text>
        <HStack spacing={4} className="flex flex-wrap justify-center items-center align-middle" style={{width:"80vw", marginLeft:"auto", marginRight:"auto", padding:"2px"}}>
          {erasmus.map((paa, index) => (
            <Box
              key={index}
              width="auto"
              backgroundColor="white"
              borderRadius="8px"
              overflow="hidden"
              boxShadow="md"
              position="relative"
              className="flex flex-col items-center p-5"
              style={{margin:"10px"}}
            >
              <p style={{fontWeight:"700"}}>{paa.country}</p>
              <Image
                src={paa.image}
                alt={`Partner ${index + 1}`}
                width="100%"
                height="auto"
              />
              <Button
                width="100%"
                onClick={() => toggleExpand(index)}
                
              >
               {expandedCard === index ? (
    <VStack spacing={0} className="flex flex-col items-center justify-center">
      <Text fontSize="sm">Click to See Less</Text>
      <ChevronUpIcon boxSize={5} color="#F73A48" />
    </VStack>
  ) : (
    <VStack spacing={0} className="flex flex-col items-center justify-center">
      <Text fontSize="sm">Click to See More</Text>
      <ChevronDownIcon boxSize={5} color="#F73A48" />
    </VStack>
  )}
              </Button>
              <Collapse
                in={expandedCard === index}
                startingHeight={0}
                style={{width:"100%"}}
              >
                <Box padding="10px" textAlign="left" width="100%">
                    {paa.partnership ? (
                      paa.partnership.split(",").map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: "6px" }}>
                          <span style={{ marginRight: "8px", flexShrink: 0, color: "#2D3748" }}>•</span>
                          <span style={{ fontSize: "14px", color: "#2D3748", whiteSpace: "pre-line" }}>
                            {item.trim()}
                          </span>
                        </div>
                      ))
                    ) : (
                      <Text fontSize="14px" color="gray.500">Partnership details coming soon</Text>
                    )}
                  </Box>
              </Collapse>
            </Box>
          ))}
        </HStack>

      </Box>
      <Footer />
    </div>
  );
};

export default Partners;
