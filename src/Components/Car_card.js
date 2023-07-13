import React, { useState } from "react";
import './style.css';

function Car_card(props) {

    return (<div className="car_card">
        <p className="car_text top_text">
        {props.mark}
        </p>
        <img src={props.img} className="car_img"/>
        <p className="car_text">
        {props.text}
        </p>
    <button className='car_btn' onClick={() => {
        props.func(props.mark)
    }}></button>
    </div>)
    };


export default Car_card;