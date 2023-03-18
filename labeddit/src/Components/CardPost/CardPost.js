import React, { useContext } from 'react'
import { Comment, Container, Content, Creator, Icon, Likes, Reactions, Valor } from './styled'
import like from '../../Buttons/likeIcon.png'
import dislike from '../../Buttons/dislikeIcon.png'
import comment from '../../Buttons/commentIcon.png'
import axios from 'axios'
import { BASE_URL } from '../../Constants/BASE_URL'
import LabedditContext from '../../Contexts/LabedditContext'
import { useNavigate } from 'react-router-dom'
import { goToCommentsPage } from '../../Routes/Coordinator'

const CardPost = (props) => {
  const { post, allPosts } = props
  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const { token } = context

  const likeDislike = post.likes - post.dislikes

  const LikeOrDislikePost = async(id, like) => {
    try {
      const body = {
        like
      }
      await axios.put(`${BASE_URL}/posts/${id}/like`, body, {
        headers: {
          Authorization: token
        }
      })
      allPosts()
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <Container>
      <Creator>Enviado por: {post?.creator?.name}</Creator>
      <Content>{post.content}</Content>
      <Reactions>
        <Likes>
          <Icon src={like} alt="like" onClick={()=>LikeOrDislikePost(post.id, true)} />
          <Valor>{likeDislike}</Valor>
          <Icon src={dislike} alt= "dislike" onClick={()=>LikeOrDislikePost(post.id, false)} />
        </Likes>
        <Comment>
          <Icon src={comment} alt="comment" onClick={()=>goToCommentsPage(navigate, post.id)} />
          <Valor>{post.comments}</Valor>
        </Comment>
      </Reactions>

    </Container>
  )
}

export default CardPost