import React, {Component} from 'react'
import {connect} from 'react-redux'

export class AssembledOutfit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { allClothing } = this.props
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
        <div>
          <label>Weather</label>
          <select name="weather">
            <option key="cold" value="cold">cold</option>
            <option key="warm" value="warm">warm</option>
            <option key="hot" value="hot">hot</option>
          </select>
        </div>
        <div>
          <label>Setting</label>
          <select name="setting">
            <option key="casual" value="casual">casual</option>
            <option key="work" value="work">work</option>
            <option key="going out" value="going out">going out</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
       </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allClothing: state.clothing
  }
}

const mapDispatchToProps = (dispatch, ownHistory) => {
  return {
    sendOutfitProps(oProps) {
      dispatch
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssembledOutfit)