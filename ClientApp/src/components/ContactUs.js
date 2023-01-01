import React, { Component } from 'react';

export default class ContactUs extends Component {
    static displayName = ContactUs.name;
  
    render() {
      return (
        <div style={{ width: "50%"}}>
            <h1>Contact Us</h1>
            <div className='hover-2'>
                <h4><strong>Telephone</strong></h4>
                <p>+10101010101   +10101010101   +10101010101</p>
            </div>
            <br />
            <div className='hover-2'>
                <h4><strong>Location</strong></h4>
                <p>Nasr City, Giza</p>
            </div>
            <br />
            <div className='hover-2'>
                <h4><strong>Email Address</strong></h4>
                <p>PersonalTrainer@example.com</p>
            </div>
        </div>
      );
    }
}