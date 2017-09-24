import React, {Component} from 'react'
import {connect} from 'react-redux'

export class AllClothing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { allClothing } = this.props
    return (
      <div>
        {
          allClothing && allClothing.map(clothingItem => {
            return (
              <div key={clothingItem.id}>
                <img src={clothingItem.imageUrl}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    allClothing: state.clothing
  }
}

export default connect(mapStateToProps)(AllClothing)