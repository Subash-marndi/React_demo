import React from 'react'
import coverImage from '../assets/images/Django-cover.jpg'


const LearnLoadingImages = () => {
  return (
    <>
        <h1>Learn Loading Images</h1> <hr />
        <h1>Load image :</h1>
        <img src={coverImage} alt=" Cover Image" width={500} />

    </>
  )
}

export default LearnLoadingImages