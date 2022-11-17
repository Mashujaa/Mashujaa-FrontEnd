import React from "react";
// import FeeForm from "./Fee/FeeForm";
import "./Year2.css";
const Year3 = () => {
  return (
    <div className="FeeStatementDetails">
      <div className="Year1">
        <h4>YEAR 3 SEMESTER 1</h4>
      </div>
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Debit</th>
          <th>Credit</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>22.09.2022</td>
          <td>EQUITY BANK FEES</td>
          <td>0.00</td>
          <td>1O,000.00</td>
        </tr>
        <tr>
          <td>25.10.2022</td>
          <td>STANDARD INVOICE</td>
          <td>10,000.00</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td>27.10.2022</td>
          <td>KCB BANK FEES</td>
          <td>0.00</td>
          <td>1,000.00</td>
        </tr>
        <tr>
          <td>24.10.2020</td>
          <td>HELB BATCH 000347KL44</td>
          <td>0.00</td>
          <td>4000.00</td>
        </tr>
        <tr>
          <td>24.10.2020</td>
          <td>MPESA</td>
          <td>4000.00</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td>TOTAL</td>
          <td> </td>
          <td></td>
          <td>19,0000.00</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Year3;
