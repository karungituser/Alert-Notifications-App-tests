import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="icon success-icon" />
      <div>
        <h1 className="success heading">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="icon error-icon" />
      <div>
        <h1 className="error heading">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="icon warning-icon" />
      <div>
        <h1 className="warning heading">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="icon info-icon" />
      <div>
        <h1 className="info heading">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <h1 className="notify-heading">Alert Notifications</h1>
      {renderSuccessNotification()}
      {renderErrorNotification()}
      {renderWarningNotification()}
      {renderInfoNotification()}
    </div>
  )
}

export default AlertNotifications
