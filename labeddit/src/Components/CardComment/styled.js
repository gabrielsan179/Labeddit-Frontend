import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 15px;
padding: 10px;
background-color: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
width: 87.7vw;
margin-top: 12px;
`

export const Creator = styled.p`
font-family:  'IBM Plex Sans', sans-serif;
font-size: 12px;
font-weight: 400;
text-align: center;
color: #6F6F6F;
`

export const Conteudo = styled.p`
font-family:  'IBM Plex Sans', sans-serif;
font-size: 18px;
font-weight: 500;
text-align: left;
color: #000000;
`

export const Reactions = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
`

export const Likes = styled.div`
display: flex;
gap: 15px;
padding: 5px;
border: 1px solid #E0E0E0;
border-radius: 12px;
`

export const Icon = styled.img`
width: 14px;
height: 14px;
`

export const Valor = styled.p`
font-family:  'IBM Plex Sans', sans-serif;
font-size: 10px;
font-weight: 700;
text-align: center;
color: #6F6F6F;
`