import React from "react";


function Car_for_arr (props) {
    console.log(props.arr)
    return( 
        <div>
       { props.arr.map((el) => React.createElement('p', {className: 'mini_text'}, el) )}
        </div>
            
    );
}

export default Car_for_arr ;