/*  codemafiaboss-Positive Vibz Only */
import React from "react";
import "./AppProgressBar.css";

export default function Milestone({
  unit = "SIT 202- Bla bla bla",
  doneUnits = 5,
  totalUnits = 60,
}) {
  const coverage = `${doneUnits} out of ${totalUnits}`;
  return (
    <div className="Milestone" style={{ height: "25%", width: "100%" }}>
      <h3>{unit}</h3>
      <h3 style={{ color: "black" }}>{coverage}</h3>
    </div>
  );
}
