import React from "react";

function Template(props) {
  return (
    <div>
      <div className={props.basetemplate}>
        <div className="headingContainer">
          <div className="heading">{props.heading}</div>
        </div>
        <div className="subheadingContainer">
          <div className="subheading">{props.subheading}</div>
        </div>
        <div className="graphicContainer">
          <img className="graphic" src={props.graphic} />
        </div>
      </div>
      <button className="viewFull">Click to view full size</button>
    </div>
  );
}

export default Template;
