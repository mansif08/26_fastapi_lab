import React from 'react';

const PasswordInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default PasswordInput;
