import { calculateRewards } from './calculate-rewards'

const MOCK_TRANSACTIONS = [
  { clientId: 1, amount: 120, date: '2023-01-05' },
  { clientId: 1, amount: 200, date: '2023-02-10' },
  { clientId: 2, amount: 120, date: '2023-05-05' },
  { clientId: 2, amount: 150, date: '2023-04-18' },
  { clientId: 2, amount: 95, date: '2023-04-12' },
  { clientId: 2, amount: 120, date: '2023-04-05' },
]

const MOCK_EXPECTED_MONTHLY_REWARDS = {
  1: {
    0: 90,
    1: 250,
  },
  2: {
    3: 285,
    4: 90,
  },
}

const MOCK_EXPECTED_TOTAL_REWARDS = {
  1: 340,
  2: 375,
}

test('calculates rewards correctly for multiple transactions', () => {
  const result = calculateRewards(MOCK_TRANSACTIONS)

  expect(result.monthlyRewards).toEqual(MOCK_EXPECTED_MONTHLY_REWARDS)
  expect(result.totalRewards).toEqual(MOCK_EXPECTED_TOTAL_REWARDS)
})
