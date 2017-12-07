import React, {Component} from 'react'
import {connect} from 'react-redux'

export class AssembledOutfit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { outfit } = this.props
    return (
      <div>
        <h1>Assembled Outfit</h1>
        {
          typeof outfit.pieces === "object" ?
          outfit.pieces.map(piece => {
            return (
              <div key={piece.id}>
                <img src={piece.imageUrl}/>
              </div>
            )
          }) : <h1>outfit not found</h1>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    outfit: state.outfit
  }
}


export default connect(mapStateToProps)(AssembledOutfit)
