import Car_card from "./Car_card";


function All_cards(props) {   
            return (
            props.data.map((el) => (
        <Car_card
          key={el.id}
          text={el.desc}
          mark={el.car_mark}
          img={el.pic_link}
          good_arr = {props.good_arr}
          func = {props.func}
        />
      )
      )) ;
}

export default All_cards;