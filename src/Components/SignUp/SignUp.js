import './SignUp.css';
import Logo from '../../Pictures/shujaa.png'

const SignUp = () =>{

    return(
        <div className='signUpContainer'>
            <div className='signUp'>
                <div className='signUpIntro'>
                    <img src={Logo} alt="Logo" />
                    <h1>Student Registration Form</h1>
                    <p>To regsiter for an Account, kindly fill the form below</p>
                </div>
                <div className='signUpStudent'>
                    <p>Student Information</p>
                    <div className='signUpStudentName'>
                        <h4>Name</h4>
                        <div className='signUpStudentNameInput'>
                            <input type="text" placeholder='First Name' />
                            <input className='signUpStudentNameInputLastName' type="text" placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='signUpStudentID'>
                        <h4>National ID</h4>
                        <div className='signUpStudentIDInput'>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className='signUpStudentBirth'>
                        <h4>Birth Date</h4>
                        <div className='signUpStudentBirthInput'>
                            <input type="text" placeholder='Month' />
                            <input type="text" placeholder='Day' />
                            <input type="text" placeholder='Year' />
                            <input type="date"/>
                        </div>
                    </div>
                    <div className='signUpStudentGender'>
                        <h4>Gender</h4>
                        <div className='signUpStudentGenderInput'>
                            <input type="text" placeholder="Gender" />
                        </div>
                    </div>
                    <div className='signUpStudentGenderd'>
                        <h4>Gender</h4>
                        <div className='signUpStudentGenderdInput'>
                            <input type="text" placeholder="Gender" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;