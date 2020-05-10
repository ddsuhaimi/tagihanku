import React, { Component } from "react";
import { connect } from 'react-redux'
import { updateDetail } from '../actions/actions'

export class LogoBrand extends Component {
  state = {
    logo: null,
    logoWidth: 128,
    logoHeight: 128,
  };

  componentDidMount() {
    const { logo } = this.props
    this.setState({
      logo
    })
  }

  handleUpload = (e) => {
    // this.setState({
    //   logo: URL.createObjectURL(e.target.files[0]),
    // });

    this.props.updateDetail({
      logo: URL.createObjectURL(e.target.files[0])
    })
  };
  handleChangeSize = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });

    this.props.updateDetail({
      [e.target.name]: e.target.value
    })
  };
  render() {
    const { logo, logoHeight, logoWidth } = this.props;
    return (
      <div className="logo-brand mt-2">
        <img
          src={logo || "https://placehold.it/128x128"}
          height={`${logoHeight}px`}
          width={`${logoWidth}px`}
          alt="logo"
          className="logo"
        />
        {logo && (
          <span className="form-group position-absolute col-2">
            <label for="width">Width</label>
            <input
              value={logoWidth}
              onChange={this.handleChangeSize}
              type="number"
              className="form-control input-sm"
              id="logoWidth"
              name="logoWidth"
              size="6"
            />
            <label for="height">Height</label>
            <input
              value={logoHeight}
              onChange={this.handleChangeSize}
              type="number"
              className="form-control input-sm"
              id="logoHeight"
              name="logoHeight"
              size="6"
            />
          </span>
        )}
        <br />
        <div className="mt-4">
          <div className="input-group">
          <div className="custom-file">

          <input type="file" className="custom-file-input" onChange={this.handleUpload} />
          <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logo: state.invoice.logo,
  logoWidth: state.invoice.logoWidth,
  logoHeight: state.invoice.logoHeight,
  isOnPreview: state.invoice.isOnPreview
})

export default connect(mapStateToProps, { updateDetail })(LogoBrand);
