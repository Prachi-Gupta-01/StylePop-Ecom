import React, { useState } from 'react';
import { useAuth } from './AuthContext'; 
import { auth, googleProvider } from './firebase';
import { 
  signInWithPopup,
   signOut ,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword } from 'firebase/auth';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom';


export default function AuthForm() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const toggleMode = () => setIsSignup((prev) => !prev);

 const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Signup logic
        await createUserWithEmailAndPassword(auth, email, password); // Create user
        setMessage('Account created successfully!'); // Message for success
      } else {
        // Login logic
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        login(userCredential.user); // Log the user in
      }
      navigate('/'); // Navigate to home page
    }  catch (err) {
      console.error("Form submission error:", err); // Log the full error object
     /* setError(err.message || 'Error in form submission'); // Set a more informative error message*/
    }
  };  

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      login(result.user);
      setError(null);
      navigate('/')
    } catch (err) {
      console.error("Login error:", err);
      setError('Failed to sign in with Google');
    }
  };


  return (
    <div className="auth-container">
     <video autoPlay loop muted className="auth-background">
        <source src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="auth-form">
       
        <h2 className="auth-title">
          {isSignup ? 'Sign Up' : 'Login'}
        </h2>
        <form onSubmit={handleFormSubmit} className="auth-form-fields">
          {isSignup && (
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="auth-button">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
       <div>
       <span>Or</span>
        </div>
        <button onClick={handleGoogleLogin} className="google-button">
          Login with Google
        </button>

        <p className="auth-toggle">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={toggleMode}
            className="toggle-link"
          >
            {isSignup ? 'Login' : 'Sign up'}
          </button>
        </p>

        {message && (
          <p className="auth-message">
            {message}
          </p>
        )}
        {error && (
          <p className="auth-error">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
