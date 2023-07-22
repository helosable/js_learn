import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Ymap from "./components/Ymap";


class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
     all_price: 0,
      orders:[],
      items:[
{
  id:1,
  title:'Ролл - Калифорния',
  img:'калифорния.jpg',
  subtitle:"Какое то описание",
  price:'500',
  categories: 'cool'

},
{
  id:2,
  title:'Ролл - Морской',
  img:'калифорния.jpg',
  subtitle:"Какое то описание",
  price:'600',
  categories: 'cool'
},
{
  id:3,
  title:'Ролл - Теплый',
  img:'калифорния.jpg',
  subtitle:"Какое то описание",
  price:'600',
  categories: 'cool'
}

      ]
     
   
  }

this.addToOrder = this.addToOrder.bind(this)
this.deleteOrder = this.deleteOrder.bind(this)
this.price_handle = this.price_handle.bind(this)
}
  render(){
  return (
    <div className="App">
      <div className="wrapper">
       
        <Header orders={this.state.orders} onDelete={this.deleteOrder} all_price={this.state.all_price} func={this.price_handle }  />
        <Items items={this.state.items} onAdd={this.addToOrder} all_price={this.state.all_price} />
        <Ymap/>
      </div>
    </div>
  )
}

price_handle(price, operation='+'){
  this.state.all_price = parseInt(`${this.state.all_price}`)
  price = parseInt(`${price}`)
  if (operation === '+'){this.setState({all_price: this.state.all_price + price})}
  else {
    this.setState({all_price: this.state.all_price - price})
  }
}



addToOrder(item, price){
    let isInArray = false
    this.state.orders.forEach(el =>{
      if(el.id===item.id)
      isInArray=true
    })
    if(!isInArray){
  this.setState({orders: [...this.state.orders, item]}, ()=>{
    console.log(this.state.orders)
  })
  this.price_handle(price)
}

}

deleteOrder(id){
 this.setState({orders: this.state.orders.filter(el => el.id !==id)})
}

}


export default App;
