import React, { useState } from 'react';
import { FaPaperPlane, FaPaperclip } from 'react-icons/fa';

const ChatPage = () => {
  const currentUser = {
    role: 'admin', 
    name: 'Admin User',
    _id: 'admin1',
  };

  const users = [
    { _id: 'u1', name: 'John Doe', email: 'john@example.com', avatar: 'https://i.pravatar.cc/150?img=1' },
    { _id: 'u2', name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://i.pravatar.cc/150?img=2' },
  ];

  const [selectedUserId, setSelectedUserId] = useState(users[0]?._id || null);
  const isAdmin = currentUser.role === 'admin';

  const messages = [
    { from: 'user', text: 'Hi there!', time: '10:00 AM' },
    { from: 'admin', text: 'Hello! How can I help you?', time: '10:01 AM' },
    { from: 'user', text: 'I need help with my order', time: '10:02 AM' },
  ];

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-5xl w-full h-[90vh] flex bg-white shadow-lg rounded-lg overflow-hidden">
        
        {isAdmin && (
          <div className="w-1/3  bg-gray-50">
            <h2 className="text-lg font-bold p-[18px] bg-blue-500 text-white">Users</h2>
            {users.map((user) => (
              <div
                key={user._id}
                onClick={() => setSelectedUserId(user._id)}
                className={`cursor-pointer px-4 py-3 hover:bg-blue-100 ${
                  selectedUserId === user._id ? 'bg-blue-200' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img src={user.avatar} alt="" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex-1 flex flex-col">
     
          <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="" className="w-10 h-10 rounded-full" />
              <h3 className="text-lg font-semibold">
                {isAdmin ? 'Chat with User' : 'Support Team'}
              </h3>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'admin' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`px-4 py-2 rounded-lg max-w-[70%] ${
                    msg.from === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                  <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center p-3  bg-r-card">
            <label htmlFor="file-upload" className="cursor-pointer text-gray-600 mr-3">
              <FaPaperclip size={18} />
            </label>
            <input id="file-upload" type="file" className="hidden" />
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <button className="text-blue-500 ml-3">
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
