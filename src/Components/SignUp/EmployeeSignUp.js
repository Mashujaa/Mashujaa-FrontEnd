import React, {Component} from "react";
import "./EmployeeSignUp.css";
import Graphic from "../../Pictures/shujaa.png";

class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      employeeFName: "",
      employeeLName: "",
      employeeNationalID: 0,
      employeeBirthDate: "0-0-0",
      employeeGender: "",
      employeeEmail: "",
      employeeStreetAddress: "",
      employeeCity: "",
      employeeState_Province: "",
      employeePostalCode: "",
      employeeNumber: 0,
      employeeID: "",
      employeePassword: ""

    }
  }

  onEmpolyeeInputChange = (event) =>{
    let inputPlace = event.target.name;
    let inputValue = event.target.value
    if(inputPlace === "employeeFName"){
      this.setState({employeeFName: inputValue});
    }else if(inputPlace === "employeeLName"){
      this.setState({employeeLName: inputValue});
    }else if(inputPlace === "employeeNationalID"){
      this.setState({employeeNationalID: Number(inputValue)});
    }else if(inputPlace === "employeeBirthDate"){
      this.setState({employeeBirthDate: inputValue});
    }else if(inputPlace === "employeeGender"){
      this.setState({employeeGender: inputValue});
    }else if(inputPlace === "employeeEmail"){
      this.setState({employeeEmail: inputValue});
    }else if(inputPlace === "employeeStreetAddress"){
      this.setState({employeeStreetAddress: inputValue});
    }else if(inputPlace === "employeeCity"){
      this.setState({employeeCity: inputValue});
    }else if(inputPlace === "employeeState_Province"){
      this.setState({employeeState_Province: inputValue});
    }else if(inputPlace === "employeePostalCode"){
      this.setState({employeePostalCode: inputValue});
    }else if(inputPlace === "employeeNumber"){
      this.setState({employeeNumber: Number(inputValue)});
    }else if(inputPlace === "employeeID"){
      this.setState({employeeID: inputValue});
    }else if(inputPlace === "employeePassword"){
      this.setState({employeePassword: inputValue});
    }
    
  }

  onEmployeeSignUpSubmit  = () =>{
    console.log("Sending employee data")
    fetch('http://mashujaa-oss.herokuapp.com/api/auth/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        password: this.state.employeePassword,
        unique_identifier: this.state.employeeID
      })
  })
  .then(reponse => reponse.json())
  .then(data => {
      fetch('http://mashujaa-oss.herokuapp.com/api/add/employee-profile', {
        method: 'post',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${data.authorization.token}`, 'Accept': 'application/json'}, 
        body: JSON.stringify({
          first_name: this.state.employeeFName,
          last_name: this.state.employeeLName,
          national_id: this.state.employeeNationalID,
          birth_date: this.state.employeeBirthDate,
          gender: this.state.employeeGender,
          email_address: this.state.employeeEmail,
          street_address: this.state.employeeStreetAddress,
          city: this.state.employeeCity,
          "state/province": this.state.employeeState_Province,
          "postal/zipcode": this.state.employeePostalCode,
          telephone_number: this.state.employeeNumber
        })
      })
      .then(reponse => reponse.json())
      .then(data => {
          alert(data.message);
          if(data.message === "Lecturer's profile successfully added"){
            this.props.setUserName(this.state.employeeFName, this.state.employeeLName);
            this.props.setUserID(this.state.employeeID);
            this.props.onRouteChange("lecturerdash");
          }
      }).catch(error =>{
        console.log("profile", error);
      })
  }).catch(error =>{
    console.log("Register", error);
  })

  }

render(){
  // console.log(this.state.employeeID, this.state.employeePassword);
  return (
    <div className="EmployeesignUpContainer">
      <div className="EmployeesignUp">
      <button onClick={() => this.props.onRouteChange("signinhome")}>Back</button>
        <div className="EmployeesignUpIntro">
          <img src={Graphic} alt="Logo" />
          <h1>Employee Registration Form</h1>
          <p>To regsiter for an Account, kindly fill the form below</p>
        </div>
        <div className="signUpEmployee">
          <p>Staff Information</p>
          <div className="signUpEmployeeName">
            <h4>Name</h4>
            <div className="signUpEmployeeNameInput">
              <input type="text" placeholder="First Name"
              name="employeeFName" onChange={this.onEmpolyeeInputChange} />
              <input
                className="signUpEmployeeInputLastName"
                type="text"
                placeholder="Last Name"
                name="employeeLName"
                onChange={this.onEmpolyeeInputChange}
              />
            </div>
          </div>
          <div className="signEmployeeID">
            <h4>National ID</h4>
            <div className="signUpEmployeeIDInput">
              <input type="number" placeholder="National ID" name="employeeNationalID" onChange={this.onEmpolyeeInputChange} />
            </div>
          </div>
          <div className="signUpEmployeeBirth">
            <h4>Birth Date (D-MM-YY)</h4>
            <div className="signUpEmployeeBirthInput">
              <input type="text" placeholder="Day" value={this.state.employeeBirthDate.split("-")[2]} readOnly />
              <input type="text" placeholder="Month" value={this.state.employeeBirthDate.split("-")[1]} readOnly />
              <input type="text" placeholder="Year" value={this.state.employeeBirthDate.split("-")[0]} readOnly />
              <input className="dateInput" type="date" name="employeeBirthDate" onChange={this.onEmpolyeeInputChange}/>
            </div>
          </div>
          <div className="signUpEmployeeGender">
            <h4>Gender</h4>
            <div className="signUpEmployeeGenderInput">
            <select name="employeeGender" id="EmployeeGender" onChange={this.onEmpolyeeInputChange}>
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            </div>
          </div>
          <div className="signUpEmployeeEmailAddress">
            <h4>EmailAddress</h4>
            <div className="signUpEmployeeEmailAddressInput">
              <input type="text" placeholder="EmailAddress" name="employeeEmail" onChange={this.onEmpolyeeInputChange}/>
            </div>
          </div>
          <div className="signUpEmployeeAddress">
            <h4>Street Address</h4>
            <div className="signUpEmployeeAddressInput">
              <input type="text" name="employeeStreetAddress" placeholder="Street Address" onChange={this.onEmpolyeeInputChange}/>
            </div>
          </div>
          <div className="signUpEmployeeStreetAddress">
            <h4>City</h4>
            <div className="signUpEmployeeStreetAddresscity">
              <input type="text" placeholder="City" name="employeeCity" onChange={this.onEmpolyeeInputChange}/>
              <input
                className="signUpEmployeeStreetAddressState"
                type="text"
                placeholder="State/Province"
                name="employeeState_Province"
                onChange={this.onEmpolyeeInputChange}
              />
            </div>
          </div>
          <div className="signUpEmployeePostalZip">
            <div className="signUpEmployeePostalZipInput">
              <input type="text" placeholder="Postal/Zip Code" name="employeePostalCode" onChange={this.onEmpolyeeInputChange}/>
            </div>
          </div>
          <div className="signUpEmployeeCellPhoneNumber">
            <h4>Cell Phone Number</h4>
            <div className="signUpEmployeeCellPhoneNumberInput">
              <input type="number" name="employeeNumber" placeholder="Your telephone number" onChange={this.onEmpolyeeInputChange}/>
            </div>
          </div>
          <div className="signEmployeeID">
            <h4>Employee ID</h4>
            <div className="signUpEmployeeIDInput">
              <input type="text" placeholder="Allocated employee ID" name="employeeID"  
              onChange={this.onEmpolyeeInputChange}
              />
            </div>
          </div>
          <div className="signEmployeeID">
          <h4>Password</h4>
            <div className="signUpEmployeeIDInput">
              <input type="text" placeholder="Set your own password" name="employeePassword"  
              onChange={this.onEmpolyeeInputChange}
              />
            </div>
          </div>
          <div className="EBtn">
          <button onClick={this.onEmployeeSignUpSubmit} className="Submit">
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

}

};

export default Form;
