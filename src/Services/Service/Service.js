import React from 'react';
import './Service.css'

const Service = (props) => {
    const {img, name , description} = props.service;
    return (
        <div class="col mb-5">
            <div class="card">
                 <img src={img} class="card-img-top" alt="" />
                <div class="card-body service-card">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button className=" btn all-button">red more</button>
                </div>
            </div>
        </div>
    );
};

export default Service;