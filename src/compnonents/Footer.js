import './Footer.css';
import Social from './Social';
import Links from './Links';
import svgFooterDesktop from '../assets/images/bg-pattern-footer-desktop.svg';
import svgFooterMobile from '../assets/images/bg-pattern-footer-mobile.svg';

function Footer() {
    return (
        <div className="footer">
            <img className='svg-footer-desktop' src={svgFooterDesktop} alt="" />
            <img src={svgFooterMobile} alt="" className="svg-footer-mobile" />
            <div className="container p-5 footer-content">
                <Social />
                <div className="border bg-muted my-5"></div>
                <Links />
            </div>
        </div>
    )
};

export default Footer;