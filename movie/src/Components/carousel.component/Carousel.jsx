import React, { useEffect, useRef, useState } from 'react'
import * as S from './Carousel.style'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { banner } from 'src/Utils/CarouselBanner'
import { AnimatePresence } from 'framer-motion'

export default function Carousel() {
  const [count, setCount] = useState(0)
  const gallery = banner

  const currentGallery = gallery[count]

  const callback = () => {
    setCount(count + 1)
    if (count > gallery.length - 2) setCount(0)
  }

  const [isRunning, setIsRunning] = useState(true)
  function useInterval(callback, delay) {
    const savedCallback = useRef()
    useEffect(() => {
      savedCallback.current = callback
    })
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }

      if (delay !== null) {
        let timer = setInterval(tick, delay)
        return () => clearInterval(timer)
      }
    }, [delay])
  }

  useInterval(callback, isRunning ? 5000 : null)

  const handleNextButton = () => {
    setCount(count + 1)
    if (count > gallery.length - 2) setCount(0)
  }

  const handleprevButton = () => {
    setCount(count - 1)
    if (count < gallery.length - 4) setCount(4)
  }

  return (
    <S.Container>
      <AnimatePresence>
        <S.ContainerLeft
          key={currentGallery.hinhAnh}
          src={currentGallery.hinhAnh}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          img={currentGallery.hinhAnh}
        >
          <S.CaptionContainer>
            <S.Caption>
              <S.BoxContain>
                <S.Name>{currentGallery.tenPhim}</S.Name>
              </S.BoxContain>
              <S.Title>{currentGallery.moTa.slice(0, 200)}...</S.Title>
              {/* button next and prevar */}
              <S.ButtonNext onClick={handleNextButton}>
                <AiOutlineRight />
              </S.ButtonNext>
              <S.ButtonPrev onClick={handleprevButton}>
                <AiOutlineLeft />
              </S.ButtonPrev>
            </S.Caption>
          </S.CaptionContainer>
        </S.ContainerLeft>
      </AnimatePresence>
      <S.ContainerRight>
        {gallery.map((item, index) => {
          return (
            <S.DetailContainer
              count={count}
              index={index}
              key={index}
              onClick={() => {
                setCount(index)
              }}
            >
              <div
                style={{
                  display: 'block',
                  width: '25%',
                  height: '100%'
                }}
              >
                <S.DetailImgItem src={item.hinhAnh} />
              </div>
              <S.DetaiFimItem>
                <S.NameFilm>{item.tenPhim}</S.NameFilm>
                <S.DetailFilm>{item.moTa.slice(0, 250)}...</S.DetailFilm>
              </S.DetaiFimItem>
            </S.DetailContainer>
          )
        })}
      </S.ContainerRight>
    </S.Container>
  )
}
