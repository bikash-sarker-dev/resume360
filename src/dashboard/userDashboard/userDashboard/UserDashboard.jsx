import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TbLockOpen2, TbLockX } from "react-icons/tb";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [blockTrue, setBlockTrue] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    //fetch('/fakeUsers.json')
    fetch("https://resume360-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.result))
      .catch((error) => {
        console.error("Error fetching users:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch users.",
        });
      });
  }, [blockTrue]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://resume360-server.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete response:", data);
            if (data && data.message === "The user Delete successfully") {
              setUsers((prevUsers) =>
                prevUsers.filter((user) => user._id !== id)
              );
              Swal.fire("Deleted!", data.message, "success");
            } else {
              Swal.fire("Error!", "User could not be deleted.", "error");
            }
          });
      }
    });
  };

  const blockAccount = async (user) => {
    console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to ${user?.block ? "Unblock !" : "Block !"}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#588568",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.patch(`/users/block/${user.email}`);
        console.log(res.data);
        setBlockTrue(!blockTrue);
        if (res.data.result.modifiedCount > 0) {
          Swal.fire({
            title: user?.block ? "Unblock!" : "Block!",
            text: `Your account has been ${
              user?.block ? "Unblock!" : "Block!"
            }`,
            icon: "success",
            confirmButtonColor: "#588568",
          });
        }
      }
    });
  };
  return (
    <div className="mx-auto w-11/12 p-4">
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-300 text-gray-700">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Block System</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id || index} className="hover:bg-gray-200">
                <td className="font-semibold text-center">{index + 1}</td>
                <td>{user.name || "N/A"}</td>
                <td>{user.email}</td>
                <td>{user.profession || "user"}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      user.terms
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {user.terms ? "Active" : "Inactive"}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => blockAccount(user)}
                    className={`px-3 py-1 rounded text-sm font-medium bg-r-primary text-r-background cursor-pointer hover:bg-r-info-card`}
                  >
                    {!user.block ? (
                      <div className="flex items-center gap-1">
                        <TbLockX /> Block
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <TbLockOpen2 /> Unblock
                      </div>
                    )}
                  </button>
                </td>

                <td className="flex space-x-2">
                  {/* <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    <FaEdit />
                                    </button> */}
                  {/* <button onClick={() => handleDelete(user._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                    <FaTrashAlt /> 
                                    </button> */}

                  <button
                    onClick={() => handleDelete(user._id)}
                    className="px-3 py-1 bg-white text-red-500 border border-white rounded hover:bg-red-100"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
