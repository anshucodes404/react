import React from 'react'

const Button = ({color}) => {
  return (
    <>
      <button className={`${color} w-16 rounded-md py-2 `}>{color.split("-")[1]}</button>
    </>
  )
}

export default Button
