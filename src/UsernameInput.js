import React from 'react';

const UsernameInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default UsernameInput;
