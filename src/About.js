import React, { useState } from "react";
import "./About.css";
import bob from "./assets/hand-holding-phone.webp";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function About() {
  const firstTimeLogin = useSelector((state) => state.states.firstTimeLogin);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const closeOtherCards = (cardNumber) => {
    if (cardNumber !== 1) setIsOpen(false);
    if (cardNumber !== 2) setIsOpen2(false);
    if (cardNumber !== 3) setIsOpen3(false);
  };

  return (
    <div className="about">
      {/* Left Side */}
      <div className="split left">
        <div className="about-center">
          <div className="about-title">About Us.</div>
          <p>
            Expex is a revolutionary financial management platform that merges
            all of your financial accounts, regardless of the institution or
            type, into a single, secure account.
          </p>
          <p>
            With Expex, you can get a complete, comprehensive view of your
            financial situation, track your spending, and make informed
            investment decisions to plan for your financial future.
          </p>
          <p>
            Our secure platform allows you to connect all of your accounts,
            including checking and savings accounts, credit cards, loans,
            investments, and more, granting a complete yet simple view of your
            financial situation.
          </p>

          <div className="about-title3">Project Timeline.</div>
          <Timeline position="alternate">
            <TimelineItem className="full-timeline">
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Concept Development</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>FrontEnd Skeleton</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Firebase User Auth</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Plaid API & Database Connection</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Redux Integration</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Tile Design Implementation</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Tile Information Population</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Balance Tab Implementation</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
              </TimelineSeparator>
              <TimelineContent>
                Financial Planner Algorithms Generation
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* Right Side */}
      <div className="split right">
        <Link to="/overview">
          <div className="close-cont">
            <CloseIcon
              className="close"
              fontSize="large"
              style={{ color: "var(--text-color)" }}
            />
          </div>
        </Link>

        <img className="hand" src={bob} alt="hand holding phone" />

        {firstTimeLogin && (
          <div className="continue" onClick={() => navigate("/linkAccount")}>
            continue →
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
