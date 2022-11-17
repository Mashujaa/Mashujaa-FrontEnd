// import girl from '../../Pictures/girl.jpg'
import colorful from '../../../Pictures/colorful.png';
import shujaa from '../../../Pictures/shujaa.png';
import ShujaaAssignment from '../../../Pictures/ic_ShujaaAssignment.png';
import ShujaaClasses from '../../../Pictures/ic_ShujaaClasses.png';
// import ShujaaExamination from '../../../Pictures/ic_ShujaaExamination.png';
import ShujaaHome from '../../../Pictures/ic_ShujaaHome.png';

import './LecturerDashSideBar.css'

// { setStdDashRoute , dashRouteChange }
const LecturerDashSideBar = ({ setLecturerDashRoute, onRouteChange, userID, userName }) =>{
    return(
        <div className='dashSideBarContainer'>
            <div className='dashSideBar'>
                <div className='dashSideBarPersonDetails'>
                    <div>
                        <img src={colorful} alt="person" />
                    </div>
                    <h2>{userName}</h2>
                    <p>{userID}</p>
                </div>
                <div className='dashSideBarContentLinks'>
                    <div onClick={() => setLecturerDashRoute("home")} className='dashSideBarContentLink'>
                        <div>
                            <img src={ShujaaHome} alt="Home" />
                        </div>
                        <p>Home</p>
                    </div>
                    <div onClick={() => setLecturerDashRoute("myclasses")} className='dashSideBarContentLink'>
                        <div>
                            <img src={ShujaaClasses} alt="Classes" />
                        </div>
                        <p>My Classes</p>
                    </div>
                    {/* <div onClick={() => setLecturerDashRoute("examinations")} className='dashSideBarContentLink'>
                        <div>
                            <img src={ShujaaExamination} alt="Examinations" />
                        </div>
                        <p>Examinations</p>
                    </div> */}
                    <div onClick={() => setLecturerDashRoute("assignment")} className='dashSideBarContentLink'>
                        <div className='feesIcon'>
                            <img src={ShujaaAssignment} alt="Assigment" />
                        </div>
                        <p>Assignment</p>
                    </div>
                    
                </div>
                <div  className='dashSideBarLogout'>
                    <button onClick={() => onRouteChange("login")}>log out</button>
                </div>
                <div className='dashSideBarFooter'>
                    <img src={shujaa} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default LecturerDashSideBar;