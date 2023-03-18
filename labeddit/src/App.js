import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import LabedditContext from './Contexts/LabedditContext';
import Router from './Routes/Router';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;  
  }
`;

const App = () => {
  const [postList, SetPostList] = useState([])
  const [commentList, SetCommentList] = useState([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [apelido, setApelido] = useState("")
  const [token, setToken] = useState("")
  const [content, setContent] = useState("")
  const [waiting, setWaiting] = useState(false)

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onChangeApelido = (event) => {
    setApelido(event.target.value)
  }
  const onChangeContent = (event) => {
    setContent(event.target.value)
  }


  const context = {
    postList,
    SetPostList,
    commentList,
    SetCommentList,
    token,
    setToken,
    waiting,
    setWaiting,
    email,
    setEmail,
    onChangeEmail,
    password,
    setPassword,
    onChangePassword,
    apelido,
    setApelido,
    onChangeApelido,
    content,
    setContent,
    onChangeContent
  }

  return (
    <>
      <GlobalStyle />
      <LabedditContext.Provider value={context}>
        <Router/>
      </LabedditContext.Provider>
    </>
  );
}

export default App;
