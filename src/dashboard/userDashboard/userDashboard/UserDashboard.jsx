import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const UserDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //fetch('/fakeUsers.json') 
        fetch('https://resume360-server.vercel.app/users')
            .then((res) => res.json())
            .then((data) => setUsers(data.result))
            .catch((error) => {
                console.error('Error fetching users:', error);
                Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to fetch users.' });
            });
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This user will be permanently deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://resume360-server.vercel.app/users/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log('Delete response:', data);
                        if (data && data.message === "The user Delete successfully") {
                            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
                            Swal.fire('Deleted!', data.message, 'success');
                        } else {
                            Swal.fire('Error!', 'User could not be deleted.', 'error');
                        }
                    })
                   
            }
        });
    };
    return (
        <div className="mx-auto w-11/12 p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Manage Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id || index} className="hover:bg-gray-100">
                                <td className="font-semibold text-center">{index + 1}</td>
                                <td>{user.name || 'N/A'}</td>
                                <td>{user.email}</td>
                                <td>{user.profession || 'user'}</td>
                                {/* <td>
                                    <span className={`px-2 py-1 rounded ${
                                        user.terms === 'true' ? 'bg-green-200 text-green-800' :
                                        user.terms === 'false' ? 'bg-yellow-200 text-yellow-800' :
                                        'bg-red-200 text-red-800'
                                    }`}>
                                        {user.terms}
                                    </span>
                                </td> */}





<td>
    <span className={`px-2 py-1 rounded text-sm font-medium ${
        user.terms ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
    }`}>
        {user.terms ? 'Active' : 'Inactive'}
    </span>
</td>



                                <td className="flex space-x-2">
                                    {/* <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    <FaEdit />
                                    </button> */}
                                    <button onClick={() => handleDelete(user._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
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
