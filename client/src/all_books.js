import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import { Component } from 'react'
import Single_book from './single_book'
import Book_add from './book_add'



export default function All_books (props) {


    const [isLoading, setLoading] = useState(false)
    const [data, chData] = useState([]);
    
      useEffect(() => {  let fun = async () =>{
        setLoading((true))
        let res = await axios.get('http://localhost:3001/')
        res = res.data
        chData(res)
        setLoading(false)
        console.log(isLoading)
        }
      
      fun() },[])
    
      return (
        <div className='book_wrap'>
          {isLoading ? <p>isLoading</p> : 
        data.map((el) => {
          return <Single_book key={el.id} book_name={el.book_name} id={el.id} book_desc={el.book_desc}/>
          
        })
        }
          <Book_add/></div>)
}