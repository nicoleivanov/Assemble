import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../store'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {email} = this.props
    const divStyle = {
      backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Pink_Tartan_at_2014_World_MasterCard_Fashion_Week.jpg"}
      return (
        <div style = {divStyle}>
          <h3>Welcome, {email}</h3>
        </div>
      )
  }
  
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
