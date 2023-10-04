"use client";
import {useState} from "react"
import UserTable from "@/components/user/UserTable"
export default function Home() {
  const [data,setData]=useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' }]);
    const handleEdit = (id:any) => {
      console.log(`Edit item with id ${id}`);
    };
  
    const handleDelete = (id:any) => {
      console.log(`Delete item with id ${id}`);
    };
  return (
    <main >
      <UserTable data={data} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </main>
  )
}
