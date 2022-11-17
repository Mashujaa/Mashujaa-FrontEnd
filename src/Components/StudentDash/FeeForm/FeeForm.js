import React, { useState } from "react";
import Year1 from "./Year1";
import Year2 from "./Year2";
import Year3 from "./Year3";
import Year4 from "./Year4";
import "./FeeForm.css";

const FeeForm = () => {
  const [clicked, setClicked] = useState("");
  // const [currentYear, setCurrentYear] = useState([1, 2, 3]);

  const handleClick = (event) => {
    if(clicked === event.target.innerText){
      setClicked("");
    }else{
      setClicked(event.target.innerText);
    }
    ;
  };

  const yearsDisplay = [1, 2, 3].map(year =>{
    return(
      <p key={year} onClick={handleClick}>Year {year}</p>
    );
})

  return (
    <div className="FeeContainer">
      <div className="FeeStatementFeeStructureContainer">
        <div className="FeeStatement">
          <h2>Fee Statement</h2>
          <div className="FeeStatementInput">
            <div className="StudentName">
              <label>STUDENT NAME : </label>JOHN DOE
            </div>
            <div className="StudentRegistration">
              <label>REGISTRATION NUMBER:</label>MC 301/3145/2020
            </div>
            <div className="Programme">
              <label>PROGRAMME :</label>BACHELOR OF SCIENCE IN MECHANICAL
              ENGINEERING
            </div>
            <div className="Department">
              <label>DEPARTMENT :</label> ENGINEERING
            </div>
            <div className="Class">
              <label>CLASS : </label>SC212/S/2020
            </div>
          </div>
        </div>
        <div className="FeeStatementStudentDetails">
          <div className="FeeStatementStudentDetailsInput">
            <div className="Admission">
              <label>ADMISSION YEAR :</label> 2020
            </div>
            <div className="Year">
              <label>YEAR OF STUDY : </label>YEAR 3
            </div>
            <div className="SchoolFaculty ">
              <label>SCHOOL:</label>SCHOOL OF ENGINEERING
            </div>
            <div className="StudentType">
              <label>STUDENT TYPE :</label>GOVERNMENT SPONSORED
            </div>
            <div className="Term ">
              <label>TERM: </label>SEMESTER 2
            </div>
            <div className="Session">
              <label>SESSION :</label> YEAR 3 SEMESTER 2
            </div>
          </div>
        </div>
      </div>
      <div className="FeeStructure">
        {/* <h4>Fee Structure</h4> */}
        <div className="FeeStructurStudentDetails"></div>
        <div className="FeeStructureAcademicYear">
          <h5>ACADEMIC YEAR</h5>
          {yearsDisplay}
          {clicked === "Year 1" && (
            <h4>
              <Year1 />
            </h4>
          )}
          {clicked === "Year 2" && (
            <h4>
              <Year2 />
            </h4>
          )}
          {clicked === "Year 3" && (
            <h4>
              <Year3 />
            </h4>
          )}
          {clicked === "Year 4" && (
            <h4>
              <Year4 />
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeeForm;
