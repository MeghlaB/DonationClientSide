
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AddProvider/AuthProvider';
import Swal from 'sweetalert2';
import login from '../assets/Login-rafiki.svg';
import { ThemeContext } from '../AddProvider/ThemeProvider';

export default function Register() {
  const { theme } = useContext(ThemeContext);
  const { creatUser, setUser, UpdateProfile, GoogleLogin, setLoading } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    const Name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter.");
    }

    creatUser(email, password)
      .then((result) => {
        const newUser = { Name, email };
        setUser(result.user);
        e.target.reset();
        Swal.fire({
          title: 'Success!',
          text: 'Registration successful!',
          icon: 'success',
          confirmButtonText: 'Done'
        });
        UpdateProfile({ displayName: Name, photoURL: photo })
          .then(() => {
            setLoading(false);
            navigate('/');
          })
          .catch((err) => {
            setLoading(false);
            setUser(err.message);
          });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: `Registration failed! Error: ${err.code}`,
          icon: 'error',
          confirmButtonText: 'Done'
        });
      });
  };

  const handleGoogle = () => {
    GoogleLogin()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: 'Success!',
          text: 'Registration successful!',
          icon: 'success',
          confirmButtonText: 'Done'
        });
        if (result.user) {
          setTimeout(() => {
            navigate(location?.state ? location.state : '/');
          }, 1000);
        }
      })
      .catch((err) => {
        setUser(err.message);
      });
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="hero bg-gradient-to-r min-h-screen flex items-center justify-center py-14 lg:py-16 ">
        <div className="hero-content flex-col lg:flex-row-reverse items-center gap-10 w-full max-w-6xl">
          {/* Image Section */}
          <div className={`text-center lg:text-left lg:w-1/2 pt-3 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : ''}`}>
            <h1 className={`text-3xl font-bold mb-6 text-center transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Welcome Back!
            </h1>
            <img
              src={login}
              alt="Login Illustration"
              className="w-3/4 mx-auto lg:mx-0 rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>

          {/* Form Section */}
          <div className="min-h-screen flex items-center justify-center">
            <form
              onSubmit={handleRegister}
              className={`max-w-sm p-8 mx-auto rounded-lg shadow-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}
            >
              <h2 className="text-2xl font-bold text-center mb-6">Register to Your Account</h2>

              {/* Name Input */}
              <div className="form-control mb-4">
                <label className={`label ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className={`input input-bordered w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500`}
                  required
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control mb-4">
                <label className={`label ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span>Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Enter your photo URL"
                  name="photo"
                  className={`input input-bordered w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500`}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-control mb-4">
                <label className={`label ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`input input-bordered w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500`}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control mb-4">
                <label className={`label ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span>Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  name="password"
                  className={`input input-bordered w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500`}
                  required
                />
                {error && <p className="text-red-500">{error}</p>}
              </div>

              {/* Submit Button */}
              <div className="form-control mt-4">
                <button className="btn border-none bg-secondary hover:bg-primary text-white w-full transition-colors duration-300">
                  Register
                </button>
              </div>

              {/* Login Redirect */}
              <div className="text-center mt-6">
                <p>
                  Already have an account?{' '}
                  <NavLink to="/login" className="text-blue-700 underline">
                    Login
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
