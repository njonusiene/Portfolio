import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email and do not leave a blank space. :)');
      return;
    }

    const newData = {
      data: {
        email: email,
      },
    };

    try {
      const response = await fetch(
        'https://api.apispreadsheets.com/data/k1oV66P5rpkqtqmL/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        }
      );

      if (response.status === 201) {
        alert('Thank You! I will get in touch as soon as posible');
        setEmail('');
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className='contacts'>
      <ul>
        <li>
          <i className="fa-solid fa-phone"></i> +370 60485639
        </li>
        <br />
        <li>
          <i className="fa-solid fa-envelope"></i> jonusiene.n@gmail.com
        </li>
      </ul>
      <br /> <br />
      <h2>Let's get in touch:</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
