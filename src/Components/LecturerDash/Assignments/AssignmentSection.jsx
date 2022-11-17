// codemafiaboss-Positive Vibz Only
import React from "react";
import AppCard from "./AppCard";
import AppProgressBar from "./AppProgressBar";
import Column from "./Column";
import Row from "./Row";
import "./GeneralStyles.css";
import Milestone from "./Milestone";

export default function AssignmentSection() {
  return (
    <Column styles={{ height: "100vh", width: "95%", background: "#EFEFEF" }}>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Assignments
      </h1>
      <Row
        styles={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <AppCard
            styles={{ width: "45%", height: "75%", marginLeft: "20px" }}
          columnStyles={{ textAlign: "start", justifyContent: "start" }}
        >
          <h2 style={{ textAlign: "start" }}>
            Percentage Submission of Assignments
          </h2>
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
        <AppCard
          styles={{
            width: "45%",
            // backgroundColor: "pink",
            height: "75%",
            marginLeft: "20px"
          }}
          columnStyles={{
            textAlign: "start",
            justifyContent: "start",
          }}
        >
          <h2 style={{ textAlign: "start", width: "100%", fontWeight: "bold" }}>
            Student Submissions
          </h2>
          <Milestone
            doneUnits={30}
            totalUnits={60}
            unit="SCS 200: Data Structures and Algorithms"
          />
          <Milestone
            doneUnits={48}
            totalUnits={72}
            unit="SCS 308: Open Source Trends"
          />
          <Milestone doneUnits={100} totalUnits={108} unit="SIT 201: System Analysis" />
        </AppCard>
      </Row>
    </Column>
  );
}
