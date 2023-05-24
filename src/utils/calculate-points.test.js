import { calculatePoints } from './calculate-points'

const MOCK_DATA = [
  { amount: 120, expectedPoints: 90 },
  { amount: 320, expectedPoints: 490 },
  { amount: 10, expectedPoints: 0 },
  { amount: 80, expectedPoints: 30 },
  { amount: 50, expectedPoints: 0 },
  { amount: 150, expectedPoints: 150 },
  { amount: 240, expectedPoints: 330 },
]

test('calculatePoints', () => {
  MOCK_DATA.forEach(({ amount, expectedPoints }) => {
    const rewardPoints = calculatePoints(amount)
    expect(rewardPoints).toBe(expectedPoints)
  })
})
