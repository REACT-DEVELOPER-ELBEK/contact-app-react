import React from 'react'
import './ContactList.scss'
import '../contactForms/ContactForms'
// test

const ContactList = () => {
  return (
    <div className="list">
        <div className="container">
            <div className="list__wrapper">
                <div className="list__parent">
                    <div className="list__child">
                        <h2>First name: </h2>
                        <h2>Last name: </h2>
                        <h2>Phone: </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactList