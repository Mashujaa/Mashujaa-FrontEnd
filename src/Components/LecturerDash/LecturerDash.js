import { useState } from 'react';
import LecturerDashSideBar from './LecturerDashSideBar/LecturerDashSideBar';
import AssignmentPage from './Assignments/PresentaionLayer/pages/AssignmentPage';
import LecturerHome from './LecturerHome/LecturerHome';
import TableView from '../ClassSchedule/TableView';
import './LecturerDash.css';
const LecturerDash = ({ onRouteChange, userID, userName }) =>{
    const [lecturerDashRoute, setLecturerDashRoute] = useState("home");
    return(
        <div className='lecturerDash'>
            <div className='lecturerDashSideBar'>
                <LecturerDashSideBar setLecturerDashRoute={setLecturerDashRoute} onRouteChange={onRouteChange} userName={userName} userID={userID} />
            </div>
            <div className='lecturerDashContent'>
                {lecturerDashRoute === "home" && (
                    <LecturerHome userName={userName} />
                )}
                
                {lecturerDashRoute === "myclasses" && (
                    <TableView />
                )}

                {lecturerDashRoute === "assignment" && (
                    <AssignmentPage />
                )}
            </div>
        </div>
    )
}

export default LecturerDash;