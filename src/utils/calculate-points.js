const UPPER_THRESHOLD = 100
const LOWER_THRESHHOLD = 50
const POINTS_PER_DOLLAR = 2
const NO_POINTS = 0

export const calculatePoints = (price) => {
  if (price > UPPER_THRESHOLD) {
    return POINTS_PER_DOLLAR * (price - UPPER_THRESHOLD) + LOWER_THRESHHOLD
  } else if (price > LOWER_THRESHHOLD && price < UPPER_THRESHOLD) {
    return price - LOWER_THRESHHOLD
  }
  return NO_POINTS
}
