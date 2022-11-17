import { useState } from 'react';
// import DashHeader from './DashHeader/DashHeader';
import StdDashSideBar from './StdDashSideBar/StdDashSideBar';
import RegisterUnits from './RegisterUnits/RegisterUnits';
import Curriculum from './Curriculum/Curriculum';
import Transcript from './Transcript/Transcript';
import StudentHome from './StudentHome/StudentHome';
import FeeForm from './FeeForm/FeeForm';
import './StudentDash.css';
import TableView from '../ClassSchedule/TableView';


const StudentDash = ({onRouteChange, userID, userName}) =>{
    const [stdDashRoute, setStdDashRoute] = useState("home");
    const units= [
        [["SCS 112: Distributed Systems", "SCD 214: Math"], ["SIT 112: Business Intelligence", "AMM 101: Calculus"]],
        [["SIT 204: Data Structures and Algorithms", "SCB 214: Probability"], ["SIT 212: Business Analytics", "AMM 202: Statistics"]],
        [["BEE 312: Entrepreneurship", "ADD 314: Data Analytics"], ["SIT 302: AI", "SCS 304: Network praticum"]],
        [["SCS 418: Machine Learning", "SIT 401: Ethics"], ["SIT 412: Data Intelligence", "BIT 405: Bitcoin Mining"]]
    ]

    // console.log(stdDashRoute);
    return(
        <div className='studentDash'>
            <div className='studentDashHeader'>
                {/* <DashHeader /> */}
            </div>
            <div className='studentDashSideBar'>
                <StdDashSideBar onRouteChange={onRouteChange} setStdDashRoute={setStdDashRoute} userID ={userID} userName={userName} />
            </div>
            <div className='studentDashContent'>
            {stdDashRoute === "home" && (
                <StudentHome userName={userName} />
            )}

            {stdDashRoute === "transcript" && (
                <Transcript />
            )}

            {stdDashRoute === "timetable" && (
                <TableView />
            )}
            {stdDashRoute === "units" && (
                <div className='studentDashContentUnits'>
                    <RegisterUnits />
                    <Curriculum units={units} />
                </div>
            )}

            {stdDashRoute === "fees" && (
                <FeeForm />
            )}

            </div>
        </div>
    )
}

export default StudentDash;