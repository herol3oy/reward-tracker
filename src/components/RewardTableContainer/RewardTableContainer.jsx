import PropTypes from 'prop-types'
import './RewardTableContainer.css'

const RewardTableContainer = ({ children }) => (
  <section className="reward-table-container">{children}</section>
)

RewardTableContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
export default RewardTableContainer
