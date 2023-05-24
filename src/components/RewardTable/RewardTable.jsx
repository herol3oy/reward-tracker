import PropTypes from 'prop-types'
import './RewardTable.css'

const RewardTable = ({ clientId, monthlyRewards, totalRewards }) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Client ID: {clientId}</th>
        </tr>
        <tr>
          <th>Month</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(monthlyRewards).map((month) => (
          <tr key={month}>
            <td>{parseInt(month) + 1}</td>
            <td>{monthlyRewards[month]} points</td>
          </tr>
        ))}
        <tr>
          <td colSpan="2">Total Rewards: {totalRewards} points</td>
        </tr>
      </tbody>
    </table>
  )
}

RewardTable.propTypes = {
  clientId: PropTypes.string.isRequired,
  monthlyRewards: PropTypes.object.isRequired,
  totalRewards: PropTypes.number.isRequired,
}

export default RewardTable
