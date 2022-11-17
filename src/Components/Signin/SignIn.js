import shujaa from '../../Pictures/shujaa.png';
import SignInHome from './SignInHome/SignInHome';
import LogIn from './LogIn/LogIn';
import './SignIn.css';

const SignIn = ({route, onRouteChange, setUserID, setUserName}) =>{
    return(
        <div className='signInContainer'>
            <div className='signIn'>
                <div className='signInDesktopView'>
                    <img className='signInImage' src={shujaa} alt="logo" />
                    <h1 className='signInTitle'>Mashujaa</h1>
                </div>

                <div className='signInForm'>
                    
                    {route === "login"?<LogIn onRouteChange={onRouteChange} setUserID={setUserID} setUserName={setUserName} />: <SignInHome onRouteChange={onRouteChange} />}
                </div>
                
            </div>
        </div>

    )
}

export default SignIn;