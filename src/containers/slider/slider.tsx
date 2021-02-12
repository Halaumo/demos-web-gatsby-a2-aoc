import React from 'react'
import styled from 'styled-components'
import SliderWrap from './components/sliderWrap'
import Container from '../../hocs/container'
import SliderCard from './components/sliderCard'
import twitterIcon from '@/images/slider/twitter.png'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const SwiperPagination = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;

  & > span {
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border: 1px solid black;

    &:hover {
      cursor: pointer;
    }
  }

  & > .swiper-pagination-bullet-active {
    background-color: blue;
  }
`

SwiperCore.use([Pagination])

const SliderTemplate = () => {

  return (
    <>
      <SliderWrap>
        <Container>
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            autoHeight >

            <SwiperSlide>
              <SliderCard
                icon={twitterIcon}
                mainTitle='AOD New York @aod'
                secondTitle='/ 35 min'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <SliderCard
                icon={twitterIcon}
                mainTitle='AOD New York @aod'
                secondTitle='/ 35 min'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <SliderCard
                icon={twitterIcon}
                mainTitle='AOD New York @aod'
                secondTitle='/ 35 min'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.'
              />
            </SwiperSlide>
          </Swiper>

          <SwiperPagination className="swiper-pagination" />
        </Container>
      </SliderWrap>
    </>
  )
}

export default SliderTemplate
