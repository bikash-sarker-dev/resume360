import React, { useState } from "react";
import { FaBars, FaPaperPlane, FaPaperclip } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ChatPage = () => {
  const currentUser = {
    role: "admin", // change to 'user' to test user view
    name: "Admin",
    _id: "admin1",
  };

  const users = [
    {
      _id: "u1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      _id: "u2",
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  ];

  const [selectedUserId, setSelectedUserId] = useState(users[0]?._id || null);
  const [messages, setMessages] = useState({});
  const [inputMessage, setInputMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar
  const [isUserListOpen, setIsUserListOpen] = useState(false); // State to toggle user list on small devices

  const isAdmin = currentUser.role === "admin";
  const currentChatId = isAdmin ? selectedUserId : currentUser._id;

  const handleSend = () => {
    if (!inputMessage && !imagePreview) return;

    const newMessage = {
      from: currentUser.role,
      text: inputMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: imagePreview,
    };

    setMessages((prev) => ({
      ...prev,
      [currentChatId]: [...(prev[currentChatId] || []), newMessage],
    }));

    setInputMessage("");
    setImagePreview(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 mx-6 flex items-center justify-center">
      <div className="max-w-6xl w-full h-[90vh] flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar for Admin */}
        {isAdmin && (
          <div
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } w-1/3 bg-gray-50  sm:block lg:block`}
          >
            <h2 className="text-lg font-bold p-[18px] bg-r-info text-r-text">
              Users
            </h2>
            {users.map((user) => (
              <div
                key={user._id}
                onClick={() => setSelectedUserId(user._id)}
                className={`cursor-pointer px-4 py-3 hover:bg-r-primary/10 ${
                  selectedUserId === user._id ? "bg-r-primary/20" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-r-info via-r-card to-r-info text-r-text">
            <div className="flex items-center space-x-3">
              {isAdmin && (
                <img
                  src={
                    users.find((u) => u._id === selectedUserId)?.avatar ||
                    "https://via.placeholder.com/40"
                  }
                  alt="Selected User"
                  className="w-10 h-10 rounded-full"
                />
              )}

              <h3 className="text-lg font-semibold">
                {isAdmin
                  ? `Chat with ${
                      users.find((u) => u._id === selectedUserId)?.name ||
                      "User"
                    }`
                  : "Support Team"}
              </h3>
            </div>

            {/* Hamburger icon for small screens */}
            {isAdmin &&
              (isUserListOpen ? (
                <button
                  onClick={() => setIsUserListOpen(false)}
                  className="text-xl sm:hidden  text-r-text"
                >
                  <IoMdClose />
                </button>
              ) : (
                <FaBars
                  className="sm:hidden text-xl cursor-pointer"
                  onClick={() => setIsUserListOpen(true)} // Open user list on small screens
                />
              ))}
          </div>
          {/* User List on small devices */}
          <div
            className={`${
              isUserListOpen
                ? "block absolute overflow-y-auto top-44 rounded-2xl left-1/3  inset-0 z-10 w-[300px] h-[300px] bg-r-card bg-opacity-90 sm:hidden"
                : "hidden"
            }`}
          >
            <div className="p-4 flex shadow justify-between">
              <h2 className="text-lg font-bold  text-r-text">Users</h2>
            </div>
            {users.map((user) => (
              <div
                key={user._id}
                onClick={() => {
                  setSelectedUserId(user._id);
                  setIsUserListOpen(false); // Close user list after selecting a user
                }}
                className={`cursor-pointer px-4 py-3 hover:bg-r-primary/10 ${
                  selectedUserId === user._id ? "bg-r-primary/20" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message list (scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white break-words">
            {(messages[currentChatId] || []).map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  msg.from === currentUser.role ? "items-end" : "items-start"
                }`}
              >
                {/* Text bubble */}
                {msg.text && (
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[250px] md:max-w-[350px] break-words ${
                      msg.from === currentUser.role
                        ? "bg-r-primary text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <span className="break-words">{msg.text}</span>
                    <div className="text-xs  mt-1 text-right">{msg.time}</div>
                  </div>
                )}

                {/* Image without background */}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="attachment"
                    className="mt-2 max-w-[300px] rounded-md"
                  />
                )}
              </div>
            ))}
          </div>

          {/* 🔻 Image Preview Area - BOTTOM, above input */}
          {imagePreview && (
            <div className="relative w-[200px]  px-4 py-2 ">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-40 w-56  rounded-md mx-auto"
              />
              <button
                onClick={removeImage}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <IoMdClose />
              </button>
            </div>
          )}

          {/* Image Preview */}

          {/* Input */}
          <div className="flex items-center p-3 bg-r-card ">
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-gray-600 mr-3"
            >
              <FaPaperclip size={18} />
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <button className="text-blue-500 ml-3" onClick={handleSend}>
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
