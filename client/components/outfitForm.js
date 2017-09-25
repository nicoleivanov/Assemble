import React, {Component} from 'react'
import {connect} from 'react-redux'
import store, {fetchOutfit, clearOutfit} from '../store'

export class OutfitForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    store.dispatch(clearOutfit())
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
       <form onSubmit={(evt) => this.handleSubmit(evt)}>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendOutfitProps(oProps) {
      dispatch(fetchOutfit(oProps, ownProps.history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutfitForm)