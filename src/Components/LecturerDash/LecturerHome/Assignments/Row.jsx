/* codemafiaboss-positive Vibz only */
import React from "react";
import "./Row.css";

export default function Row(props) {
  return (
    <div className="Row" style={props.styles}>
      {props.children}
    </div>
  );
}
