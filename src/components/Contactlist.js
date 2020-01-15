import React from 'react';
import Contact from "./contact"


function ContactList () {
    const names = [
        {
        name: 'Paul Wade',
        avatar : 'https://randomuser.me/api/portraits/men/54.jpg',
        online : true
        },
    
        {
            name: 'John Carter',
            avatar : 'https://randomuser.me/api/portraits/men/19.jpg',
            online : false
        },
    
        {
            name : 'Marie Caldwell',
            avatar : 'https://randomuser.me/api/portraits/women/53.jpg',
            online : true
        },
    
        {
            name : 'Ann Gregory',
            avatar : 'https://randomuser.me/api/portraits/women/13.jpg',
            online : true
        },
    
        {
            name : 'Dana George',
            avatar : 'https://randomuser.me/api/portraits/women/22.jpg',
            online : false
        }
    ]

    return (
      <ul>
        {
         names.map(item => 
        <Contact name = {item.name} avatar = {item.avatar} online = {item.online} />)
        }
      </ul>
    );
  }

export default ContactList;