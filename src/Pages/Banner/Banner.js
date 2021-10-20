import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
        <Carousel className="banner-carousel-bgc">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://st.ourhtmldemo.com/new/Healthcoach-Preview/images/slides/1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="banner-carousle">
                    <h5>We have 20 years of experience with</h5>
                    <h1>Certified Personal Trainers</h1>
                    <p>Health Coach provides world-class health, Yoga, fitness & nutrition</p>
                    <button className="btn all-button mb-4 mt-2">Our Company</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://st.ourhtmldemo.com/new/Healthcoach-Preview/images/slides/2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className="banner-carousle">
                    <h5>Be Health and Be Happy</h5>
                    <h1>We support to find a Healthy life</h1>
                    <p>Health Coach provides world-class health, Yoga, fitness & nutrition. certification program to world class professionals.</p>
                    <button className="btn all-button mb-4 mt-2">Our Company</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://st.ourhtmldemo.com/new/Healthcoach-Preview/images/slides/3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="banner-carousle">
                    <h5>We are Health Coach</h5>
                    <h1>Provide Professional Health Coach</h1>
                    <p>Health Coach provides world-class health, Yoga, fitness & nutrition.</p>
                    <button className="btn all-button mb-4 mt-2">Know More</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;