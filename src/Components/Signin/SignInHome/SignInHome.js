import shujaa from '../../../Pictures/shujaa.png';
import './SignInHome.css';

const SignInHome = ({onRouteChange}) =>{
    return(
        <div className='signInHomeContainer'>
            <div className='signInHome'>
                <img className='signInHomeImage' src={shujaa} alt="logo" />
                <h1>Mashujaa</h1>
                <button onClick={() => onRouteChange("studentregistration")} className='signInHomeSignUp'>Sign Up as Student</button>
                <button onClick={() => onRouteChange("employeeregistration")} className='signInHomeSignUp'>Sign Up as Employee</button>
                <button onClick={() => onRouteChange("login")} className='signInHomeLogIn'>I already have an account</button>
            </div>
        </div>

    )
}

export default SignInHome;