import React from 'react';
import BackArrow from '../backArrow/backArrow'

const LetterPage = ({ handleBackClick }) => {
  return (
    <>
      <BackArrow handleBackClick={handleBackClick} />
      <div>letter here</div>
    </>
  )
}

export default LetterPage