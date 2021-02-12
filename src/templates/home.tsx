import React from 'react'
import Header from '../containers/header/header'
import MainScreen from '../containers/mainScreen/mainScreen'
import Generation from '../containers/generation/generation'
import Brands from '../containers/brands/brands'
import Slider from '../containers/slider/slider'

const Home = () => {

  return (
    <>
      <Header />
      <MainScreen />
      <Generation />
      <Brands />
      <Slider />
    </>
  )
}

export default Home
