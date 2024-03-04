import './App.css';
import React, { useState } from 'react';

/**
 * Represents the main application component.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {

  // State to track the login status
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  /**
   * Handles the form submission event.
   * @param {Event} event - The form submission event.
   */


  const [showLoginError, setShowLoginError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isLoginSuccessful = event.target.username.value === 'user' && event.target.password.value === 'password';
    setIsLoginSuccessful(isLoginSuccessful);
    setShowLoginError(!isLoginSuccessful);
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {isLoginSuccessful ? (
        <p>Welcome, user!</p>
      ) : (
        <div>
          {showLoginError && <p>Invalid username or password</p>}
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" name="username" required />
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            <br />

            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}


export default App;
