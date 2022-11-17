
import './RegisterUnits.css';

const RegisterUnits = () =>{
    const unitList = ["Business Intelligence", "Distributed Systems", "Fundamentals of SE", 
    "National Cohesion and Integration", "Probability and Statistics 1", "Open Source Trends",
    "Mobile Application Development", "Calculus 1 and 2"];

    const units = unitList.map(unit =>{
        return(
            <label className="registerUnitC_B_Container" key={unit}>
            <input type="checkbox" className='regsiterUnitCheckbox' />
            <span className="checkmark"></span>
            {unit}
            </label>
        )
    })
    return(
        <div className='registerUnitsContainer'>
            <div className='registerUnits'>
                <h1>Register Units</h1>
                <div className='registerUnit'>
                    <h2>My Units:</h2>
                        {units}
                        <div className="Btn">
                        <button className="Submit">
                        Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterUnits;