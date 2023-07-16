import './Description.css';
import iconOne from '../assets/images/icon-snappy-process.svg';
import iconTwo from '../assets/images/icon-affordable-prices.svg';
import iconThree from '../assets/images/icon-people-first.svg';

function Description() {
    return (
        <div className='container about'>
            <div className="line-desktop w-15"></div>
            <div className="line-mobile"></div>
            <h2 className='mt-5'>We’re different</h2>
            <div className='row mt-5'>
                <div className="col-md-4 mt-5">
                    <div className='d-flex justify-content-center justify-content-md-start'>
                        <img src={iconOne} alt="" />
                    </div>
                    <div className='mt-5'>
                        <h3>Snappy Process</h3>
                    </div>
                    <div className='mt-4'>
                        <p className='about-p'>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <div className='d-flex justify-content-center justify-content-md-start'>
                        <img src={iconTwo} alt="" />
                    </div>
                    <div className='mt-5'>
                        <h3>Affordable Prices</h3>
                    </div>
                    <div className='mt-4'>
                        <p className="about-p">We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <div className='d-flex justify-content-center justify-content-md-start'>
                        <img src={iconThree} alt="" />
                    </div>
                    <div className="mt-5">
                        <h3>People First</h3>
                    </div>
                    <div className="mt-4">
                        <p className="about-p">Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Description;