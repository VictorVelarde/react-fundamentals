// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleChange(event){
    const username = event.target.value
    setUsername(username.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(`Hello ${username}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleChange}/>
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
