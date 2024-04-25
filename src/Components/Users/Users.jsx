import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

const Users = () => {
  const loadedData = useLoaderData();
  const [users, setUsers] = useState(loadedData);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Last Logged At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {users.map((user, idx) => (
            <tr key={user._id}>
              <th>{idx}</th>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.lastLoggedAt}</td>
              <td onClick={() => handleDelete(user._id)} className="btn bg-red-400 my-1">
                <MdDeleteForever color="white" size={16}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
