import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import {TOP_SECTION, SOCIALS} from "../../Module/General";

function Btn(props) {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico=""
            class="join_disco"
            type="Join our discord"
            overlay="Joint our discord"
          />
        </a>
      </div>
      {/* This is judges application button */}
      <a href={TOP_SECTION.JUDGES_FORM_LINK}>
        {" "}
        <Btn class="sponsor_btn" type="Join Team" overlay="Join Team" />
      </a>

      <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
        {" "}
        <Btn class="register" type="Mentor" overlay="Mentor" />
      </a>
    </div>
  );
}

export {Btn, Myinfo};
