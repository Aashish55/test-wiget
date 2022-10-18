import React, { useEffect, useState } from 'react'
import './IntegrateWithCampminder.css'
import campminderLogo from '../../assets/icons/campminderIcon.png'
import campminderAdminLogin from '../../assets/icons/campminderAdminLogin.png'


const IntegrateWithCampminder = () => {
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
    <div className='campminderLoginPage'>
      <div className="container">
        <div className="mainArea">
          <div className="logoArea">
            <img className="logo" src={campminderLogo} alt="Campminder" />
          </div>
          <div className="verticalLine"></div>
          <div className="columnContainer">
            <img className="adminIcon" src={campminderAdminLogin} alt="" />
            <div className="inputArea">
              <label htmlFor="username">username</label>
              <input type="text" id="username" autoFocus value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="inputArea">
              <label htmlFor="password">password</label>
              <input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="submit" type="submit" onClick={onSubmitCred}>Log In</button>
            <p className='errorMessage'>{errMsg}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntegrateWithCampminder