
import { useNavigate } from 'react-router'
import { client } from '../../service/client'
import { Input } from '../Input/Input.js'
import './stylelogin.css'

export const NewLog = () => {
  let login = ''
  let password = ''

  const navigate = useNavigate()

  const handlerClick = () => {
    client.post('/log', { login, password }).then((response) => {
      navigate('/home')
    })
  }

  const handlerChangeLogin = (event) => {
    login = event.target.value
  }

  const handlerChangePassword = (event) => {
    password = event.target.value
  }

  return (
    <div className='form-container'>
      <form className='form-style'>
        <div className='form-inputs'>
          <label>Login</label><br />
          <Input onChange={handlerChangeLogin} /><br />
          <label>Password</label><br />
          <Input onChange={handlerChangePassword} /><br />
          <a href='#'>Esqueceu a Senha? </a><br />
          <button className='form-button' onClick={handlerClick} type='button'>Log</button>
        </div>
      </form>
    </div>
  )
}
