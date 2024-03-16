import { useEffect, useState } from 'react'
import './App.css'

import { Button } from './components/ui/button'
import{ Input } from './components/ui/input'
import { Label } from "./components/ui/label"




function App() {

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

  


  useEffect(() => {
    if(confirmPassword !== password) {      
      setPasswordError(true)
      setPasswordErrorMessage("Passwords do not match!")
      return
    }
    if(password.length < 6) {
      setPasswordError(true)
      setPasswordErrorMessage("Passwords must have at least 6 digits!")
      return
    }

    setPasswordError(false)
    setPasswordErrorMessage("")
  }, [confirmPassword, password])
  
  const handleSubmit = (e) => {
    e.preventDefault()    
    
    if (passwordError){     
      console.log("pass no match");
      return
    }

    console.log("Registered");
  }

  return (
    <div className='flex flex-col py-6 px-12 gap-6'>
      <h1 className='text-2xl font-bold'>Form Validation Test</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-1/3'>
        <Input type='email' placeholder='E-mail' required/>
        <Input type='text' placeholder='Country' required/>
        <Input type='text' placeholder='Zip Code' required/>
        <div className='flex'>
          <Input type='password' placeholder='Password' id="Password" className={!passwordError ? 'border-lime-300' : 'border-red-400'} value={password} onChange={e => setPassword(e.target.value)} required/>
          <Label htmlFor="Password" className="self-center text-red-600">{passwordErrorMessage}</Label>
        </div>
        <div className='flex'>
          <Input type='password' placeholder='Confirm Password' className={!passwordError ? 'border-lime-300' : 'border-red-400'} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
          <Label htmlFor="Confirm Password" className="self-center text-red-600">{passwordErrorMessage}</Label>
        </div>

        <Button type="submit">Register</Button>
      </form>
      
      
    </div>
  )
}

export default App
