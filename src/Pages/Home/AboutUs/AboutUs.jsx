import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../../Components/Container/Container";
import logo from "../../../assets/logo/Logo_Test.jpg";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import Reavel from "../../../Components/Reveal/Reavel";
import { FaUsers, FaChartLine, FaTrophy, FaDumbbell, FaBrain } from 'react-icons/fa'; // Add icons

const AboutUs = () => {
  return (
    <div
      style={{ backgroundColor: "#01070f" }}
      className="dark:bg-gray-700 pb-10 lg:pb-20"
      id="aboutus"
    >
      <SectionHeader heading={"About Us"} />
      <Container>
        <div className="grid grid-cols-1 gap-10">
          <FadeInAnimation>
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10">
              <div>
                <img
                  className="md:max-w-md max-w-sm rounded-xl shadow-lg"
                  loading="lazy"
                  src={logo}
                  alt=""
                />
              </div>
              <div className="text-center lg:text-left">
                <Reavel>
                  <p className="dark:text-white text-white text-lg mb-4">
                    Welcome to Western Cricket Academy, where passion for cricket meets professional training! Located in the heart of London, Ontario, our academy is dedicated to nurturing young talent, enhancing skills, and promoting the love for cricket across all age groups.
                  </p>
                </Reavel>
                <Reavel>
                  <p className="dark:text-white text-white text-lg mb-4">
                    At Western Cricket Academy, we believe in developing players both on and off the field. Our experienced coaches are committed to providing top-tier training, personalized guidance, and fostering a competitive spirit in a fun and inclusive environment. Whether you’re a beginner eager to learn the fundamentals or an experienced player looking to refine your techniques, we have the right programs to suit your needs.
                  </p>
                </Reavel>
                <Reavel>
                  <p className="dark:text-white text-white text-lg font-semibold mb-2">
                    Our academy offers:
                  </p>
                  <ul className="dark:text-white text-white list-disc pl-5 space-y-2">
                    <li className="flex items-start">
                      <FaUsers className="text-xl mr-2" />
                      Youth Development Programs: Tailored training for young aspiring cricketers.
                    </li>
                    <li className="flex items-start">
                      <FaChartLine className="text-xl mr-2" />
                      Advanced Coaching: Skill-building sessions for intermediate and advanced players.
                    </li>
                    <li className="flex items-start">
                      <FaTrophy className="text-xl mr-2" />
                      Team Tournaments: Opportunities to participate in local, regional, and provincial level tournaments.
                    </li>
                    <li className="flex items-start">
                      <FaDumbbell className="text-xl mr-2" />
                      Fitness & Conditioning: Comprehensive fitness programs to boost performance.
                    </li>
                    <li className="flex items-start">
                      <FaBrain className="text-xl mr-2" />
                      Mental Wellness: We are proud to contribute to the growing cricket community in Canada, helping players achieve their personal best while fostering a strong sense of teamwork and sportsmanship.
                    </li>
                  </ul>
                  <p className="dark:text-white text-white text-lg mb-4">
                    Join us at Western Cricket Academy and be part of a community where every player’s journey to greatness is supported.
                  </p>
                </Reavel>
              </div>
            </div>
          </FadeInAnimation>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
