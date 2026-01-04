import React, { createContext, useContext, useState } from 'react';
import { Bug, User, Radio } from 'lucide-react';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: Bug,
      title: 'You have a bug that needs...',
      time: 'Just now',
      bg: 'bg-sky-100',
      unread: true,
    },
    {
      id: 2,
      icon: User,
      title: 'New user registered',
      time: '59 minutes ago',
      bg: 'bg-slate-100',
      unread: false,
    },
    {
      id: 3,
      icon: Bug,
      title: 'You have a bug that needs...',
      time: '12 hours ago',
      bg: 'bg-sky-100',
      unread: false,
    },
    {
      id: 4,
      icon: Radio,
      title: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      bg: 'bg-slate-100',
      unread: false,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, unread: false } : n
      )
    );
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const ctx = useContext(NotificationContext);
  if (!ctx) {
    throw new Error('useNotifications must be used inside NotificationProvider');
  }
  return ctx;
};
