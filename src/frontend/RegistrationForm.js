// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/register', {
          username: formData.username,
          password: formData.password,
          email: formData.email,
          phone_number: formData.phoneNumber,
          confirm_password: formData.confirmPassword
        });
        const data = response.data;
        setMessage(data.message); // Set the success message
        // Clear form fields
        setFormData({
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          phoneNumber: ''
        });
        setErrors({}); // Clear any previous errors
      } catch (error) {
        setMessage(error.response.data.detail); // Set the error message
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (data.username.length < 5) {
      errors.username = 'Username must be at least 5 characters';
    }

    if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (data.email.indexOf('@') === -1 || data.email.indexOf('.') === -1) {
      errors.email = 'Invalid email address';
    }

    if (data.phoneNumber.length !== 11 || isNaN(data.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 11 digits';
    }

    return errors;
  };

  return (
    <div>
      {message && <p>{message}</p>} {/* Display message */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
