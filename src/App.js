import DisplayMessage from 'components/DisplayMessage'
import RewardTable from 'components/RewardTable'
import RewardTableContainer from 'components/RewardTableContainer'
import { useRewards } from 'hooks/use-rewards'
import { useTransactions } from 'hooks/use-transactions'
import { Messages } from 'constants/messages'
import { DisplayMessageType } from 'constants/display-message-type'

function App() {
  const { transactions, loading, error } = useTransactions()
  const { monthlyRewards, totalRewards } = useRewards(transactions)

  if (loading)
    return (
      <DisplayMessage type={DisplayMessageType.INFO}>
        {Messages.LOADING_DATA}
      </DisplayMessage>
    )
  if (error)
    return (
      <DisplayMessage type={DisplayMessageType.DANGER}>
        {Messages.GETTING_DATA_ERROR}
      </DisplayMessage>
    )

  const hasMonthlyRewards = Object.keys(monthlyRewards).length

  return hasMonthlyRewards ? (
    <RewardTableContainer>
      {Object.keys(monthlyRewards).map((clientId) => (
        <RewardTable
          key={clientId}
          clientId={clientId}
          monthlyRewards={monthlyRewards[clientId]}
          totalRewards={totalRewards[clientId]}
        />
      ))}
    </RewardTableContainer>
  ) : (
    <DisplayMessage type={DisplayMessageType.INFO}>
      {Messages.NO_DATA}
    </DisplayMessage>
  )
}

export default App
