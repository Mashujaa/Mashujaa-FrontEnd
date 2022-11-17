// import { useState } from 'react'
import Units from './Units/Units';
import './Curriculum.css'

const Curriculum = ({units}) =>{

        let counter = 0;
    const studentUnits = units.map(year =>{
            counter = counter + 1;
            return (<Units key={year} year={year} yearCount={counter} />)
        })
    return(
        <div className='curriculumContainer'>
            <div className='curriculum'>
                <h1>Curriculum</h1>
                <div className='curriculumPersonDetails'>
                    <p>Program: BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING</p>
                    <p>Class: SC212/S/20</p>
                    <p>Session: YEAR 3 SEMESTER 1</p>
                </div>

                <div className='curriculumUnits'>
                    {/* <Units  />
                    <Units  />
                    <Units  />
                    <Units  />
                    <Units  /> */}
                    {studentUnits}


                </div>
            </div>
        </div>
    )
}

export default Curriculum;