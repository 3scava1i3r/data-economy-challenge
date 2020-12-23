import React from 'react'

function Form() {
  return(
    <div className="mycard">
      <div className="auth-card input-field">
        <h2>Fill your Details</h2>
        <input
          type="text"
          placeholder="Full Name"
        />
        <input
          type="text"
          placeholder="Adhar Card number"
        />
        <input
          type="text"
          placeholder="Age"
        />
        <input
          type="text"
          placeholder="Address"
        />
        <button className="btn waves-effect waves-light #ff80ab pink accent-1"
        >Submit</button>

      </div>
    </div>
  )
}

export default Form
