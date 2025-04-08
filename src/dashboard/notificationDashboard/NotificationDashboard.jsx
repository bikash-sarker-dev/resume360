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
    <div className="max-w-4xl mx-auto p-6 relative">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Notifications
      </h1>

      <div className="flex justify-between items-center mb-6">
        <select
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm font-medium"
        >
          Mark All as Read
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center">
          No new notifications for the selected filter.
        </p>
      ) : (
        <ul className="space-y-4">
          {filtered.map((n) => (
            <li
              key={n.id}
              className={`p-4 border rounded-md flex items-start justify-between gap-4 shadow-sm ${
                n.unread ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <div className="flex gap-3">
                {getIcon(n.type)}
                <div>
                  <p
                    className={`text-sm ${
                      n.unread
                        ? 'font-semibold text-gray-900'
                        : 'text-gray-700'
                    }`}
                  >
                    {n.message}
                  </p>
                  <p className="text-xs text-gray-500">{n.timestamp}</p>
                </div>
              </div>
              <div className="text-sm">
                <button
                  disabled={!n.unread}
                  onClick={() => handleView(n)}
                  className={`${
                    n.unread
                      ? 'text-blue-600 hover:underline'
                      : 'text-gray-400 cursor-not-allowed'
                  } font-medium`}
                >
                  {n.actionText}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      
      {selectedNotification && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setSelectedNotification(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default NotificationDashboard;