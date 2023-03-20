import React, { useContext, useEffect } from 'react'
import CardPost from '../../Components/CardPost/CardPost'
import Header from '../../Components/Header/Header'
import { ButtonComment, Container, Input, Line } from './styled'
import comment from '../../Buttons/comment.png'
import line from '../../Buttons/line.png'
import CardComment from '../../Components/CardComment/CardComment'
import { useNavigate, useParams } from 'react-router-dom'
import LabedditContext from '../../Contexts/LabedditContext'
import axios from 'axios'
import { BASE_URL } from '../../Constants/BASE_URL'

const CommentsPage = () => {
  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const pathParams = useParams()
  const postId = pathParams.id
  const { token, setToken, commentList, SetCommentList, content, setContent, onChangeContent, waiting, setWaiting } = context

  setToken(window.localStorage.getItem("token"))
  useEffect(() => {
    allComments()
  }, [token])

  const allComments = async() => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${postId}`, {
        headers: {
          Authorization: token
        }
      })
      SetCommentList(response.data)
      setContent("")
      setWaiting(true)
    } catch (error) {
      console.log(error)
    }
  }

  const createComment = async() => {
    try {
      const body = {
        content
      }
      await axios.post(`${BASE_URL}/comments/${postId}`, body, {
        headers: {
          Authorization: token
        }
      })
      allComments()
      setContent("")
    } catch (error) {
      console.log(error)
    }
  }

  console.log(commentList)
  return (
    <>
    <Header/>
    <Container>
        {waiting ? 
        <CardPost
          key={commentList.id}
          post={commentList}
          allPosts={allComments}
        />
        : <h1>loading...</h1>}
        <Input type={"text"} placeholder="Adicionar comentário" value={content} onChange={onChangeContent} />
        <ButtonComment src={comment} alt="comment" onClick={()=>createComment()} />
        <Line src={line} alt="divisor" />
        {waiting ?
        commentList?.allComments?.sort((commentA, commentB) => {
          return commentA.updatedAt < commentB.updatedAt ? 1 : -1
        })
        .map((comment)=> {
          return <CardComment
            key={comment.id}
            comment={comment}
            allComments={allComments}
          />
        }) : <h1>loading...</h1>}
    </Container>
    </>
  )
}

export default CommentsPage