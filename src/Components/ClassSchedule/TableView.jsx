import React from "react";
import Row from "./Row";
import Column from "./Column";
import TableBox from "./TableBox";

export default function TableView() {
  return (
    <Column 
    styles={{ 
      width: "100%",
      height: "100%"
    }}
    >
      <Row >
        <Column styles={{ width: "0%"}}></Column>
        <Column styles={{ width: "90%" }}>
          <TableBox />
        </Column>
      </Row>
    </Column>
  );
}
