import React from "react";
import { ReactComponent as TemplateLogo } from "../images/Icon-templates.svg";
import FeatherIcon from "../images/Feather.jpg";
import "../styles/Side.css";

function Side() {
  return (
    <div className="side">
      <div className="side__head">
        <img className="side__feather" src={FeatherIcon}></img>
      </div>
      <div className="side__color"></div>
      <div className="side__body">
        <TemplateLogo />
      </div>
    </div>
  );
}

export default Side;
