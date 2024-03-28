import React from 'react';

const PasswordField2 = ({ value, onChange }) => {
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

export default PasswordField2;
