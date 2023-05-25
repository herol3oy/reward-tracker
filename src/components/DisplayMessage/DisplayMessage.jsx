import PropTypes from 'prop-types'
import './DisplayMessage.css'
import { DisplayMessageType } from 'constants/display-message-type'

const DisplayMessage = ({ children, type }) => {
  return (
    <p
      className={
        type === DisplayMessageType.INFO
          ? 'display-message--info'
          : 'display-message--danger'
      }
    >
      {children}
    </p>
  )
}

DisplayMessage.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'danger']).isRequired,
}

export default DisplayMessage
