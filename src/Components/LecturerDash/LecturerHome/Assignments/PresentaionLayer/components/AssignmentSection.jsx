// codemafiaboss-Positive Vibz Only
import React from "react";
import AppCard from "./AppCard";
import AppProgressBar from "./AppProgressBar";
import Column from "./componentStyles/Column";
import Row from "./componentStyles/Row";
import "./componentStyles/GeneralStyles.css";
// import Milestone from "./Milestone";

export default function AssignmentSection() {
  return (
    <Column styles={{ height: "90vh", width: "100%", background: "#EFEFEF" }}>

      <Row
        styles={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <AppCard
            styles={{ width: "100%", height: "55%", marginLeft: "20px" }}
          columnStyles={{ textAlign: "start", justifyContent: "start" }}
        >
      <h1
        style={{
          textAlign: "center",
          margin: "0"
        }}
      >
        Submission of assignments
      </h1>
        <AppProgressBar
            percentage={50}
            title="SCS 200: Data Structures and Algorithms"
          />
          <AppProgressBar
            percentage={67}
            title="SCS 308: Open Source Trends"
          />
          <AppProgressBar
            percentage={93}
            title="SIT 201: System Analysis"
          />
        </AppCard>
      </Row>
    </Column>
  );
}
