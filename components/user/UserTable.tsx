import React from 'react'
import { PencilAlt } from '@heroicons/react/outline/PencilAlt';
import { Trash } from '@heroicons/react/outline/Trash';



interface Props{
  data:any;
  handleDelete:(id: any) => void;
  handleEdit:(id: any) => void;
}

const UserTable:React.FC<Props> = ({data,handleDelete,handleEdit}) => {
  return (
    <div className="container mx-auto p-4">
      <div className='p-5 flex justify-end'>
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">Add</button>
      </div>
      
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            {/* <th className="py-2 px-4 border-b">Phone Number</th> */}
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item:any) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
              {/* <td className="py-2 px-4 border-b">{item.phone}</td> */}
              <td className="py-2 px-4 border-b">
                <PencilAlt
                  onClick={() => handleEdit(item.id)}
                  className="w-6 h-6 text-yellow-500 cursor-pointer hover:text-yellow-400 mr-2"
                />
                <Trash
                  onClick={() => handleDelete(item.id)}
                  className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-600"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}

export default UserTable