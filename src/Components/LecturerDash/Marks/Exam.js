import React, { useState } from "react";
import "./Exam.css";

const Exam = () => {
  const [unit, setUnit] = useState("selectUnit");

  const handleOnChange = (e) => {
    setUnit(e.target.value);
  };
  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    unit === "selectUnit"
      ? (result = "select the Unit")
      : (result = makeFirstLetterCapital(unit));
    return result;
  };

  const studentsMarks = [
    {
        studentName: "Grace Njeri",
        studentCat1: 10,
        studentCat2: 10,
        studentCat3: 10,
        studentAssignemt: 10,
        studentExamination: 70,
    },
    {
        studentName: "Naomi Sherry",
        studentCat1: -1,
        studentCat2: -1,
        studentCat3: -1,
        studentAssignemt: -1,
        studentExamination: -1,
    },
    {
        studentName: "Mercy Masika",
        studentCat1: -1,
        studentCat2: -1,
        studentCat3: -1,
        studentAssigment: -1,
        studentExamination: -1,
    }
]

  const unitData = [
    "SCS 200: Business Intelligence",
    "SIT 400: DBMS",
    "AMM 101: Permuatations",
    "SCS 402: Janes' Machine Learning and AI",
    "AMM 202: Calculus 1"
  ]

  const selectData = unitData.map(unit =>{
    return(
      <option key={unit} value={unit}>{unit}</option>

    )
  })
  const tableData = studentsMarks.map(student =>{
      return(
        <tbody key={student.studentName}>
            <tr>
              <td>{student.studentName}</td>
              <td>CAT 1</td>
              <td>CAT 2</td>
              <td>CAT 3</td>
              <td>Assignment</td>
              <td>Examinations</td>
            </tr>
              <tr>
              <td></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            </tbody>
      );
  })

  return (
    <div>
      <div className="listbox">
        <div className="Heading">
          <h1> {renderResult()} </h1>{" "}
        </div>
        <select
          name="Unitslist"
          id="Unitslist"
          value={unit}
          onChange={handleOnChange}
        >
          <option value="select The Unit">select The Unit</option>
          {selectData}
        </select>

        <table>
          {tableData}
        </table>
      </div>
    </div>
  );
};

export default Exam;
