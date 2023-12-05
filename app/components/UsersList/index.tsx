'use client';
import { useEffect, useState } from "react"
import User from "../User";
import { UserType } from "@/app/types";

const UserList = () => {
    const [userList, setUserList] = useState<UserType[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUserList(data)
            })
    }, [])


    return (
        <div>
            UsersList
            {
                userList.map(user=><User name={user.name} key={`key-${user.id}`}/>)
            }
        </div>
    )
}

export default UserList