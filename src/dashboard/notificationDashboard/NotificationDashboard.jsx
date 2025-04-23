import React, { useState } from 'react';
import { User, CreditCard, Ticket, Bell, X  } from 'lucide-react';

const notificationsData = [
    {
      id: 1,
      type: "user",
      message: "New user registered: john@example.com",
      timestamp: "2025-04-08 10:30 AM",
      actionText: "View User Profile",
      unread: true,
    },
    {
      id: 2,
      type: "subscription",
      message: "User jane@example.com subscribed to Premium Plan.",
      timestamp: "2025-04-08 9:15 AM",
      actionText: "View Subscription Details",
      unread: true,
    },
    {
      id: 3,
      type: "ticket",
      message: "New support ticket from sam@example.com: Login issue...",
      timestamp: "2025-04-08 8:50 AM",
      actionText: "View Ticket",
      unread: true,
    },
    {
      id: 4,
      type: "user",
      message: "New user registered: alice@example.com",
      timestamp: "2025-04-08 7:45 AM",
      actionText: "View User Profile",
      unread: false,
    },
    {
      id: 5,
      type: "subscription",
      message: "User mark@example.com subscribed to Basic Plan.",
      timestamp: "2025-04-07 4:10 PM",
      actionText: "View Subscription Details",
      unread: true,
    },
    {
      id: 6,
      type: "ticket",
      message: "New support ticket from lily@example.com: Payment not going through.",
      timestamp: "2025-04-07 3:35 PM",
      actionText: "View Ticket",
      unread: false,
    },
    {
      id: 7,
      type: "user",
      message: "New user registered: bruce@example.com",
      timestamp: "2025-04-07 2:25 PM",
      actionText: "View User Profile",
      unread: true,
    },
    {
      id: 8,
      type: "subscription",
      message: "User emma@example.com upgraded to Premium Plan.",
      timestamp: "2025-04-07 11:50 AM",
      actionText: "View Subscription Details",
      unread: false,
    },
    {
      id: 9,
      type: "ticket",
      message: "New support ticket from leo@example.com: Unable to reset password.",
      timestamp: "2025-04-07 10:05 AM",
      actionText: "View Ticket",
      unread: true,
    },
    {
      id: 10,
      type: "user",
      message: "New user registered: olivia@example.com",
      timestamp: "2025-04-06 5:30 PM",
      actionText: "View User Profile",
      unread: true,
    },
    {
      id: 11,
      type: "user",
      message: "New user registered: ethan@example.com",
      timestamp: "2025-04-06 3:20 PM",
      actionText: "View User Profile",
      unread: true,
    },
    {
      id: 12,
      type: "user",
      message: "New user registered: mia@example.com",
      timestamp: "2025-04-06 1:45 PM",
      actionText: "View User Profile",
      unread: true,
    },
    {
      id: 13,
      type: "user",
      message: "New user registered: noah@example.com",
      timestamp: "2025-04-06 11:10 AM",
      actionText: "View User Profile",
      unread: true,
    },
    {
      id: 14,
      type: "user",
      message: "New user registered: ava@example.com",
      timestamp: "2025-04-06 9:55 AM",
      actionText: "View User Profile",
      unread: true,
    },
    {
      id: 15,
      type: "user",
      message: "New user registered: liam@example.com",
      timestamp: "2025-04-06 8:05 AM",
      actionText: "View User Profile",
      unread: true,
    }
  ];
  


const NotificationDashboard = () => {
  const [filter, setFilter] = useState('All');
  const [notifications, setNotifications] = useState(notificationsData);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const filterTypeMap = {
    'New User Registrations': 'user',
    'Subscription Updates': 'subscription',
    'New Support Tickets': 'ticket',
  };

  const filtered =
    filter === 'All'
      ? notifications
      : notifications.filter((n) => n.type === filterTypeMap[filter]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const handleView = (n) => {
    setSelectedNotification(n);
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === n.id ? { ...item, unread: false } : item
      )
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case 'user':
        return <User className="text-blue-500" />;
      case 'subscription':
        return <CreditCard className="text-green-500" />;
      case 'ticket':
        return <Ticket className="text-orange-500" />;
      default:
        return <Bell className="text-gray-500" />;
    }
  };

  return (
    <div className="">
      <div className="w-11/12 mx-auto p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <select
            className="border border-green-950 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-green-950"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>New User Registrations</option>
            <option>Subscription Updates</option>
            <option>New Support Tickets</option>
          </select>
          <button
            onClick={markAllAsRead}
            className="bg-r-accent text-r-info px-4 py-2 rounded hover:bg-green-900 text-sm font-medium hover:text-white"
          >
            Mark All as Read
          </button>
        </div>

        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center">
            No new notifications for the selected filter.
          </p>
        ) : (
          <>
            {/* Table format for medium screens and up */}
            <table className="hidden md:table w-full text-sm border-collapse">
              <thead>
                <tr className="bg-r-accent text-left text-black">
                  <th className="">Type</th>
                  <th className="">Message</th>
                  <th className="">Timestamp</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((n) => (
                  <tr
                    key={n.id}
                    className={`border border-green-900 ${
                      n.unread ? 'bg-gray-100' : 'bg-white'
                    }`}
                  >
                    <td className="p-2 flex items-center gap-2">
                      {getIcon(n.type)}
                      {n.type}
                    </td>
                    <td className="p-2">{n.message}</td>
                    <td className="p-2">{n.timestamp}</td>
                    <td className="p-2">
                      <button
                        disabled={!n.unread}
                        onClick={() => handleView(n)}
                        className={`${
                          n.unread
                            ? 'text-green-700 hover:underline'
                            : 'text-gray-400 cursor-not-allowed'
                        } font-medium`}
                      >
                        {n.actionText}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Card format for small screens */}
            <ul className="md:hidden space-y-4">
              {filtered.map((n) => (
                <li
                  key={n.id}
                  className={`p-4 border border-green-900 rounded-md shadow-sm ${
                    n.unread ? 'bg-gray-100' : 'bg-white'
                  }`}
                >
                  <div className="flex gap-3 items-start mb-2">
                    {getIcon(n.type)}
                    <div>
                      <p className={`text-sm font-medium ${n.unread ? 'text-green-900' : 'text-gray-700'}`}>
                        {n.message}
                      </p>
                      <p className="text-xs text-green-900">{n.timestamp}</p>
                    </div>
                  </div>
                  <div className="text-sm mt-2">
                    <button
                      disabled={!n.unread}
                      onClick={() => handleView(n)}
                      className={`${
                        n.unread
                          ? 'text-green-700 hover:underline'
                          : 'text-gray-400 cursor-not-allowed'
                      } font-medium`}
                    >
                      {n.actionText}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {selectedNotification && (
          <div className="fixed inset-0 bg-r-primary bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
              <button
                onClick={() => setSelectedNotification(null)}
                className="absolute top-2 right-2 text-green-900 hover:text-gray-700"
              >
                <X />
              </button>
              <h2 className="text-lg font-bold mb-4">Notification Details</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Type:</span>{' '}
                  {selectedNotification.type}
                </p>
                <p>
                  <span className="font-medium">Message:</span>{' '}
                  {selectedNotification.message}
                </p>
                <p>
                  <span className="font-medium">Timestamp:</span>{' '}
                  {selectedNotification.timestamp}
                </p>
                <p>
                  <span className="font-medium">Action:</span>{' '}
                  {selectedNotification.actionText}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="px-4 py-2 bg-r-accent text-white rounded hover:bg-green-900"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDashboard;