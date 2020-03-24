import React from 'react'
import styled, { keyframes } from 'styled-components';

const theme = {
  burg: "rgba(182, 15, 97, 0.9)",
  orange: "rgba(242, 112, 45, 0.9)",
  skyblue: "rgba(45, 181, 167, 0.9)",
  purple: "rgba(190, 61, 244, 0.9)",
  green: "rgba(180, 224, 67, 0.9)",
  yellow: "rgba(242, 194, 58, 0.9)"
}

const baloonAnimation = keyframes`
  0%,100% { 
    transform: translateY(0) rotate(-6deg);
  }
  50% { 
    transform: translateY(-20px) rotate(8deg);
  }
`

const BaloonWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    height: 650px;
    margin-top: 50px;
  }

  & > div {
    width:184px;
    height:230px; 
    background: ${props => theme[props.theme]};
    border-radius:0;
    border-radius:80% 80% 80% 80%;
    margin: 0 auto;
    position: absolute;
    padding:10px;
    box-shadow:inset 17px 7px 10px ${props => theme[props.theme]}; 
    -webkit-transform-origin: bottom center; 
    animation: ${baloonAnimation} 6s ease-in-out infinite;

    &:before {
      color: ${props => theme[props.theme]};
      position:absolute;
      bottom: -20px;
      left: 95px;  
      content:"▲";
      font-size: 20px;
    }

    &:after {
      position: absolute;
      bottom: -258px;
      right: 98px;
      background: #000;
      width: 1px;
      height: 248px;
      content: '';
    }
  }
`

const ContentWrapper = styled.span`
  font-size: 4.8em;
  color: white;
  position: relative;
  top: 70px;
  left: 50%;
  margin-left: -40px; 
`


const Baloon = ({children, theme, handleBaloonClick}) => {
  return (
    <BaloonWrapper onClick={handleBaloonClick} theme={theme}>
      <div>
      <ContentWrapper>{children}</ContentWrapper>
      </div>
    </BaloonWrapper>
  )
}

export default Baloon