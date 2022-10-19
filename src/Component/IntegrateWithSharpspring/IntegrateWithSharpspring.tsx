import { useEffect, useState } from 'react'
import sharpspringLogo from '../../assets/icons/sharpspring.svg'

const IntegrateWithSharpspring = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    if (errMsg.length > 0) {
      setTimeout(() => {
        setErrMsg('')
      }, 3000)
    }
  }, [errMsg])

  const onSubmitCred = () => {
    if (username.length === 0 || password.length === 0) {
      return setErrMsg('Fields cannot be empty')
    }
  }

  return (
    <div className='sharpspringLoginPage'>
      <div className="container">
        <div className="mainArea">
          <div className="logoArea">
            <img className="logo" src={sharpspringLogo} alt="Sharpspring" />
          </div>
          <div className="horizontalLine"></div>
          <p className='welcomeText'>Welcome Back!</p>
          <div className="inputArea">
            <input type="text" id="username" placeholder='Username' autoFocus value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="inputArea">
            <input type="text" id="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button className="submit" type="submit" onClick={onSubmitCred}>Log In</button>
          <p className='errorMessage'>{errMsg}</p>
        </div>
      </div>
    </div>
  )
}

export default IntegrateWithSharpspring