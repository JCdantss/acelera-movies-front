import { useNavigate } from 'react-router'
import { client } from '../../service/client'
import './style.css'

export const Login = () => {
  let login = ''
  let password = ''

  const navigate = useNavigate()

  const handlerClick = () => {
    client.post('/login', { login, password }).then((response) => {
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
    <div className="container">
      <form className='form'>
        <label>login</label><br />
        <input onChange={handlerChangeLogin} className="login" placeholder="Login"></input><br />
        <label>password</label><br />
        <input onChange={handlerChangePassword} className="password" placeholder="Password"></input><br />
        <a href="#">Esqueceu sua senha?</a><br />
        <button className='button-style' onClick={handlerClick} type='button'>Click here</button><br />
      </form>
    </div>
  )
}
