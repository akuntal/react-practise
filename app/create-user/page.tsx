'use client';
import { ChangeEvent, useState } from "react"

export default function CreateUser(){
    const [user, setUser] = useState({
        name:'',
        phone:'',
        email:'',
        address:''
    })

    // name change handler 
    function nameChange(evt:ChangeEvent<HTMLInputElement>){
        setUser({
            ...user,
            name: evt.target.value
        })
    }

    const phoneChangeHandler=(evt:ChangeEvent<HTMLInputElement>)=>{
        setUser({
            ...user,
            phone: evt.target.value
        })
    }

    const changeHandler = (evt:ChangeEvent<HTMLInputElement>)=>{
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        })
    }


    function submitForm(){
        
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            Create User
            <div className="flex flex-col mt-4">
                <p>Name: <input name="name" className="border-solid border-slate-950 border-2 mb-4" value={user.name} onChange={nameChange}></input></p>
                <p>Phone: <input name="phone" className="border-solid border-slate-950 border-2 mb-4" value={user.phone} onChange={phoneChangeHandler}></input></p>
                <p>Email: <input name="email" className="border-solid border-slate-950 border-2 mb-4" value={user.email} onChange={changeHandler}></input></p>
                <p>Address: <input name="address" className="border-solid border-slate-950 border-2 mb-4" value={user.address} onChange={changeHandler}></input></p>
                <button className="border-solid border-slate-950 border-2 bg-slate-500" onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}