import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOutfit} from '../store'

export class OutfitForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const outfitProps = {
      weather: event.target.weather.value,
      setting: event.target.setting.value
    }
    this.props.sendOutfitProps(outfitProps)
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
      dispatch(fetchOutfit(oProps))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutfitForm)