'use client';
import { ChangeEvent, useState } from "react"

export default function CreateUser(){
    const [user, setUser] = useState({
        name:'',
        phone:'',
        email:'',
        address:''
    })

    // DO NOT NEED THESE handlers because the commonChangehandler below is being used
    // // name change handler 
    // function nameChange(evt:ChangeEvent<HTMLInputElement>){
    //     setUser({
    //         ...user,
    //         name: evt.target.value
    //     })
    // }

    // const phoneChangeHandler=(evt:ChangeEvent<HTMLInputElement>)=>{
    //     setUser({
    //         ...user,
    //         phone: evt.target.value
    //     })
    // }

    const changeHandler = (evt:ChangeEvent<HTMLInputElement>)=>{
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        })
    }


    function submitForm(e){

        e.preventDefault();
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
        <form id="form-1" onSubmit={submitForm} data-te-validation-init>
            <div>
                Create User
                <div id="input-1" className="flex flex-col mt-4" data-te-input-wrapper-init data-te-validate="input" data-te-validation-ruleset="isRequired">
                    <p>Name: <input name="name" className="border-solid border-slate-950 border-2 mb-4" value={user.name} onChange={changeHandler} required></input></p>
                    <p>Phone: <input name="phone" className="border-solid border-slate-950 border-2 mb-4" value={user.phone} onChange={changeHandler} required></input></p>
                    <p>Email: <input name="email" className="border-solid border-slate-950 border-2 mb-4" value={user.email} onChange={changeHandler} required></input></p>
                    <p>Address: <input name="address" className="border-solid border-slate-950 border-2 mb-4" value={user.address} onChange={changeHandler} required></input></p>
                    <button className="border-solid border-slate-950 border-2 bg-slate-500" data-te-submit-btn-ref>Submit</button>
                </div>
            </div>
        </form>
    )
}