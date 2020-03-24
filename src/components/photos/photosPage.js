import React from 'react';
import { Slide } from 'react-slideshow-image';
import BackArrow from '../backArrow/backArrow'

import styled from 'styled-components';

const SlideContainer = styled.div`
  width: calc(100% - 40px);

  @media (min-width: 768px) {
    width: 60%;
  }

  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .image-container {
    width: 75%;
    overflow: hidden;
  }
`

const SlideSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;

  @media (min-width: 768px) {
    height: 600px;
  }

  height: 500px;
`

const slidesImages = [
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
  'https://picsum.photos/200/300.jpg',
];
 
const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const PhotosPage = ({ handleBackClick }) => {
  return (
    <>
      <BackArrow handleBackClick={handleBackClick} />
      <SlideContainer>
        <Slide {...properties}>
          {slidesImages.map(img => {
            return (
              <div className="each-slide">
                <SlideSize style={{'backgroundImage': `url(${img})`}} />
              </div>
            )})
          }
        </Slide>
      </SlideContainer>
    </>
)}

export default PhotosPage