import React from "react";
import "./style.css";
import axios from "axios";

export default function Single_book(props) {
  let hanleIpt = async (e) => {
    let book_id = { id: props.id };
    e.preventDefault();
    window.location.reload();
    try {
      console.log(props.id);
      await axios.post("http://localhost:3001/delete", book_id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card ">
      <p className="header_text">{props.book_name}</p>
      <p className="bottom_text">{props.book_desc}</p>
      <button className="form_btn" onClick={hanleIpt}><p>удалить</p></button>
    </div>
  );
}
