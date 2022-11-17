import { useState } from 'react';

const Units = ({ year, yearCount}) =>{
    // const [yearClicked, setYearClicked] = useState("");
    const [semClicked, setsemClicked] = useState("");
    // const [displayCounter, setdisplayCounter] = useState(0);
    // let counter = 0;

    // <div className='curriculumUnitDisplayUnitsContent'>
    //                     <p>Business Intelligence</p>
    //                     <p>SCS 305: Business Intelligence</p>
    //                 </div>
// 
    const sem1Units = year[0].map(sem1unit =>{
        return(
            <p key={sem1unit}>{sem1unit}</p>
        );
    })

    const sem2Units = year[1].map(sem2unit =>{
        return(
            <p key={sem2unit}>{sem2unit}</p>
        );
    })
    // const unitDisplay = () =>{
    //     counter = counter + 1;
    //     if(counter === displayCounter && semClicked === "SEMESTER 1"){
    //             return(
    //                 <div className='curriculumUnitDisplayUnitsContent'>
    //                     <p>Business Intelligence</p>
    //                     <p>SCS 305: Business Intelligence</p>
    //                     <p>SCS 910: Design and Analisys of algorithms</p>
    //                     <p>SIT 306: National Cohesion and Integration</p>
    //                     <p>Business Intelligence</p>
    //                     <p>Business Intelligence</p>
    //                     <p>Business Intelligence</p>
    //                 </div>
    //             )
    //     }else if(counter === 2 && semClicked === "SEMESTER 2"){
    //             return(
    //                 <div className='curriculumUnitDisplayUnitsContent'>
    //                     <p>Business Intelligence</p>
    //                     <p>SCS 305: Business Intelligence</p>
    //                 </div>
    //             )
    //         }
    //     }
    

    const onSemClick = (event) =>{
        if(event.target.innerText === semClicked){
            // setYearClicked("");
            setsemClicked("");
            // semCounter = Number(0);
        }else{
            // setYearClicked(event.target.parentElement.parentElement.children[0].innerText);
            setsemClicked(event.target.innerText);
            // semCounter = Number(event.target.innerText[9]);
        }
        // setdisplayCounter(semCounter);
    }
    return(
        <div className='curriculumUnitDisplay'>
            <p>YEAR {yearCount}</p>
            <p>Stage Of Study</p>
        <div className='curriculumUnitDisplaySems'>
            <p onClick={onSemClick}>SEMESTER 1</p>
                {semClicked === "SEMESTER 1" && (
                    <div className='curriculumUnitDisplayUnitsContent'>
                        {sem1Units}
                    
                    </div>
                )}

            <p onClick={onSemClick}>SEMESTER 2</p>
                {semClicked === "SEMESTER 2" && (
                    <div className='curriculumUnitDisplayUnitsContent'>
                        {sem2Units}
                    
                    </div>
                )}
        </div>
        </div>
    )
}

export default Units