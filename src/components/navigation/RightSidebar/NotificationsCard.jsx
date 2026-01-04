import React from 'react';
import { Bug, User, Radio } from 'lucide-react';
import { useNotifications } from '../../../context/NotificationContext';

// const notifications = [
//   {
//     id: 1,
//     icon: Bug,
//     title: 'You have a bug that needs...',
//     time: 'Just now',
//     bg: 'bg-sky-100',
//   },
//   {
//     id: 2,
//     icon: User,
//     title: 'New user registered',
//     time: '59 minutes ago',
//     bg: 'bg-slate-100',
//   },
//   {
//     id: 3,
//     icon: Bug,
//     title: 'You have a bug that needs...',
//     time: '12 hours ago',
//     bg: 'bg-sky-100',
//   },
//   {
//     id: 4,
//     icon: Radio,
//     title: 'Andi Lane subscribed to you',
//     time: 'Today, 11:59 AM',
//     bg: 'bg-slate-100',
//   },
// ];

const NotificationsCard = () => {
  const { notifications, markAsRead } = useNotifications();
  return (
    <div className="rounded-2xl bg-(--bg) text-(--text) px-5">
      <h3 className="mb-4 text-lg font-semibold">Notifications</h3>

      <div className="space-y-4 ">
        {notifications.map(({ id, icon: Icon, title, time, bg }) => (
          <div key={id} className="flex gap-3 ">
            {/* Icon */}
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${bg}`}
            >
              <Icon size={18} className="text-gray-800" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm font-medium leading-snug text-(--text)">
                {title}
              </p>
              <p className="text-sm text-gray-400">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsCard;
