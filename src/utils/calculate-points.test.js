import { calculatePoints } from './calculate-points'

const MOCK_DATA = [
  { amount: 120, expectedPoints: 90 },
  { amount: 320, expectedPoints: 490 },
  { amount: 10, expectedPoints: 0 },
]

describe('calculatePoints', () => {
  MOCK_DATA.forEach(({ amount, expectedPoints }) => {
    it(`calculates reward points for $${amount}`, () => {
      const rewardPoints = calculatePoints(amount)
      expect(rewardPoints).toBe(expectedPoints)
    })
  })
})
