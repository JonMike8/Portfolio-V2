import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <div className='info'>
            <ul className='contactList'>
                <li><a className='link' href='mailto:jmemoli@stevens.edu' target='_blank'><ion-icon className='icon' name="mail-unread-outline"></ion-icon>     jmemoli@stevens.edu</a></li>
            </ul>
        </div>
    </section>

  )
}
export default Contact
