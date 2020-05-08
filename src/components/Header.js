import React, { Component } from "react";
import { connect } from 'react-redux'
import { updateDetail } from '../actions/actions'

export class Header extends Component {
  handleChangeDetail = e => {
    const name = e.target.name
    const value = e.target.value
    this.props.updateDetail({
      [name]: value
    })
  }
  render() {
    const { nomor, tanggal, jatuhTempo } = this.props
    return (
      <div className="row">
        <div className="col-sm-6 d-flex align-items-center">
          <div className="logo-brand">

          <img src="https://placehold.it/128x128" width="128" height="128" alt="logo" className="logo" />
          </div>
        </div>
        <div className="col-sm-6 ">
          <h2 className="text-uppercase text-light text-right">invoice</h2>
          <form className="form-horizontal">
          <div className="form-group row">
            <label htmlFor="nomor" className="col-sm-8 col-form-label text-right">No. invoice :</label>
            <div className="col-sm-4">
              <input name="nomor" type="text" className="form-control" id="nomor" value={nomor} onChange={this.handleChangeDetail} />
            </div>
        </div>
          <div className="form-group row">
            <label htmlFor="tanggal" className="col-sm-8 col-form-label text-right">Tanggal :</label>
            <div className="col-sm-4">
              <input name="tanggal" onChange={this.handleChangeDetail} value={tanggal} type="text" className="form-control" placeholder="cth: 2020/02/04"/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="jatuhTempo" className="col-sm-8 col-form-label text-right">Jatuh tempo :</label>
            <div className="col-sm-4">
              <input name="jatuhTempo" onChange={this.handleChangeDetail} value={jatuhTempo} type="text" className="form-control" placeholder="cth: 2020/02/04"/>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nomor: state.invoice.nomor,
})
export default connect(mapStateToProps, {updateDetail})(Header);
