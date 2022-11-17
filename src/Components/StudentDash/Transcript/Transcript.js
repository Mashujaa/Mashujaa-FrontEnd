import { useState } from 'react';
import { getYearMarks } from './TranscriptData';
import './Transcript.css';

const Transcript = () =>{
    const [yearMarks, setYearMarks] = useState([]);
    // const [currentYear, setCurrentYear] = useState([1, 2])

    const onYearClick = (event) =>{
        let year = event.target.innerText;
        setYearMarks(getYearMarks(year));
        
        // console.log(getYearMarks(event.target.innerText));
    }

    const marks =  yearMarks.map(unit =>{
            return(
                <tr key={unit.unitCode}>
                    <td>{unit.unitCode}</td>
                    <td>{unit.unitName}</td>
                    <td>{unit.unitMarks}</td>
                    <td>{unit.unitGrade}</td>
                </tr>
            )
        })
    const headings = () =>{
        if(marks.length > 0){
            return(
                <tr>
                        <th>UNIT CODE</th>
                        <th>UNIT TITLE</th>
                        <th>HOURS</th>
                        <th>GRADE</th>
                </tr>
            )
        }
    }

    const yearsDisplay = [1, 2].map(year =>{
        return(
            <h1 key={year} onClick={onYearClick}>Year {year}</h1>
        );
    })


    return(
        <div className='transcriptContainer'>
            <div className='transcript'>
                {/* <div className='transcriptStudentDetails'>
                </div> */}
                <div className='transcriptYears'>
                    {yearsDisplay}
                    {/* <h1 onClick={onYearClick}>Year 4</h1> */}
                    
                </div>
                <div className='transcriptContent'>
                <table className="transcriptTable">
                    <thead>
                        {headings()}
                    </thead>
                    <tbody>
                        {marks}
                    </tbody>
                </table>

                </div>
                <div className='transcriptFooter'>
                <p>
                    <b>Key Grading System </b> <br />
                    <u>Grade Points</u> <br />
                    70-10<br />
                    A <br />
                    60-69 <br />
                    B <br />
                    50-59 <br />
                    B <br />
                    40-49 <br />
                    C <br />
                    0-39 <br />
                    E <br />
                    <u>Other Symbols</u> <br />
                    #-Audited Unit <br />
                    *-Retake <br />
                    -Missing Marks <br /> <br />
                    <b>RECOMMENDATION</b>:Pass to proceed to next year <br />

                    <b>NB</b>: This result slip is issued without any erasures or alterations.Not valid without official stamp
                </p>
                </div>
            </div>
        </div>
    )
}

export default Transcript;