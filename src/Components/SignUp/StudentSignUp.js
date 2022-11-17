import React , { useState }from "react";
import "./StudentSignUp.css";
import Graphic from "../../Pictures/shujaa.png";
const Form = ({ onRouteChange, http_to_be_used, setUserName, setUserID}) => {

  const [studentBirthDate, setStudentBirthDate] = useState("0-0-0");
  const [studentFName, setStudentFName] = useState("");
  const [studentLName, setStudentLName] = useState("");
  const [studentNationalID, setStudentNationalID] = useState(0);
  const [studentGender, setStudentGender] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStreetAdress, setStudentStreetAddress] = useState("");
  const [studentCity, setStudentCity] = useState("");
  const [studentState_Province, setStudentState_Province] = useState("");
  const [studentPostalCode, setStudentPostalCode] = useState("");
  const [studentID, setStudentID] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentNumber, setStudentNumber] = useState(0);
  // const [studentAuthToken, setStudentAuthToken] = useState("");

  // const [guardianFName, setGuardianFName] = useState("");
  // const [guardianLName, setGuardianLName] = useState("");
  // const [guardianNumber, setGuardianNumber] = useState("");
  // const [guardianEmail, setGuardianEmail] = useState("");
  // const [guardianStudentRelationship, setGuardianStudentRelationship] = useState("");



  
  // const onBirthDateChange = (event) =>{
  //   setBirthDate(event.target.value)
  //   console.log(event.target.value);
  // }

  const onStudentInputChange = (event) =>{
    let inputPlace = event.target.name;
    let inputValue = event.target.value;

    if(inputPlace === "studentFirstName" ){
      setStudentFName(inputValue);
    }else if(inputPlace === "studentLastName"){
      setStudentLName(inputValue)
    }else if(inputPlace === "studentNationalID"){
      setStudentNationalID(Number(inputValue));
    }else if(inputPlace === "studentBirthDate"){
      console.log(inputValue);
      setStudentBirthDate(inputValue);
    }else if(inputPlace === "studentGender"){
      setStudentGender(inputValue);
    }else if(inputPlace === "studentEmailAddress"){
      setStudentEmail(inputValue);
    }else if(inputPlace === "studentStreetAddress"){
      setStudentStreetAddress(inputPlace);
    }else if(inputPlace === "studentCity"){
      setStudentCity(inputValue);
    }else if(inputPlace === "studentState_Province"){
      setStudentState_Province(inputValue);
    }else if(inputPlace === "studentPostalCode"){
      setStudentPostalCode(inputValue);
    }else if(inputPlace === "studentPassword"){
      setStudentPassword(inputValue);
    }else if(inputPlace === "studentID"){
      setStudentID(inputValue);
    }else if(inputPlace === "studentNumber"){
      setStudentNumber(Number(inputValue));
    }
  }

  // else if(inputPlace === "guardianFName"){
  //   setGuardianFName(inputValue);
  // }else if(inputPlace === "guardianLName"){
  //   setGuardianLName(inputValue);
  // }else if(inputPlace === "guardianNumber"){
  //   setGuardianNumber(Number(inputValue));
  // }else if(inputPlace === "guardianEmail"){
  //   setGuardianEmail(inputValue);
  // }else if(inputPlace === "studentGuardianlRelationship"){
  //   setGuardianStudentRelationship(inputValue);
  // }
  // console.log(studentNumber);
