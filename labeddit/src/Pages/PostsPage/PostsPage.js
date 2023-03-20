import React, { useContext, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import { ButtonPost, Container, Input, Line } from './styled'
import post from '../../Buttons/post.png'
import line from '../../Buttons/line.png'
import CardPost from '../../Components/CardPost/CardPost'
import LabedditContext from '../../Contexts/LabedditContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../Constants/BASE_URL'


const PostsPage = () => {
  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const { token, setToken, postList, SetPostList, content, setContent, onChangeContent, waiting, setWaiting } = context
  
  setToken(window.localStorage.getItem("token"))
  useEffect(() => {
    allPosts()
  }, [token])
  
  const allPosts = async() => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: token
        }
      })
      SetPostList(response.data)
      setContent("")
      setWaiting(true)
    } catch (error) {
      console.log(error)
    }
  }
  
  const createPost = async() => {
    try {
      const body = {
        content
      }
      await axios.post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: token
        }
      })
      allPosts()
      setContent("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Header/>
    <Container>
        <Input type={"text"} placeholder="Escreva seu post..." value={content} onChange={onChangeContent} />
        <ButtonPost src={post} alt="button post" onClick={()=>createPost()} /> 
        <Line src={line} alt="divisor" />
        {waiting ? 
        postList?.sort((postA, postB) => {
          return postA.updatedAt < postB.updatedAt ? 1 : -1
        })
        .map((post) => {
          return <CardPost
          key={post.id}
          post={post}
          allPosts={allPosts}
          />
        }) : <h1>loading...</h1>}
    </Container>
    </>
  )
}

export default PostsPage