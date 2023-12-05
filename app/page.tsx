import Header from "./components/Header";
import UserList from "./components/UsersList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header/>
      <UserList />
    </main>
  )
}
