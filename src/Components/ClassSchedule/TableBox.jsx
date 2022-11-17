//codemafiaboss-positive Vs only
import React from "react";
import {
  // getClassesAt,
  getTimeIntervals,
} from "./TableData";
import Row from "./Row";
import Column from "./Column";
import "./GeneralStyles.css";
import TheTableItems from "./TheTableItems";
// import Background from "../../../../Pictures/pattern.png";

export default function TableBox() {
  const times = getTimeIntervals();
  // console.log(getClassesAt("7am"));
  return (
    <Column
    styles={{
      position: "relative",
      width: "100%",
      height: "100%",
      // paddingBottom: "10%",
    }}
  >
    
    <Row styles={{ height: "10px" }}>
      <h1>My Class Schedule</h1>
    </Row>
    <Row
      styles={{
        paddingLeft: "100px",
        height: "70px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {times.map((time) => {
        // console.log("the day:.... ", time);
        const timeItem = <h2 key={time} style={{ width: "20%" }}>{time}</h2>;
        return timeItem;
      })}
    </Row>
    <TheTableItems />
  </Column>

  );
}
