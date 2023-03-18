import React, { useContext } from 'react'
import { ButtonLogin, ButtonPageSignup, Container, Input, Line, Logo, Slogan } from './styled'
import logo from '../../Logos/logoWithName.png'
import login from '../../Buttons/login.png'
import line from '../../Buttons/line.png'
import signupPage from '../../Buttons/signupPage.png'
import { useNavigate, useParams } from 'react-router-dom'
import LabedditContext from '../../Contexts/LabedditContext'
import { goToPostsPage, goToSignupPage } from '../../Routes/Coordinator'
import axios from "axios"
import { BASE_URL } from '../../Constants/BASE_URL'

const LoginPage = () => {
  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const { email, setEmail, password, setPassword, onChangeEmail, onChangePassword, setToken } = context

  const loginUser = async () => {
    try {
      const body = {
        email,
        password
      }
      const response = await axios.post(`${BASE_URL}/users/login`, body)
      window.localStorage.setItem("token", response.data.token)
      await setToken(window.localStorage.getItem("token"))
      goToPostsPage(navigate)
      setEmail("")
      setPassword("")
    } catch (error) {
      console.log(error)
    }
  }

  const irSignupPage = () => {
    goToSignupPage(navigate)
    setEmail("")
    setPassword("")
  }

  return (
    <>
    <Container>
        <Logo src={logo} alt="logo" />
        <Slogan>O projeto de rede social da Labenu</Slogan>
        <label>
          <Input type={"email"} placeholder="E-mail" value={email} onChange={onChangeEmail} />
        </label>
        <label>
          <Input type={"password"} placeholder="Senha" value={password} onChange={onChangePassword} />
        </label>
        <ButtonLogin src={login} alt="button login" onClick={()=>loginUser()} />
        <Line src={line} alt="divisor" />
        <ButtonPageSignup src={signupPage} alt="button signup page" onClick={()=>irSignupPage()} />
    </Container>
    </>
  )
}

export default LoginPage