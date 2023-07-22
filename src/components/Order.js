import React, { Component } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

export class Order extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}</b>
        <FaDeleteLeft onClick={() => {
          if (this.state.count > 1 ){
          this.props.onDelete(this.props.item.id)
        this.props.func(this.props.item.price * this.state.count, '-')}
      }} />

        <div className="wrapper-button-order">
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
              this.props.func(this.props.item.price)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (this.state.count > 1 ){
              this.setState({ count: this.state.count - 1 })
            this.props.func(this.props.item.price, '-')
          }}}
          >
            -
          </button>
          <p>Количество: {this.state.count}</p>
        </div>
      </div>
    );
  }
}

export default Order;
