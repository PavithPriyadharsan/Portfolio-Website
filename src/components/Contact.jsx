import React, { useState } from "react";
import axios from 'axios';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('https://getform.io/f/1aMMDPaW', {
          name,
          email,
          message,
        },{ headers: {'Accept': 'application/json'}});
  
        alert('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again.');
      }
    };

  return (
    <div
      name="Contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto mdh-screen">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-sky-500 duration-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me :)</p>
        </div>

        <div className=" flex justify-center items-center">
        <form onSubmit={handleSubmit} className=" flex flex-col w-full md:w-1/2" >

            <input type="text" name="name" placeholder="Your name" value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
              required />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" >
            </textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
    </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
