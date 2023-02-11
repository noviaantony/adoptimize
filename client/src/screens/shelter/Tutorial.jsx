import React from 'react'
import Carousel from '../../components/shelter/tutorial/Carousel'
import Header from '../../components/common/misc/Header'


const tutorialData = [
  {
    image: 'meow',
    caption: 'meow'
  }
]

const Tutorial = () => {
  return (
    <div>
      <Header Title = "Tutorial" Description="refer to this page whenever you forget how to use adoptsy!"/>
      <Carousel/>
    </div>
  )
}

export default Tutorial
