import { UserType } from "@/app/types";

// user is props here 
export default function User(user: UserWithoutId) {
    return (
        <div className="flex border-solid border-2 border-sky-500 m-2">
            <label>Name: {user.name} </label>
        </div>
    )
}

type UserWithoutId = Omit<UserType, 'id'>;