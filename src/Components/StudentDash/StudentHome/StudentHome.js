import { getCurrentClass } from '../../ClassSchedule/TableData/TableData';
import { getNextClass } from '../../ClassSchedule/TableData/TableData';
import './StudentHome.css'


const StudentHome = ({userName}) =>{
    // console.log(getCurrentClass(), getNextClass());
    return(
        <div className='studentHome'>
            <h1>Welcome {userName}</h1>
            <div className='studentHomeUpcomingClasses'>
                <h2>Upcoming Class</h2>
                <p>Current Class: {getCurrentClass()} </p>
                <p>Next Class: {getNextClass()} </p>
            </div>
        </div>
    )
}

export default StudentHome;