import './index.css'
import LogoSvg from '../../assets/logo.svg';
import AppleLogo from '../../assets/apple.svg';
import GoogleLogo from '../../assets/google.svg';

import CIInput from '../../components/CIInput';
import CIButton from '../../components/CIButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div id="register">
            <div className='left-side'>
                <h1>
                    Crop<span>Intel</span>
                </h1>
                <br />
                <h2>
                    Your farming journey starts here!
                </h2>

                <form>
                    <CIInput 
                        MuiIcon={PersonOutlineOutlinedIcon}
                        placeholder='Full name'
                    />

                    <CIInput 
                        MuiIcon={EmailOutlinedIcon}
                        placeholder='Email'
                        type='email'
                    />

                    <CIInput 
                        MuiIcon={LockOutlinedIcon}
                        placeholder='Password'
                        type='password'
                    />

                    <br />
                    <span>Or</span>

                    <div className='external-providers'>
                        <button>
                            <img src={GoogleLogo} alt="The logo of google" />
                        </button>

                        <button>
                            <img src={AppleLogo} alt="The logo of apple" />
                        </button>
                    </div>

                    <br />
                    <CIButton className='sign-btn' type='submit'>
                        Sign up
                    </CIButton>
                    <p>
                        You already have an account? <Link to={'/login'}>Log in</Link>
                    </p>
                </form>
            </div>

            <div className='right-side'>
                <div className='overlay'>
                    <img src={LogoSvg} alt="The logo of CropIntel" />
                </div>
            </div>
        </div>
    );
}