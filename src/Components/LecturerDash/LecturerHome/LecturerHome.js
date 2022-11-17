import AssignmentPage from './Assignments/AssignmentPage';
import { getCurrentClass } from '../../ClassSchedule/TableData';
import { getNextClass } from '../../ClassSchedule/TableData';
import './LecturerHome.css'

const LecturerHome = ({ userName }) =>{
    return(
        <div className='lecturerHome'>
            <h1>Welcome {userName}</h1>
            <div className='lecturerHomeUpcomingClasses'>
                <h2>Upcoming Class</h2>
                <p>Current Class: {getCurrentClass()} </p>
                <p>Next Class: {getNextClass()} </p>
            </div>
            <AssignmentPage />
        </div>
    )
}

export default LecturerHome;