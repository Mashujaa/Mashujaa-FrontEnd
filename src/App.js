import React, {Component} from 'react';
import SignIn from './Components/Signin/SignIn';
import EmployeeSignUp from './Components/SignUp/EmployeeSignUp';
import StudentSignUp from './Components/SignUp/StudentSignUp';
import StudentDash from './Components/StudentDash/StudentDash';
import LecturerDash from './Components/LecturerDash/LecturerDash';
// import Exam from './Components/LecturerDash/Marks/Exam';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {
      route: "signinhome",
      http_to_be_used: "http",
      userName: "",
      userID: "",
      p_userName: "",
      p_userID: ""
    }
  }

  setCookie = (cname,cvalue,exdays) =>{
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
   }

   getCookie =(cname) =>{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
    c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
    return c.substring(name.length, c.length);
    }
    }
    return "";
   }

   checkCookie = () => {
    this.setCookie("route", this.state.route, 300);
   }

   setUserName = (fname_received, lname_received) =>{
    let name_received = fname_received + " " + lname_received;
    this.setState({userName: name_received});
    // console.log(name_received);
    this.setCookie("name", name_received, 300);
    
  }
  setUserID = (id_received) =>{
    this.setState({userID: id_received});
    this.setCookie("ID", id_received, 300);

  }
  componentDidMount =()=>{
    let route = this.getCookie("route");
    let ID = this.getCookie("ID");
    let name = this.getCookie("name");
    this.setUserID(ID);
    this.setUserName(name, "");
    // console.log(ID, name);

    if(route !== ""){
    this.onRouteChange(route);
    }
  }


  onRouteChange = (routeReceived) =>{
    this.setState({route: routeReceived});
    this.setCookie("route", routeReceived, 300);
  }

render(){
  let route = this.state.route;
  // console.log(this.state.userID, this.state.userName);
  // console.log(this.state.userID);
  if(route === "signinhome" || route === "login"){
    return(
      // <LecturerDash />
      // <Exam />
      // <AssignmentPage />
      // <Curriculum />
      // <RegisterUnits />
      // <Transcript />
      // <StudentDash />
      // <TableView />
      <SignIn route={route} onRouteChange={this.onRouteChange} setUserID={this.setUserID} setUserName={this.setUserName}/>
    );
  }else if(route === "studentregistration"){
    return(
      <StudentSignUp http_to_be_used={this.state.http_to_be_used} onRouteChange={this.onRouteChange}
      setUserID ={this.setUserID} setUserName={this.setUserName}
      />
    );
  }else if(route === "employeeregistration"){
      return(
      <EmployeeSignUp http_to_be_used={this.state.http_to_be_used} onRouteChange={this.onRouteChange} 
      setUserID={this.setUserID} setUserName={this.setUserName}
      />
      );
  }else if(route === "studentdash"){
    return(
      <StudentDash onRouteChange={this.onRouteChange} userID={this.state.userID} userName={this.state.userName} />
    );
}else if(route === "lecturerdash"){
  return(
    <LecturerDash onRouteChange={this.onRouteChange} userID={this.state.userID} userName={this.state.userName} />
  );
}
}

}

export default App;
