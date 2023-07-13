import Mini_good from "./mini_good";

function All_goods(props) {

    return (
    <div className="mini_goods">
    <Mini_good good_arr={props.good_arr}/>
    </div>);
}

export default All_goods;