import React from 'react'
import s from './ErrorMessage.module.css'

const ErrorMessage = ({message = "Error"}) => {
  return (
    <div> <p>{message}</p></div>
  )
}

export default ErrorMessage