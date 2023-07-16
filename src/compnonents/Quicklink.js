import './Quicklink.css';
import svgDesktop from '../assets/images/bg-pattern-how-we-work-desktop.svg';
import svgMobile from '../assets/images/bg-pattern-how-we-work-mobile.svg';

function Quicklink() {
    return (
        <div className='container bg-custom'>
            <div className="row">
                <div className='d-flex justify-content-end'>
                    <img src={svgMobile} className='svg-how-mobile' alt="" />
                </div>
                <div className="col-md-6 p-5">
                    <h4 className='p-3 text-center text-md-start'>Find out more about how we work</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                    <div className='p-5'>
                        <button className='btn-custom p-3 px-4 text-uppercase'>How we work</button>
                    </div>
                    <img src={svgDesktop} className='svg-how-desktop' alt="" />
                </div>
            </div>
        </div>
    )
};

export default Quicklink;