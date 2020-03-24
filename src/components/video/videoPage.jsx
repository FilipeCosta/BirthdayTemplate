import React from 'react';

import styled from 'styled-components';
import BackArrow from '../backArrow/backArrow'

const VideoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% - 40px);

  @media (min-width: 768px) {
    width: 60%;
  }

  & > .video {
    width: 100%;
    height: 100%;
  }
`

const VideoPage = ({ handleBackClick }) => {
  return (
    <>
      <BackArrow handleBackClick={handleBackClick}/>
      <VideoWrapper>
        <video class="video" controls>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </video>
      </VideoWrapper>
    </>
  )
}

export default VideoPage