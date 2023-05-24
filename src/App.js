import DisplayMessage from './components/DisplayMessage'
import RewardTable from './components/RewardTable'
import { useRewards } from './hooks/use-rewards'
import { useTransactions } from './hooks/use-transactions'
import { GETTING_DATA_ERROR, LOADING_DATA, NO_DATA } from './utils/constants'

function App() {
  const { transactions, loading, error } = useTransactions()
  const { monthlyRewards, totalRewards } = useRewards(transactions)

  if (loading) return <DisplayMessage>{LOADING_DATA}</DisplayMessage>
  if (error) return <DisplayMessage>{GETTING_DATA_ERROR}</DisplayMessage>

  const hasMonthlyRewards = Object.keys(monthlyRewards).length

  return hasMonthlyRewards ? (
    Object.keys(monthlyRewards).map((clientId) => (
      <RewardTable
        key={clientId}
        clientId={clientId}
        monthlyRewards={monthlyRewards[clientId]}
        totalRewards={totalRewards[clientId]}
      />
    ))
  ) : (
    <DisplayMessage>{NO_DATA}</DisplayMessage>
  )
}

export default App
