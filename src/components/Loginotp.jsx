import React from 'react'

function Loginotp() {
  return (
    <div>
      <h1>login with OTP</h1>
      <input type="number" placeholder='Enter mobile number' />
      <button onClick={()=> alert('OTP sent to the number')}>Get OTP</button>
      
    </div>
  )
}

export default Loginotp
