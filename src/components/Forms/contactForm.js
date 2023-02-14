import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import { send } from 'emailjs-com';

function ContactForm() {

    // Save the STATE
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [user, setUser] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Methods to handle Form Data
    const handleSubmit = (e) => {
        e.preventDefault();

        // create/put together  temp data
        const newUser = {
            // "KEY" : 'VALUE FROM STATE'
            username: username,
            email: email,
            message: message
        }

        console.log(newUser);

        // Send to API endpoint (Server)

        // CLEAR our STATE/ field inputs (UPDATING STATE)
        setUsername("");
        setEmail("");
        setMessage("");
        //return ""
    }

    const handleChange = (e) => {
        console.log(e)
        console.log(e.value)
        // call SetUser Method to update STATE
        // ...user Taking the current/previous 'user' STATE
        // input 'name' KEY 
        // input VALUE
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className=" card contact_cards" style={{display: "flex", justifyContent:"center", alignItems:"center", height:"150px", width:"325px"}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Enter Name</label>
                    <input 
                        type="text"
                        name="name"
                        onChange={(e) => setUsername(e.target.value)}
                        //onChange={handleChange}
                        className="contact-input"
                        value={username}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        //onChange={handleChange}
                        className="contact-input"
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor="message" >Enter Message</label>
                    <input 
                        type="text"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        //onChange={handleChange}
                        className="contact-input"
                        value={message}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;