/*  codemafiaboss-Positive Vibz Only */
import React from "react";
import "./AppCard.css";
import Column from "./Column";

export default function AppCard({ children, styles, columnStyles }) {
  return (
    <div className="AppCard" style={{ ...styles }}>
      <Column style={{ ...columnStyles }}>{children}</Column>
    </div>
  );
}
