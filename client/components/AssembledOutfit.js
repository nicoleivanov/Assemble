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
        <h1>render me</h1>
        {
          typeof outfit === "object" ?
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

// const mapDispatchToProps = (dispatch, ownHistory) => {
//   return {
//     sendOutfitProps(oProps) {
//       dispatch
//     }
//   }
// }

export default connect(mapStateToProps)(AssembledOutfit)