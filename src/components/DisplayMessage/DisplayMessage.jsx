import PropTypes from 'prop-types'
import './DisplayMessage.css'

const DisplayMessage = ({ children }) => {
  return <p>{children}</p>
}

DisplayMessage.propTypes = {
  children: PropTypes.string.isRequired,
}

export default DisplayMessage
