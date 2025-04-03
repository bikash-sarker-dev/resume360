import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UserDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/fakeUsers.json') 
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => {
                console.error('Error fetching users:', error);
                Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to fetch users.' });
            });
    }, []);

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
                                <td>{user.role || 'user'}</td>
                                <td>
                                    <span className={`px-2 py-1 rounded ${
                                        user.status === 'active' ? 'bg-green-200 text-green-800' :
                                        user.status === 'inactive' ? 'bg-yellow-200 text-yellow-800' :
                                        'bg-red-200 text-red-800'
                                    }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="flex space-x-2">
                                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                                        Edit
                                    </button>
                                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                        Delete
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
