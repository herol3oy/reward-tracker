import { render, screen } from '@testing-library/react'
import RewardTable from './RewardTable'

const CLINET_ID = 'client1'
const TOTAL_REWARDS = 300
const MONTHLY_REWARDS = {
  0: 100,
  1: 200,
}
describe('RewardTable', () => {
  test('should render the client ID in the table', () => {
    render(
      <RewardTable
        clientId={CLINET_ID}
        monthlyRewards={MONTHLY_REWARDS}
        totalRewards={TOTAL_REWARDS}
      />
    )
    const clientIdHeader = screen.getByText(`Client ID: ${CLINET_ID}`)
    expect(clientIdHeader).toBeInTheDocument()
  })

  test('should render the total rewards in the table', () => {
    render(
      <RewardTable
        clientId={CLINET_ID}
        monthlyRewards={MONTHLY_REWARDS}
        totalRewards={TOTAL_REWARDS}
      />
    )
    const totalRewardsCell = screen.getByText(
      `Total Rewards: ${TOTAL_REWARDS} points`
    )
    expect(totalRewardsCell).toBeInTheDocument()
  })
})