//  data.authorisation.token
    const onStudentSignUpSubmit  = () =>{
      console.log("Sending student data");
      fetch(`${http_to_be_used}://mashujaa-oss.herokuapp.com/api/auth/register`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
            password: studentPassword,
            unique_identifier: studentID
        })
    })
    .then(reponse => reponse.json())
    .then(data => {
      // console.log("Register", data);
        fetch(`${http_to_be_used}://mashujaa-oss.herokuapp.com/api/add/student-profile`, {
          method: 'post',
          headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${data.authorization.token}`, 'Accept': 'application/json'}, 
          body: JSON.stringify({
              first_name: studentFName,
              last_name: studentLName,
              national_id: studentNationalID,
              birth_date: studentBirthDate,
              gender: studentGender,
              email_address: studentEmail,
              street_address: studentStreetAdress,
              city: studentCity,
              "state/province": studentState_Province,
              "postal/zipcode": studentPostalCode,
              telephone_number: studentNumber
          })
        })
        .then(reponse => reponse.json())
        .then(data => {
            // setStudentAuthToken(data.authorization.token);
            alert(data.message);
            if(data.message === "Student profile successfully added"){
              setUserName(studentFName, studentLName);
              setUserID(studentID);
              onRouteChange("studentdash");
            }
            // console.log("Profile", data);
        }).catch(error =>{
          console.log("profile", error);
        })
          // alert(data.message);
    }).catch(error =>{
      console.log("Register", error);
    })

    return 0;

    }
  return (

    <div className="signUpContainer">
      <div className="signUp">
      <button onClick={() => onRouteChange("signinhome")}>Back</button>
        <div className="signUpIntro">
          <img src={Graphic} alt="Logo" />
          <h1>Student Registration Form</h1>
          <p>To regsiter for an Account, kindly fill the form below</p>
        </div>
        <div className="signUpStudent">
          <p>Student Information</p>
          <div className="signUpStudentName">
            <h4>Name</h4>
            <div className="signUpStudentNameInput">
              <input type="text" placeholder="First Name" name="studentFirstName" onChange={onStudentInputChange} />
              <input
                className="signUpStudentNameInputLastName"
                type="text"
                placeholder="Last Name"
                name="studentLastName"
                onChange={onStudentInputChange} 
              />
            </div>
          </div>
          <div className="signUpStudentID">
            <h4>National ID</h4>
            <div className="signUpStudentIDInput">
              <input type="number" placeholder="National ID"  name="studentNationalID" onChange={onStudentInputChange} />
            </div>
          </div>
          <div className="signUpStudentBirth">
            <h4>Birth Date (D-MM-YY)</h4>
            <div className="signUpStudentBirthInput">
              <input type="text" placeholder="Day" value={studentBirthDate.split("-")[2]} readOnly/>
              <input type="text" placeholder="Month" value={studentBirthDate.split("-")[1]} readOnly/>
              <input type="text" placeholder="Year" value={studentBirthDate.split("-")[0]} readOnly/>
              <input className="dateInput" onChange={onStudentInputChange} type="date" name="studentBirthDate"/>
            </div>
          </div>
          <div className="signUpStudentGender">
            <h4>Gender</h4>
            <div className="signUpStudentGenderInput">
              <select name="studentGender" id="StudentGender" onChange={onStudentInputChange} >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="signUpStudentEmailAddress">
            <h4>EmailAddress</h4>
            <div className="signUpStudentEmailAddressInput">
              <input type="text" placeholder="EmailAddress" name="studentEmailAddress" onChange={onStudentInputChange} />
            </div>
          </div>
          <div className="signUpStudentID">
            <h4>Phone Number</h4>
            <div className="signUpStudentIDInput">
              <input type="number" placeholder="Your telephone number" name="studentNumber" onChange={onStudentInputChange} />
            </div>
          </div>
          <div className="signUpStudentAddress">
            <h4>Street Address</h4>
            <div className="signUpStudentAddressInput">
              <input type="text" placeholder="Address" name="studentStreetAddress" onChange={onStudentInputChange} />
            </div>
          </div>
          <div className="signUpStudentStreetAddress">
            <h4>City</h4>
            <div className="signUpStudentStreetAddresscity">
              <input type="text" placeholder="City" name="studentCity" onChange={onStudentInputChange} />
              <input
                className="signUpStudentStreetAddressState"
                type="text"
                placeholder="State/Province"
                name="studentState_Province"
                onChange={onStudentInputChange} 
              />
            </div>
          </div>
          <div className="signUpStudentPostalZip">
            <div className="signUpStudentPostalZipInput">
              <input type="text" placeholder="Postal/Zip Code" name="studentPostalCode" onChange={onStudentInputChange} />
            </div>
          </div>
          <div className="signUpStudentID">
            <h4>Student ID</h4>
            <div className="signUpStudentIDInput">
              <input type="text" placeholder="Allocated student ID" name="studentID" onChange={onStudentInputChange} />
            </div>
          </div>
          <div className="signUpStudentID">
          <h4>Password</h4>
            <div className="signUpStudentIDInput">
              <input type="text" placeholder="Set your own password" name="studentPassword" onChange={onStudentInputChange} />
            </div>
          </div>
          {/* <div className="signUpStudentName">
            <h5>Parent/Guadian Information</h5>
            <h4>Name</h4>
            <div className="signUpStudentNameInput">
              <input type="text" placeholder="First Name" name="guardianFName" onChange={onStudentInputChange} />
              <input
                className="signUpStudentNameInputLastName"
                type="text"
                placeholder="Last Name"
                name="guardianLName"
                onChange={onStudentInputChange} 
              />
            </div>
          </div>
          <div className="signUpStudentCellPhoneNumber">
            <h4>Cell Phone Number</h4>
            <div className="signUpStudentCellPhoneNumberInput">
              <input type="number" placeholder="CellPhoneNumber" name="guardianNumber" onChange={onStudentInputChange}  />
            </div>
          </div>
          <div className="signUpStudentEmailAddress">
            <h4>EmailAddress</h4>
            <div className="signUpStudentEmailAddressInput">
              <input type="text" placeholder="EmailAddress" name="guardianlEmail"  onChange={onStudentInputChange} />
            </div>
          </div>
          <div className="signUpStudentRelationship">
            <h4>Relationship With Student</h4>
            <div className="signUpStudentRelationshipInput">
              <input type="text" name="studentGuardianlRelationship" onChange={onStudentInputChange} />
            </div>
          </div> */}
          <div className="Btn">
            <button onClick={onStudentSignUpSubmit} className="Submit">
              Submit
            </button>
          </div>
          <p className='signupTerms'>
                By signing in into Mashujaa you agree to our <b>Terms</b> and <b>Privacy Policy</b> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
