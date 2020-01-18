import React from 'react';
import Contact from "./contact"


function ContactList () {
    const names = [
    { 
      avatar:"https://randomuser.me/api/portraits/men/54.jpg",
      name:"Robert",
      status:true
    },

    {
      avatar:"https://randomuser.me/api/portraits/women/76.jpg",
      name:"Julia",
      status:true
    },

    {
      avatar:"https://randomuser.me/api/portraits/women/23.jpg",
      name:"Jane",
      status:false
    },
      
    ]

    return (
      <ul>
        {
         names.map(item => 
        <Contact name = {item.name} avatar = {item.avatar} status = {item.status} />)
        }
      </ul>
    );
  }

export default ContactList;