import './Social.css';
import Logo from '../assets/images/logo.svg';
import Instagram from '../assets/images/icon-instagram.svg';
import Facebook from '../assets/images/icon-facebook.svg';
import Twitter from '../assets/images/icon-twitter.svg';
import Pinterest from '../assets/images/icon-pinterest.svg';

function Social() {
    return (
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
                <img src={Logo} alt="" />
            </div>
            <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0 justify-content-md-end">
                <div>
                    <a className='px-2' href="">
                        <img src={Instagram} className='social-icons' alt="" />
                    </a>
                    <a className='px-2' href="">
                        <img src={Facebook} className='social-icons' alt="" />
                    </a>
                    <a className='px-2' href="">
                        <img src={Twitter} className='social-icons' alt="" />
                    </a>
                    <a className='px-2' href="">
                        <img src={Pinterest} className='social-icons' alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Social;