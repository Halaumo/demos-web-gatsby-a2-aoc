import styled, { css } from 'styled-components'
import config from '../config/flexGrid'
import { mediaQueryLg } from './mediaQueries'

interface props {
  baseSize: number
  lgSize: number
}

const BrandItem = styled.div<props>(
  ({ baseSize, lgSize }) => css`
    word-wrap: break-word;
    width: calc(${(100 / config.columns) * baseSize}%);

    ${mediaQueryLg(`
      width: calc(${(100 / config.columns) * lgSize}%);
    `)}
  `
)

export default BrandItem
