import React from 'react';

const activities = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/40?img=12',
    title: 'You have a bug that needs...',
    time: 'Just now',
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/40?img=32',
    title: 'Released a new version',
    time: '59 minutes ago',
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/40?img=48',
    title: 'Submitted a bug',
    time: '12 hours ago',
  },
  {
    id: 4,
    avatar: 'https://i.pravatar.cc/40?img=56',
    title: 'Modified a data in Page X',
    time: 'Today, 11:59 AM',
  },
  {
    id: 5,
    avatar: 'https://i.pravatar.cc/40?img=68',
    title: 'Deleted a page in Project X',
    time: 'Feb 2, 2023',
  },
];

const ActivitiesCard = () => {
  return (
    <div className="rounded-2xl bg-(--bg) text-(--text) p-5">
      <h3 className="mb-6 text-lg font-semibold">Activities</h3>

      <div className="relative space-y-6 text-(--text)">
        {activities.map((item, index) => (
          <div key={item.id} className="relative flex gap-4">
            {/* Timeline line */}
            {index !== activities.length - 1 && (
              <span className="absolute left-5 top-10 h-full w-px bg-gray-200" />
            )}

            {/* Avatar */}
            <img
              src={item.avatar}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />

            {/* Content */}
            <div>
              <p className="text-base font-medium text-(--text) leading-snug">
                {item.title}
              </p>
              <p className="text-sm text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesCard;
