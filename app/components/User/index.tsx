import { UserType } from "@/app/types";

// user is props here 
export default function User(user: UserWithoutId) {
    return (
        <div className="flex border-solid border-2 border-sky-500 m-2">
            <div className="flex m-2">
                <label>Name: {user.name} </label>
            </div>
            <div className="flex m-2">
                <label>UserName: {user.username} </label>
            </div>
            <div className="flex m-2">
                <label>Email: {user.email} </label>
            </div>
            <div className="flex m-2">
                <label>Address: </label>
                <div>
                    <label>{user.address.street} </label>
                    <label>{user.address.city} </label>
                    <label>{user.address.zipcode} </label>
                </div>
            </div>
        </div>
    )
}

type UserWithoutId = Omit<UserType, 'id'>;