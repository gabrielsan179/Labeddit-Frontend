import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import { A, ButtonSignup, Container, Input, Label, Span, Text, Title } from './styled'
import signup from '../../Buttons/signup.png'
import LabedditContext from '../../Contexts/LabedditContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from '../../Constants/BASE_URL'
import { goToLoginPage } from '../../Routes/Coordinator'

const SignupPage = () => {
  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const { email, setEmail, password, setPassword, apelido, setApelido, onChangeEmail, onChangePassword, onChangeApelido } = context

  const signupUser = async () => {
    try {
      const body = {
        name: apelido,
        email,
        password
      }
      await axios.post(`${BASE_URL}/users/signup`, body)
      goToLoginPage(navigate)
      setEmail("")
      setPassword("")
      setApelido("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Header/>
    <Container>
        <Title>Olá, boas vindas ao LabEddit ;)</Title>
        <Input type={"text"} placeholder="Apelido" value={apelido} onChange={onChangeApelido} />
        <Input type={"email"} placeholder="E-mail" value={email} onChange={onChangeEmail} />
        <Input type={"password"} placeholder="Senha" value={password} onChange={onChangePassword} />
        <Text>Ao continuar, você concorda com o nosso <A>Contrato de usuário</A> e nossa <A>Política de Privacidade</A></Text>
        <Label>
            <input type={"checkbox"} />
            <Span>Eu concordo em receber emails sobre coisas legais no Labeddit</Span>
        </Label>
        <ButtonSignup src={signup} alr="button signup" onClick={()=>signupUser()} />
    </Container>
    </>
  )
}

export default SignupPage