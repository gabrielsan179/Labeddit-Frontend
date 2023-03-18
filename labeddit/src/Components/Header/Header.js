import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button, Container, Logo, Div } from './styled'
import logo from '../../Logos/logo.png'
import closeComments from '../../Buttons/closeComment.png'
import { goToLoginPage, goToPostsPage } from '../../Routes/Coordinator'
import LabedditContext from '../../Contexts/LabedditContext'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathParams = useParams()
  const postId = pathParams.id
  const context = useContext(LabedditContext)
  const { setEmail, setPassword, setApelido, setToken, setContent } = context

  const irLoginPage = () => {
    setPassword("")
    setApelido("")
    setContent("")
    setEmail("")
    setToken("")
    localStorage.clear()
    goToLoginPage(navigate)
  }

  return (
    <Container>
      <Div>
        {location.pathname === `/comments/${postId}` ?
        <Logo src={closeComments} alt="close comment" onClick={()=>goToPostsPage(navigate)} /> : 
        <div></div>}
      </Div>
      <Logo src={logo} alt="logo" />
      <Div>
        {location.pathname === "/signup" ?
        <Button onClick={()=>irLoginPage()}>Entrar</Button> :
        <Button onClick={()=>irLoginPage()}>Logout</Button> }
      </Div>
    </Container>
  )
}

export default Header