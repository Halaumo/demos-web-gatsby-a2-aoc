export const mediaQueryMobile = (width: string) => (style: TemplateStringsArray | string) =>
  `@media screen and (min-width: ${width}){ ${style} };`
export const mediaQueryDesctop = (width: string) => (style: TemplateStringsArray | string) =>
  `@media screen and (max-width: ${width}){ ${style} };`
export const matchMediaQueryMobile = (width: string) => `(min-width: ${width})`
export const matchMediaQueryDesctop = (width: string) => `(max-width: ${width})`

import config from '../config/flexGrid'

export const mediaQueryLg = mediaQueryDesctop(config.breakPoints.lg.mediaDesctop)
export const mediaQueryMd = mediaQueryDesctop(config.breakPoints.md.mediaDesctop)
export const mediaQuerySm = mediaQueryDesctop(config.breakPoints.sm.mediaDesctop)
export const matchMediaQueryLg = matchMediaQueryDesctop(config.breakPoints.lg.mediaDesctop)
export const matchMediaQueryMd = matchMediaQueryDesctop(config.breakPoints.md.mediaDesctop)
export const matchMediaQuerySm = matchMediaQueryDesctop(config.breakPoints.sm.mediaDesctop)
export const matchOrientation = (s: 'portrait' | 'landscape') => `(orientation: ${s})`
