/*  codemafiaboss-Positive Vibz Only */
import React from "react";
import "./componentStyles/AppCard.css";
import Column from "./componentStyles/Column";

export default function AppCard({ children, styles, columnStyles }) {
  return (
    <div className="AppCard" style={{ ...styles }}>
      <Column style={{ ...columnStyles }}>{children}</Column>
    </div>
  );
}
