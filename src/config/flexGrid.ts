import breakPoints from './breakPoints'

export default {
  columns: 12,
  breakPoints: {
    base: {
      containerWidth: '1100px',
    },
    xl: {
      ...breakPoints.xl,
    },
    lg: {
      ...breakPoints.lg,
    },
    md: {
      ...breakPoints.md,
    },
    sm: {
      ...breakPoints.sm,
    },
  },
}
