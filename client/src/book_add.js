
import { useState } from "react"
import axios from "axios"


export default function Book_add(props){

    const [book, chBook] = useState({
        name: '',
        desc: ''
})


    let chInpun = (e) => {
        chBook(prev => ({...prev, [e.target.name]: e.target.value }))
    }

    let hanleIpt = async (e) =>{
        e.preventDefault()
        window.location.reload(); 
        try {
            console.log('added')
            console.log(book)
            await axios.post('http://localhost:3001/add', book)
        } catch (error) {
            console.log(error)
        }

        
    }


    return (
        <form onSubmit={hanleIpt} className="card">
            <textarea placeholder="название книги" onChange={chInpun} className="form_input" name="name"/>
            <textarea placeholder="описание книги" onChange={chInpun} className="form_input" name="desc"/>
            <button className="form_btn" type="submit" ><p>добаить</p></button>
        </form>
    )

}