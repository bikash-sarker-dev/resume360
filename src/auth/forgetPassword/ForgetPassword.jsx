import React from 'react'
import { Link, useNavigate } from 'react-router'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'

export default function ForgetPassword() {

  const {forgetPassword,user} = useAuth()
  const navigate = useNavigate()

  const handleForgetPassword = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;

    forgetPassword(email)
        .then(result => {
          // console.log(result.user)
          Swal.fire({
            title: 'Success',
            text: 'Passward Reset Email Sent! Please Check Your Mail',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          navigate('/login')
          form.reset()
        })
        .catch(error => {
          // console.log(error.message)
          Swal.fire({
            title: 'Error',
            text: "Email is Wrong! Please Check",
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
  }

  return (
    <div>
    <form  onSubmit={handleForgetPassword}>
      <fieldset className="fieldset">
        <label className="fieldset-label">Email</label>
        <input type="email" name="email" className="input w-full" placeholder="Enter Your Email" />
        <button className="btn bg-r-accent mt-4 text-r-text hover:bg-r-primary hover:text-white">Send Reset Email</button>
      </fieldset>
        <p className="text-center mt-4">Remember Your Password? <span className="underline"><Link to='/login' className="text-r-primary">Login</Link></span></p>
    </form>
    </div>
  )
}
