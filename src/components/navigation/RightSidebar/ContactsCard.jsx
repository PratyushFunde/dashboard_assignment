import React from "react";
import { Avatar } from "antd";

const contacts = [
  {
    id: 1,
    name: "Natali Craig",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Drew Cano",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Orlando Diggs",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Andi Lane",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Kate Morrison",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 6,
    name: "Koray Okumus",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
];

const ContactsCard = () => {
  return (
    <div className="rounded-2xl bg-(--bg) text-(--text) p-4">
      <h3 className="mb-4 text-lg font-semibold">
        Contacts
      </h3>

      <div className="space-y-4 ">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center text-(--text) gap-3 cursor-pointer hover:bg-(--hover) rounded-lg p-1"
          >
            <Avatar src={contact.avatar} size={36} />
            <span className="text-sm font-medium text-(--text)">
              {contact.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsCard;
