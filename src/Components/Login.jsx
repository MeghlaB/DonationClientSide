import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider';
import Swal from 'sweetalert2';
import login from '../assets/Login-rafiki.svg'
import { ThemeContext } from '../AddProvider/ThemeProvider';


export default function Login() {
  const { loginuser, setUser, user, UpdateProfile, GoogleLogin, setLoading } = useContext(AuthContext)
  const { theme } = useContext(ThemeContext)

  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [showpassword, setShowPassword] = useState(false)
  const handeleLogin = e => {
    e.preventDefault()
    setError('')
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginuser(email, password)
      .then((result) => {
        setUser(result.user)
        if (result.user) {
          Swal.fire({
            title: 'Success!',
            text: 'Log in successful!',
            icon: 'success',
            confirmButtonText: 'Done'
          })
          setTimeout(() => {
            navigate(location?.state ? location.state : '/')
          }, 1000)
        }

      })
      .catch((err) => {
        setUser(err.message)
        Swal.fire({
          title: 'Error!',
          text: `Log out :${err}`,
          icon: 'error',
          confirmButtonText: 'Done'
        })
      })
  }
  const handleGoogle = () => {
    GoogleLogin()
      .then((result) => {
        setUser(result.user)
        Swal.fire({
          title: 'Success!',
          text: 'Registration successful!',
          icon: 'success',
          confirmButtonText: 'Done'
        })
        if (result.user) {
          setTimeout(() => {
            navigate(location?.state ? location.state : '/')
          }, 1000)
        }
      })
      .catch((err) => {
        setUser(err.message)
      })
  }
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="hero bg-gradient-to-r  min-h-screen flex items-center justify-center py-10 lg:py-16">
        <div className="hero-content flex-col lg:flex-row-reverse items-center gap-10 w-full max-w-6xl">
          {/* Image Section */}
          <div
            className={`text-center lg:text-left mt-10 lg:w-1/2 p-8 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : ''
              }`}
          >
            <h1
              className={`text-3xl font-bold mb-6 text-center transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
            >
              Welcome Back!
            </h1>
            <img
              src={login}
              alt="Login Illustration"
              className="w-3/4 mx-auto lg:mx-0 rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
          {/* Form Section */}
          <div className="min-h-screen flex items-center justify-center ">
            <form
              onSubmit={handeleLogin}
              className={`max-w-sm p-8 mx-auto rounded-lg shadow-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
                }`}
            >
              <h2 className="text-2xl font-bold text-center mb-6">
                Login to Your Account
              </h2>

              {/* Email Input */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className={`label-text ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`input input-bordered w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'
                    } focus:ring-2 focus:ring-purple-500`}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className={`label-text ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Password
                  </span>
                </label>
                <input
                  name='password'
                  type={showpassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className={`input input-bordered w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'
                    } focus:ring-2 focus:ring-purple-500`}
                  required
                />
                {error && <p className="text-red-500">{error}</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-purple-500">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* Login Button */}
              <div className="form-control mt-4">
                <button className="btn btn-primary bg-purple-600 hover:bg-purple-700 text-white w-full transition-colors duration-300">
                  Login
                </button>
              </div>

              {/* Google Login */}
              <div className="text-center my-4">
                <button
                  onClick={handleGoogle}
                  type="button"
                  className="btn border border-blue-950  lg:text-lg hover:bg-sky-950 hover:text-white flex flex-col lg:flex-row items-center justify-center w-full transition-colors duration-300"
                >
                  <FcGoogle className="mr-2 lg:mr-0 lg:mb-0 mb-2" />
                   Google
                </button>
              </div>


              {/* Sign-up Redirect */}
              <div className="text-center mt-6">
                <p>
                  Don't have an account?{' '}
                  <NavLink to={'/register'} className="text-blue-700 underline">
                    Register
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}
