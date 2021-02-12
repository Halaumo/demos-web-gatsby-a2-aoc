import styled from 'styled-components'
import config from '../config/flexGrid'

const Container = styled.div`
  margin: 0 auto;
  max-width: ${config.breakPoints.base.containerWidth};
  padding-left: 15px;
  padding-right: 15px;
  word-wrap: break-word;
`
export default Container
