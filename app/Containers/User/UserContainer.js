import React, { PropTypes } from 'react'
import { User } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { staleUser, staleDucks } from 'helpers/utils'
import * as usersActionCreators from 'redux/modules/users'
import * as usersDucksActionCreators from 'redux/modules/usersDucks'

const UserContainer = React.createClass({
  propTypes: {
    noUser: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckIds: PropTypes.array.isRequired,
    fetchAndHandleUsersDucks: PropTypes.func.isRequired,
    fetchAndHandleUser: PropTypes.func.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    routeParams: PropTypes.shape({uid: PropTypes.string.isRequired})
  },
  componentDidMount () {
    const uid = this.props.routeParams.uid
    if (this.props.noUser === true || staleUser(this.props.lastUpdated)) {
      this.props.fetchAndHandleUser(uid)
    }
    if (this.props.noUser === true || staleDucks(this.props.lastUpdated)) {
      this.props.fetchAndHandleUsersDucks(uid)
    }
  },
  render () {
    return (
      <User
      noUser={this.props.noUser}
      name={this.props.name}
      isFetching={this.props.isFetching}
      error={this.props.error}
      duckIds={this.props.duckIds} />
    )
  }
})

function mapStateToProps ({users, usersDucks}, props) {
  const specificUsersDucks = usersDucks[props.routeParams.uid]
  const user = users[props.routeParams.uid]
  const noUser = typeof user === 'undefined'
  const name = noUser ? '' : user.info.name
  return {
    noUser,
    name,
    isFetching: users.isFetching || usersDucks.isFetching,
    error: users.error || usersDucks.error,
    duckIds: specificUsersDucks ? specificUsersDucks.duckIds : [],
    lastUpdated: specificUsersDucks ? specificUsersDucks.lastUpdated : 0
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...usersActionCreators,
    ...usersDucksActionCreators
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)
