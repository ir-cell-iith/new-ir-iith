
import React from "react";
import { isMobile } from "react-device-detect";
import {
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";

import NavBar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import Footer from "../components/footer";

const opportunities = [
  {
    title: "Raman Charpak Fellowship Program 2023",
    link: "/ramanChaprak",
  },
  {
    title:
      "Ohio State University's Research Internship for Young Academics (RIYA)",
    link: "/ohioState.html",
  },
  {
    title: "Swiss Government Excellence Scholarships 2024-2025",
    link: "/swissGov.html",
  },
  {
    title:
      "France Excellence Charpak Exchange Scholarship 2024 (Spring Session)",
    link: "/franceExchange.html",
  },
  {
    title:
      "FICORE - University of Helsinki Competition for Students on Environmental Sensing",
    link: "/helsinki.html",
  },
];

export default function Opportunity() {
  return (
    <>
      {isMobile ? <MobileNavbar /> : <NavBar />}

      <Box
        maxW="1000px"
        mx="auto"
        my={10}
        px={5}
      >
        <Text
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mb={8}
        >
          Opportunities
        </Text>

        <VStack spacing={5} align="stretch">
          {opportunities.map((item, index) => (
            <Box
              key={index}
              p={6}
              bg="white"
              borderRadius="12px"
              boxShadow="lg"
              transition="0.2s"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "xl",
              }}
            >
              <a
                href={item.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Text
                  fontSize="xl"
                  fontWeight="600"
                  textAlign="center"
                >
                  {item.title}
                </Text>
              </a>
            </Box>
          ))}
        </VStack>
      </Box>

      <Footer />
    </>
  );
}

