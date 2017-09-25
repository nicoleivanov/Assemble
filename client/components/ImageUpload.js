import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import { addItem } from '../store'

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
      weather: []
    }

    this.onImageDrop = this.onImageDrop.bind(this)
    this.handleImageUpload = this.handleImageUpload.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.setState({
      [prop]: event.target.value
    })
}

    handleSubmit() {
      const category = this.state.category
      const color = this.state.color.split(', ')
      const setting = this.state.setting.split(', ')
      const weather = this.state.weather.split(', ')
      const imageUrl = this.state.uploadedFileCloudinaryUrl
      const item = { category, color, setting, weather, imageUrl}
      this.props.addClothing(item)
    }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Category</label>
          <select name="category" onChange={evt => this.handleChange(evt)}>
            <option key="top" value="top">top</option>
            <option key="bottom" value="bottom">bottom</option>
            <option key="full body" value="full body">full body</option>
          </select>
          <label>Color</label>
            <p>Please enter one color or multiple in format: blue, black, brown</p>
            <input name="color" type="text" placeholder="Enter color name(s)" onChange={evt => this.handleChange(evt)}></input>
          <label>Setting</label>
            <p>Please enter one setting or multiple in format: casual, work, going out</p>
            <input name="setting" type="text" placeholder="Enter setting type(s)" onChange={evt => this.handleChange(evt)}></input>
          <label>Weather</label>
            <p>Please enter one weather type or multiple in format: cold, warm, hot</p>
            <input name="weather" type="text" placeholder="Enter weather type(s)" onChange={evt => this.handleChange(evt)}></input>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <hr/>
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
    addClothing(clothing) {
      dispatch(addItem(clothing, ownProps.history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)