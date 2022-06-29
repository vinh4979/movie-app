import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 67vh;
`
export const ContainerLeft = styled(motion.div)`
  position: relative;
  display: block;
  width: 75%;
  /* height: 100%; */
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: center center;
  background-size: cover;
`

export const CaptionContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 30%;
  /* border: 1px solid yellow; */
  /* background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  ); */
  background-color: rgb(0, 0, 0, 0.5);
`

export const Caption = styled.div`
  position: relative;
  /* border: 1px solid red; */
  padding: 0 150px;
`

export const BoxContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 45px;
  border-radius: 10px;
  background-color: orange;
`

export const Name = styled.h4`
  font-weight: 700;
  color: #fff;
`

export const Title = styled.p`
  font-weight: 400;
  color: #fff;
`

export const ButtonNext = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: none;
  outline: none;
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    background-color: yellow;
  }
`
export const ButtonPrev = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: none;
  outline: none;
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translate(50%, -50%);
  background-color: none;
  &:hover {
    background-color: yellow;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: 100%;
  background-color: gray;
`

// decsription: DetailContainer background show active by carousel banner
export const DetailContainer = styled.div`
  display: inline-n;
  width: 100%;
  height: 130px;
  background-color: ${props => (props.count === props.index ? 'orange' : '')};
  display: flex;
  flex-wrap: wrap;
`

export const DetailImgItem = styled.img`
  width: 93%;
  height: 93%;
  padding: 5px;
`

export const DetaiFimItem = styled.div`
  width: 75%;
  height: 100%;
  color: white;
`

export const NameFilm = styled.h3`
  font-weight: bold;
  text-transform: capitalize;
  margin: 5px 5px;
`

export const DetailFilm = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 5px;
  margin: 5px 5px;
`
