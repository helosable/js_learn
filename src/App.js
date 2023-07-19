import React from "react";
import Car_card from "./Components/Car_card";
import All_cards from "./Components/all_cards";
import Nav_bar from "./Components/nav_bar";
import All_goods from "./Components/basket/all_goodls";

class App extends React.Component {
  constructor(props){
    super(props)
    this.add_card = this.add_card.bind(this)
    this.data = [
      {
        id: "1",
        desc: "Automobili Lamborghini S.p.A. — итальянская компания, производитель дорогих спортивных автомобилей под маркой Lamborghini. Находится в коммуне Сант-Агата-Болоньезе, около Болоньи. Компания основана в 1963 году Ферруччо Ламборгини; на тот момент он уже был владельцем крупной компании по производству тракторов.",
        car_mark: "lamborgini",
        pic_link:
          "https://i.pinimg.com/564x/fb/b4/32/fbb432a291cc37924a4ab2de76f0f0a4.jpg",
      },
      {
        id: "2",
        desc: "Ferrari NV — итальянская компания, выпускающая спортивные и гоночные автомобили, базирующаяся в Маранелло. Основана в 1947 году Энцо Феррари как Scuderia Ferrari, компания спонсировала гонщиков и производила гоночные автомобили до 1947 года.",
        car_mark: "ferari",
        pic_link:
          "https://i.pinimg.com/564x/a4/ca/8e/a4ca8e8f177d632156639c650dc5987d.jpg",
      },
      {
        id: "3",
        desc: "Maserati S.p.A. — итальянская компания, производитель эксклюзивных автомобилей спортивного и бизнес-класса. Основана 1 декабря 1914 года в Болонье, Италия. Эмблемой компании является трезубец Посейдона, элемент фонтана Нептуна в Болонье. Штаб-квартира находится в городе Модена, Италия",
        car_mark: "maserati",
        pic_link:
          "https://i.pinimg.com/564x/86/4d/44/864d44634507ee94689eb998f08d6461.jpg",
      },
    ];
    this.state = {good_arr: []}
  }

  car_check(el){
    if (this.state.good_arr.includes(el)===true){
      console.log(this.state.good_arr)
      return false
    }
    else{
    return true}
  }

  add_card(car=''){
    if (this.car_check(car)){
    this.setState({good_arr: [...this.state.good_arr, car]})}
  }


  render() {
    return (
      <div>
        <Nav_bar good_arr={this.state.good_arr}/>
        <div className="all_cars">
          <All_cards data={this.data} good_arr={this.state.good_arr} func={this.add_card}/>
        </div>
      </div>
    );
  }
}

export default App;
