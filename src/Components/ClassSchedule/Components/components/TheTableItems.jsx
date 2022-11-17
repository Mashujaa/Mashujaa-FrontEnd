import React from "react";
import "./componentStyles/GeneralStyles.css";
import Row from "./componentStyles/Row";
import Column from "./componentStyles/Column";
import {
  getClassesAt,
  getDaysOfTheWeek,
} from "../../TableData/TableData";

export default function TheTableItems() {
  const days = getDaysOfTheWeek();
  let counter = 0
  return (
    <Row styles={{ 
      height: "100%", border: "2px solid black", padding: "0px"}}>
      <Column styles={{ width: "20%" }}>
        {days.map((day) => {
          const DayItem = (
            <h2
            key={day}
              style={{
                width: "60%",
                height: "10%",
                display: "flex",
                paddingLeft: "10%",
                alignItems: "center",
                textAlign: "start",
              }}
            >
              {day}
            </h2>
          );
          return DayItem;
        })}
      </Column>
      <Column styles={{ width: "20%" }}>
        {getClassesAt("7am").map((session) => {
              counter = counter + 1;

          // console.log("the day:.... ", session);
          const DayItem = (
            <h3
            key={counter}
              style={{
                width: "60%",
                height: "10%",
                display: "flex",
                paddingLeft: "0%",
                alignItems: "center",
                textAlign: "start",
              }}
            >
              {session ? session : ""}
            </h3>
          );
          return DayItem;
        })}
      </Column>
      <Column styles={{ width: "20%" }}>
        {getClassesAt("10am").map((session) => {
              counter = counter + 1;
          const DayItem = (
            <h3
            key={counter}
              style={{
                width: "60%",
                height: "10%",
                display: "flex",
                paddingLeft: "10%",
                alignItems: "center",

                textAlign: "start",
              }}
            >
              {session ? session : ""}
            </h3>
          );
          return DayItem;
        })}
      </Column>
      <Column styles={{ width: "20%" }}>
        {getClassesAt("1pm").map((session) => {
          // console.log("the day:.... ", session);
          counter = counter + 1;
          const DayItem = (
            <h3
              key={counter}
              style={{
                width: "60%",
                height: "10%",
                display: "flex",
                paddingLeft: "10%",
                alignItems: "center",

                textAlign: "start",
              }}
            >
              {session ? session : ""}
            </h3>
          );
          return DayItem;
        })}
      </Column>
      <Column styles={{ width: "20%" }}>
        {getClassesAt("4pm").map((session) => {
          counter = counter + 1;
          const DayItem = (
            <h3
              key={counter}
              style={{
                width: "60%",
                height: "10%",
                display: "flex",
                paddingLeft: "10%",
                alignItems: "center",

                textAlign: "start",
              }}
            >
              {session ? session : ""}
            </h3>
          );
          return DayItem;
        })}
      </Column>
    </Row>
  );
}
