import './Banner.css';
import imageIntroDesktop from '../assets/images/image-intro-desktop.jpg';
import imageintroMobile from '../assets/images/image-intro-mobile.jpg';
import svgIntroDesktopOne from '../assets/images/bg-pattern-intro-right-desktop.svg'
import svgIntroDesktopTwo from '../assets/images/bg-pattern-intro-left-desktop.svg';

function Banner() {
    return (
        <section className="container banner">
            <div className="row d-flex align-items-start">
                <div className="col-md-6 caption d-flex flex-column justify-content-center align-items-center align-items-md-start order-2 order-md-1">
                    <div className='border bg-white d-none d-md-block w-25'></div>
                    <h1 className='mt-5'>Humanizing your insurance.</h1>
                    <p className='mt-3'>Get your life insurance coverage easier and faster. We blend our expertise
                        and technology to help you find the plan that’s right for you. Ensure you
                        and your loved ones are protected.</p>
                    <div className='mt-3'>
                        <button className="btn-custom p-3 px-4">View plans</button>
                    </div>
                </div>
                <div className="col-md-6 mt-lg-5 order-1 order-md-2">
                    <img src={imageIntroDesktop} className='img-desktop' alt="" />
                    <img src={imageintroMobile} className='img-mobile img-fluid' alt="" />
                    <img src={svgIntroDesktopOne} className='svg-desktop' alt="" />
                    <img src={svgIntroDesktopTwo} className='svg-desktop-two' alt="" />
                </div>
            </div>
        </section>
    )
};

export default Banner;