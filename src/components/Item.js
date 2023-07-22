import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='wrapper-item'>  
        <div className='item'>
            <img src={"./img/" + this.props.item.img}/>
             <h2>{this.props.item.title}</h2>
              <p>{this.props.item.subtitle}</p>
              <b>{this.props.item.price}</b>
              <div className='add-to-cart' onClick={()=> {this.props.onAdd(this.props.item, this.props.item.price)}}>+</div>
              
        </div>
      </div>
    )
  }
}

export default Item
