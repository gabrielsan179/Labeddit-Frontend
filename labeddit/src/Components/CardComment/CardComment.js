import React, { useContext } from 'react'
import { Comment, Container, Conteudo, Creator, Icon, Likes, Reactions, Valor } from './styled'
import like from '../../Buttons/likeIcon.png'
import dislike from '../../Buttons/dislikeIcon.png'
import LabedditContext from '../../Contexts/LabedditContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../Constants/BASE_URL'

const CardComment = (props) => {
  const { comment, allComments } = props
  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const { token } = context

  const likeDislike = comment.likes - comment.dislikes
  
  const LikeOrDislikeComment = async(id, like) => {
    try {
      const body = {
        like
      }
      await axios.put(`${BASE_URL}/comments/${id}/like`, body, {
        headers: {
          Authorization: token
        }
      })
      allComments()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Container>
      <Creator>Enviado por: {comment.creator.name}</Creator>
      <Conteudo>{comment.content}</Conteudo>
        <Likes>
          <Icon src={like} alt="like" onClick={()=>LikeOrDislikeComment(comment.id, true)} />
          <Valor>{likeDislike}</Valor>
          <Icon src={dislike} alt= "dislike" onClick={()=>LikeOrDislikeComment(comment.id, false)} />
        </Likes>
    </Container>
  )
}

export default CardComment