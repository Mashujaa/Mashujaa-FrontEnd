/*  codemafiaboss-Positive Vibz Only */
import React from "react";
import Column from "./Column";
import "./AppProgressBar.css";
import Row from "./Row";

export default function AppProgressBar({
  title = "default words",
  percentage = 50,
}) {
  const value = `${100 - percentage}%`;
  return (
    <Column styles={{ alignItems: "start" }}>
      <h3 id="AppProgressBarh3">{title}</h3>
      <Row
        styles={{
          width: "100%",
          height: "30%",
          //   backgroundColor: "grey",
          justifyContent: "start",
        }}
      >
        <div className="wrapper" style={{ width: "70%" }}>
          <div className="back">
            <div className="front" style={{ right: `${value}` }}></div>
          </div>
        </div>
        <h2 id="AppProgressBarh2" style={{ color: "black", marginLeft: "10%" }}>{percentage}%</h2>
      </Row>
    </Column>
  );
}
