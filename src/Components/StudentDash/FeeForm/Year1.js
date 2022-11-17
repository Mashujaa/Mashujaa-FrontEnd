import React from "react";
import "./Year1.css";
const Year1 = () => {
  return (
    <div className="FeeStatementDetails">
      <div className="Year1">
        <h4>YEAR 1 SEMESTER 1</h4>
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
          <td>22.10.2020</td>
          <td>KCB Bank</td>
          <td>0.00</td>
          <td>22,720.00</td>
        </tr>
        <tr>
          <td>24.10.2020</td>
          <td>STANDARD INVOICE</td>
          <td>22,720.00</td>
          <td>0.00</td>
        </tr>
        </tbody>
      </table>
      <div className="Year1">
        <h4>YEAR 1 SEMESTER 2</h4>
      </div>
      <table>
        <thead>
          <tr className="tableTitles">
            <th >Date</th>
            <th>Description</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>22.10.2021</td>
          <td>KCB BANK FEES</td>
          <td>0.00</td>
          <td>15000.00</td>
        </tr>
        <tr>
          <td>25.10.2021</td>
          <td>STANDARD INVOICE</td>
          <td>15000.00</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td>24.10.2020</td>
          <td>HELB BATCH 000347KL44</td>
          <td>0.00</td>
          <td>4000.00</td>
        </tr>
        <tr>
          <td>24.10.2020</td>
          <td> INVOICE ADJUSTMENT</td>
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

export default Year1;
