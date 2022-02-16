// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // With refs
  const usernameRef = React.useRef()
  const emailRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()

    const name = usernameRef.current.value // by React ref
    const email = emailRef.current.value // by React ref
    onSubmitUsername(`${name} at ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" ref={usernameRef}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" ref={emailRef}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
