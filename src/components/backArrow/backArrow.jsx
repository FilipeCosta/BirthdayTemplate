import React from 'react'
import styled from 'styled-components';

const BackButton = styled.div`
  width:50px;
  height:50px;
  position: absolute;
  top: 3%;
  left: 10%;
  transform: translate(-50%, -10%);
  overflow:hidden;
  transition:background 0.3s ease;

  @media (min-width: 768px) {
    left: 5%;
  }

`

const ArrowWrap = styled.div`
  display:block;
  position:absolute;
  height:78%;
  width:70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition:left 0.3s ease;
  cursor: pointer;

  span {
    height:1px;
    left:0;
    top:50%;
    background: rgba(0, 0, 0, 0.6);
    position:absolute;
    display:block;
    transition:background 0.3s ease;
  }

  & > .arrow-part-1{
    top: 56%;
    left: 10%;
    width:100%;
    height: 4px;
    transform: translate(0, -50%);
  }

  & > .arrow-part-2{
    width:60%;
    height: 4px;
    transform: rotate(-45deg);
    transform-origin: 0 0;
  }

  & >.arrow-part-3{
    width:60%;
    height: 4px;
    transform: rotate(45deg);
    transform-origin: 0 0;
  }
`

const BackArrow = ({ handleBackClick }) => {
  return (
    <BackButton onClick={handleBackClick}>
      <ArrowWrap>
        <span class="arrow-part-1"></span>
        <span class="arrow-part-2"></span>
        <span class="arrow-part-3"></span>
      </ArrowWrap>
    </BackButton>
  )
}

export default BackArrow