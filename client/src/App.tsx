import React, { useState, ChangeEvent, FormEvent } from 'react'
import { getData } from './utils/data-utils'

import './App.css'
import GameLibraryDisplay from './components/game-library-container/GameLibraryDisplay'
import LoginForm from './components/login-container/LoginForm'
import LogoDisplay from './components/logo-container/LogoDisplay'

// TypeScript declarations
type User = {
  id: number
  name: string
  email: string
  password: string
}

const defaultFormFields = {
  email: '',
  password: '',
}

const App = () => {
  const [user, setUser] = useState<User | null>()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  // handle input changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="MainContainer">
      <LogoDisplay />
      <LoginForm email={email} password={password} handler={handleChange} />
      <GameLibraryDisplay />
    </div>
  )
}

export default App
