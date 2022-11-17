/* codemafiaboss-positive Vibz only */
import React from "react";
import "./Column.css";

export default function Column(props) {
  return (
    <div className="Column" style={props.styles}>
      {props.children}
    </div>
  );
}
