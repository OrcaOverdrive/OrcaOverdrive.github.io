import React from "react";
import "./media.css";
import {SOCIALS} from "../../Module/General";

export default function Media() {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <i class="fab fa-3x fa-discord"></i>
        </a>
      </div>
    </div>
  );
}
