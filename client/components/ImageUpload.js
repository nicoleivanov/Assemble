import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'
import request from 'superagent'

const CLOUDINARY_UPLOAD_PRESET = 'assemble'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/assemble/image/upload'

export class ImageUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uploadedFile: '',
      uploadedFileCloudinaryUrl: '',
      category: 'top',
      color: [],
      setting: [],
      weather: [],
      imageUrl: '',
      userId: 0
    }

    this.onImageDrop = this.onImageDrop.bind(this)
    this.handleImageUpload = this.handleImageUpload.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })
    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleChange(event) {
    const prop = event.target.name
    switch(prop) {
        case 'category':
            return this.setState({
                category: event.target.value
            })
        case 'email':
            return this.setState({
                email: event.target.value
            })
        case 'campus':
            return this.setState({
                campus: event.target.value
            })
    }
}

  render() {
    return(
      <div>
        <form>
        <label>Category</label>
          <select name="category" >
            <option key="top" value="top">cold</option>
            <option key="bottom" value="bottom">warm</option>
            <option key="full body" value="full body">hot</option>
          </select>
          <label>Color</label>
            <input></input>
        </form>
        <div>
          <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop}>
            <p>Drop an image or clik to select a file to upload</p>
          </Dropzone>
        </div>
      
        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)