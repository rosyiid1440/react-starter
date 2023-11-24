import React from 'react'

const Button = (props) => {
  return (
    <>
      <button style={{ fontFamily:'rubik', backgroundColor: '#8BAC3E', color: 'white', borderRadius: '100px', padding: '10px 18px 10px 18px', border: 'none' }}>{props.title}</button>
    </>
  )
}

export default Button