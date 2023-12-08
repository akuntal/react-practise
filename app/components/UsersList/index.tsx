'use client';
import { useEffect, useState } from "react"
import User from "../User";
import { UserType } from "@/app/types";

const UserList = () => {
    const [userList, setUserList] = useState<UserType[]>([])
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUserList(data)
                setLoading(false);
            })
    }, [])


    return (
        <div>
            UsersList
            {/* {loading && <h1>user list loading</h1>} */}
            {userList.map(user => <User name={user.name} 
                                                    key={`key-${user.id}`} 
                                                    username={user.username}
                                                    email={user.email}
                                                    address={user.address} />)}
        </div>
    )
}

export default UserList