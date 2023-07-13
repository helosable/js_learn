import Car_for_arr from "./cars_for_arr"

function Mini_good(props) {
    let arr = [props.good_arr]
    let arr2 = ['ferari', 'maserati', 'lamborgini']
    
    return ( 
        <div className="mini_card">
            <Car_for_arr arr={arr2}/>
        </div>
     );
}

export default Mini_good;