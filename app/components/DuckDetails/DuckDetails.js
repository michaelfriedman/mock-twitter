import React, { PropTypes } from 'react'
import { DuckContainer, RepliesContainer } from 'containers'
import { mainContainer, container, content, repliesContainer,
  replyTextAreaContainer, replyTextArea } from './styles.css'
import { subHeader, darkBtn, errorMsg } from 'sharedStyles/styles.css'
import { formatReply } from 'helpers/utils'

DuckDetails.propTypes = {
  authedUser: PropTypes.object.isRequired,
  duckId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

export default function DuckDetails ({duckId, isFetching, authedUser, error}) {
  return (
    <div className={mainContainer}>
      {isFetching === true
      ? <p className={subHeader}>{'Fetching'}</p>
      : <div className={container}>
          <div className={content}>
            <DuckContainer duckId={duckId} hideLikeCount={false} hideReplyBtn={true} />
          </div>
          <div className={repliesContainer}>
            Reply Section
          </div>
        </div>}
      {error ? <p className={errorMsg}>{error}</p> : null}
    </div>
  )
}
