import React from 'react';


function ContactList () {
    const names = ['Alexa Hayes','Fred','Mario','Lisa','Roland'];
    return (
      <ul>
        {
          names.map(member => <li key={member}>{member}</li>)
        }
      </ul>
    );
  }

export default ContactList;