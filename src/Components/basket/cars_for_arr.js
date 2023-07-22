import React from "react";


function Car_for_arr (props) {
    console.log(props.arr)
    return( 
        <div>
       { props.arr.map((el) => <p className="mini_text">{el}</p> )}
       
        </div>
            
    );
}

export default Car_for_arr ;