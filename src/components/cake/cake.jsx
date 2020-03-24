import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import Confetti from 'react-confetti'
import anime from 'animejs/lib/anime.es.js';
import Fade from '../fade/fade'
import { useWindowSize } from '../../hooks/useWindowSize/useWindowSize'

import { lighten, darken } from 'polished';

const vanilla = "white"
const chocolate = "#553c13"
const candleColor = "#7B020B"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const flicker = keyframes`
  0% {
    transform: skewX(5deg);
    box-shadow: 
        0 0 10px rgba(orange, 0.2),
        0 0 20px rgba(orange, 0.2),
        0 0 60px rgba(orange, 0.2),
        0 0 80px rgba(orange, 0.2) }
  25% {
    transform: skewX(-5deg);
    box-shadow:
        0 0 10px rgba(orange, 0.5),
        0 0 20px rgba(orange, 0.5),
        0 0 60px rgba(orange, 0.5),
        0 0 80px rgba(orange, 0.5) }
  50% {
    transform: skewX(10deg);
    box-shadow:
        0 0 10px rgba(orange, 0.3),
        0 0 20px rgba(orange, 0.3),
        0 0 60px rgba(orange, 0.3),
        0 0 80px rgba(orange, 0.3) }
  75% {
    transform: skewX(-10deg);
    box-shadow:
        0 0 10px rgba(orange, 0.4),
        0 0 20px rgba(orange, 0.4),
        0 0 60px rgba(orange, 0.4),
        0 0 80px rgba(orange, 0.4) }
  100% {
    transform: skewX(5deg);
    box-shadow:
        0 0 10px rgba(orange, 0.5),
        0 0 20px rgba(orange, 0.5),
        0 0 60px rgba(orange, 0.5),
        0 0 80px rgba(orange, 0.5) }
`

const CakeWrapper = styled.div`
  position: absolute;
  width: 250px;
  height: 200px;
  top: 40%;
  left: 50%;
  margin-top: -70px;
  margin-left: -125px;
`

const Plate = styled.div`
  position: absolute;
  width: 270px;
  height: 110px;
  bottom: -10px;
  left: -10px;
  background-color: #ccc;
  border-radius: 50%;
`
const Layer = styled.div`
  position: absolute;
  display: block;
  width: 250px;
  height: 100px;
  border-radius: 50%;
  background-color: ${chocolate};
  box-shadow:
      0 2px 0px ${lighten(0.1, chocolate)},
      0 6px 0px ${darken(0.12, chocolate)},
      0 10px 0px ${darken(0.14, chocolate)},
      0 14px 0px ${darken(0.16, chocolate)},
      0 18px 0px ${darken(0.18, chocolate)},
      0 22px 0px ${darken(0.20, chocolate)},
      0 26px 0px ${darken(0.22, chocolate)},
      0 30px 0px ${darken(0.24, chocolate)};

  &.layer-bottom {
    top: 66px;
  }

  &.layer-middle {
    top: 33px;
  }

  &.layer-top {
    top: 0;
  }
`

const Icing = styled.div`
  position: absolute;
  top: 2px;
  left: 5px;
  background-color: ${vanilla};
  width: 240px;
  height: 90px;
  border-radius: 50%;

  &:before {
      content: "";
      position: absolute;
      top: 4px;
      right: 5px;
      bottom: 6px;
      left: 5px;
      background-color: ${lighten(0.3, vanilla)};
      box-shadow:
          0 0 4px ${lighten(0.5, vanilla)},
          0 0 4px ${lighten(0.5, vanilla)},
          0 0 4px ${lighten(0.5, vanilla)};
      border-radius: 50%;
      z-index: 1;
}`

const Drip = styled.div`
  position: absolute;
  display: block;
  width: 50px;
  height: 60px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: ${vanilla};

  &.drip1 {
    top: 53px;
    left: 5px;
    transform: skewY(15deg);
    height: 48px;
    width: 40px;
  }


  &.drip2 {
    top: 69px;
    left: 181px;
    transform: skewY(-15deg);
  }


  &.drip3 {
    top: 54px;
    left: 90px;
    width: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`

const Candle = styled.div`
  position: absolute;
  background-color: ${candleColor};
  cursor: ${props => props.audioFinished ? 'pointer' : 'default'};
  width: 16px;
  height: 50px;
  border-radius: 8px / 4px;
  top: 0;
  left: 40%;
  margin-left: -8px;
  z-index: 10;

  & > .flame {
    cursor: pointer;
    pointer-events: ${props => props.animatedCandle ? 'auto' : 'none'};
  }


  &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 8px;
      border-radius: 50%;
  }

  &:after {
    position: absolute;
    top: -4px;
    left: 7px;
    width: 2px;
    height: 4px;
    background-color: #000;
    content: "";
  }
`

const Candle2 = styled.div`
  position: absolute;
  background-color: ${candleColor};
  cursor: ${props => props.audioFinished ? 'pointer' : 'default'};
  width: 16px;
  height: 50px;
  border-radius: 8px / 4px;
  top: 0;
  right: 40%;
  margin-left: -8px;
  z-index: 10;

  &:after {
    position: absolute;
    top: -4px;
    left: 7px;
    width: 2px;
    height: 4px;
    background-color: #000;
    content: "";
  }

  &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 8px;
      border-radius: 50%;
  }

  & > .flame {
    cursor: pointer;
    pointer-events: ${props => props.animatedCandle ? 'auto' : 'none'};
  }
`

