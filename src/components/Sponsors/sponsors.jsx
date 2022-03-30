import React from "react";
import "./sponsors.scss";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {SOCIALS} from "../../Module/General";

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="Limbo hacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring? </h3>
      <div className="sponsor_button_strip">
        <a href="https://www.gofundme.com/f/donate-to-support-youth-in-robotics">
        <Btn className="sponsor_btn" type="Go Fund Me" overlay="Fund Us" />
        </a>
        <a href="https://docs.google.com/spreadsheets/d/18jNzWtXe830Clv4QDvzpHGL6KatajCeMBhL5QdmMng4/edit?usp=sharing">
        <Btn ClassName="sponsor_btn" type="Parts List" overlay="Supply Us"/>
        </a>
      </div>{" "}
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
