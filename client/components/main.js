import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'
import store, {logout, fetchAllClothing} from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    store.dispatch(fetchAllClothing())
  }

  render() {
    const {children, handleClick, isLoggedIn} = this.props
    
      return (
        <div>
          <h1>Assemble</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {
              isLoggedIn
                ? <div>
                  {/* The navbar will show these links after you log in */}
                  <NavLink to='/home'>Home</NavLink>
                  <a href='#' onClick={handleClick}>Logout</a>
                  <NavLink to='/clothing'>My Clothes</NavLink>
                  <NavLink to='/outfitAssembler'>Outfit Assembler</NavLink>
                  <NavLink to='/imageUpload'>Add Clothing</NavLink>
                </div>
                : <div>
                  {/* The navbar will show these links before you log in */}
                  <NavLink to='/login'>Login</NavLink>
                  <NavLink to='/signup'>Sign Up</NavLink>
                </div>
            }
          </nav>
          <hr />
          {children}
        </div>
      )
  }
  
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
