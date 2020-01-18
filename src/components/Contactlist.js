import React from "react";
import Contact from "./contact";

class ContactList extends React.Component {
  render() {
    const names = [
      {
        avatar: "https://randomuser.me/api/portraits/men/54.jpg",
        name: "Robert",
        status: true
      },

      {
        avatar: "https://randomuser.me/api/portraits/women/76.jpg",
        name: "Julia",
        status: false
      },

      {
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        name: "Gregory",
        status: true
      },

      {
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        name: "Jill",
        status: false
      },

      {
        avatar: "https://randomuser.me/api/portraits/women/19.jpg",
        name: "Ruth",
        status: true
      }
    ];

    return (
      <ul>
        {names.map(item => (
          <Contact key={item.name} name={item.name} avatar={item.avatar} status={item.status} />
        ))}
      </ul>
    );
  }
}

export default ContactList;
