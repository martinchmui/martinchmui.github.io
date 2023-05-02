import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className='contactdiv container' id='contact'>
            <h1 className='heading'>Contact</h1>
            <div className='contactcontent'>
                <a className='contactlink' href='mailto:martinchmui@hotmail.com'>
                    <i class="fa-solid fa-envelope"></i> martinchmui@gmail.com
                </a>
            </div>
        </div>
    );
};

export default Contact;