const Years = styled.div`
  position: relative;
  top: 13px;
  left: 5px;
  color: white;
  font-size: 14px;
`

const Flame = styled.div`
  position: absolute;
  background-color: orange;
  width: 15px;
  height: 30px;
  border-radius: 10px 10px 10px 10px / 25px 25px 10px 10px;
  top: -34px;
  left: 50%;
  margin-left: -7.5px;
  z-index: 10;
  box-shadow:
      0 0 10px rgba(orange, 0.5),
      0 0 20px rgba(orange, 0.5),
      0 0 60px rgba(orange, 0.5),
      0 0 80px rgba(orange, 0.5);
  transform-origin: 50% 90%;
  animation: ${fadeIn} 0.3s ease-in, ${flicker} 1s ease-in-out alternate infinite;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: black;
  opacity: ${props => props.opacity};
`

const Text = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  font-size: 3rem;
  transform: translate(-50%, -60%);
  width: ${props => props.width}px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`



const Cake = ({handleFadeCakePage}) => {
  const [flame1, setFlame1] = useState(false)
  const [flame2, setFlame2] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const [audioFinished, setAudioFinished] = useState(false)
  const [animatedCandle, setAnimatedCandle] = useState(false)
  const [cakeFade, setCakeFade] = useState(true)
  const [fadeCandle1, setFadeCandle1] = useState(true)
  const [fadeCandle2, setFadeCandle2] = useState(true)  

  const size = useWindowSize();

  const animateCandle = async (number, numberToHide) => {
    if(animatedCandle || !audioFinished) return

    const translateXRatio = number === 1 ? 10 : -10
  
    await anime({
      targets: document.querySelector(`.candle${number}`),
      scale: window.screen.width > 720 ? 3 : 2,
      translateY: 50,
      translateX: translateXRatio,
      duration: 1000,
      easing: 'linear',
    })

    setCakeFade(false)

    await anime({
      targets: document.querySelector(`.candle${numberToHide}`),
      opacity: 0,
    })

    setAnimatedCandle(true)
  }

  useEffect(() => {
    const player = document.getElementById("player");
    player.addEventListener("play", function () {
        player.style.opacity = 0;
        setTimeout(() => {
          setFlame1(true)
          setOpacity(0.5)
        }, 2000)
    
        setTimeout(() => {
          setFlame2(true)
          setOpacity(0)
          player.muted = false
        }, 4000)
    
        setTimeout(() => {
          setAudioFinished(true)
        }, 52000)
    });
  }, [])

  useEffect(() => {
    if(!fadeCandle1 || !fadeCandle2) {
      setTimeout(() => {
        handleFadeCakePage()
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fadeCandle1, fadeCandle2])

  return (
    <>
      <audio muted controls id="player" style={
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 50, 
        }}>
        <source src="hb.mp3" />
      </audio>
      {opacity ? <Background opacity={opacity}/> : null}
      {flame2 ? <Confetti
        width={size.width}
        height={size.height}
        numberOfPieces={80}
      /> : null}
      <CakeWrapper>
        <Fade show={cakeFade}>
          <Plate id="plate" />
          <Layer className="layer-bottom"/>
          <Layer className="layer-middle"/>
          <Layer className="layer-top"/>
          <Icing  />
          <Drip className="drip1"></Drip>
          <Drip className="drip2"></Drip>
          <Drip className="drip3"></Drip>
        </Fade>
        <Candle animatedCandle={animateCandle} audioFinished={audioFinished} className="candle1" onClick={() => animateCandle(1, 2)}>
            <Years>2</Years>
            {flame1 ? 
              <Fade show={fadeCandle1}>
                <Flame onClick={() => audioFinished ? setFadeCandle1(false) : null} className="flame" /> 
              </Fade>: 
            null}
        </Candle>
        <Candle2 animatedCandle={animateCandle} audioFinished={audioFinished} className="candle2" onClick={() => animateCandle(2, 1)}>
            <Years>8</Years>
            {flame2 ? 
              <Fade show={fadeCandle2}>
                <Flame onClick={() => audioFinished ? setFadeCandle2(false) : null} className="flame" />
              </Fade>
            : null}
        </Candle2>
      </CakeWrapper>
      <Fade show={flame2 && !audioFinished && !animatedCandle}>
        <Text width={size.width}>feliz aniversário Helena !!</Text>
      </Fade>
      <Fade show={audioFinished && !animatedCandle}>
        <Text width={size.width}>agora escolhe uma vela</Text>
      </Fade>
      <Fade show={animatedCandle && fadeCandle1 && fadeCandle2}>
        <Text width={size.width}>pede um desejo e sopra a vela...</Text>
      </Fade>
      <Fade show={!fadeCandle1 || !fadeCandle2}>
        <Text width={size.width}>os teus desejos serão concretizados...</Text>
      </Fade>
    </>
  )
}

export default Cake
