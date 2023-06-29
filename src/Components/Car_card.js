import React from "react";
import './style.css';

function Guess_card(props) {
        return (<div className="car_card">
        <p className="car_text top_text">
        {props.mark}
        </p>
        <img src={props.img} className="car_img"/>
        <p className="car_text">
        {props.text}
        </p>
    </div>)
    };


export default Guess_card;