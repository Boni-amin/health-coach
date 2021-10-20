import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about fs-4 mt-5 pt-md-4 pb-5">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-7">
                        <div className="text-center">
                            <h5>Some Story Behind Us</h5>
                            <h1 className="about-h1">WE HAVE 20 YEARS OF EXPERINCE</h1>
                            <p>We handpick the best coaches and health experts from across the country to make sure you get the mostpersonalized health care you deserve between those doctor visits.</p>
                        </div>
                        <div className="row d-flex justify-content-between mt-4">
                            <div className="col-md-5">
                                <h6 className="about-h5">Our Mission</h6>
                                <p>Explain to you how all this mistaken idea of denouncing ut pleasure work praising pain was born and will give.</p>
                            </div>
                            <div className="col-md-5">
                                <h6 className="about-h5">Our Vision</h6>
                                <p>Pleasure work praising pain ut was born and will give you can complete design account sed the system.</p>
                            </div>
                            <div className="text-center mt-3"><button className="btn all-button">READ MORE</button></div>
                        </div>
                    </div>
                    <div className="col-md-4 px-15px px-md-0">
                        <div className="row d-flex justify-content-between align-items-center mt-5">
                            <img className="img-fluid" src="http://st.ourhtmldemo.com/new/Healthcoach-Preview/images/resources/callto-action.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;