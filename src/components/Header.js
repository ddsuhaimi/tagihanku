import React, { Component } from "react";
import { connect } from 'react-redux'
import { updateDetail } from '../actions/actions'
import LogoBrand from './LogoBrand'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


export class Header extends Component {
  handleChangeDetail = e => {
    console.log(e)
    const name = e.target.name
    const value = e.target.value
    this.props.updateDetail({
      [name]: value
    })
  }

  handleChangeTanggal = tanggal => {
    console.log(tanggal)
    this.props.updateDetail({
      tanggal: tanggal
    })
  }

  render() {
    const { nomor, tanggal, jatuhTempo } = this.props

    return (
      <div className="row">

        <div className="col-sm-6 d-flex align-items-center">
        <LogoBrand />
        </div>
        <div className="col-sm-6 ">
          <h2 className="text-uppercase text-light text-right">invoice</h2>
          <form className="form-horizontal">
          <div className="form-group row">
            <label htmlFor="nomor" className="col-sm-8 col-form-label text-right">No. invoice :</label>
            <div className="col-sm-4 d-flex align-items-center">
              <input name="nomor" type="text" className="form-control" id="nomor" value={nomor} onChange={this.handleChangeDetail} />            
            </div>
        </div>
          <div className="form-group row">
            <label htmlFor="tanggal" className="col-sm-8 col-form-label text-right">Tanggal :</label>
            <div className="col-sm-4 d-flex align-items-center">
              {/* <input name="tanggal" onChange={this.handleChangeDetail} value={tanggal} type="date" className="form-control" placeholder="cth: 04/02/2020"/> */}
              <DatePicker className="form-control" selected={tanggal} onChange={this.handleChangeTanggal} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="jatuhTempo" className="col-sm-8 col-form-label text-right">Jatuh tempo :</label>
            <div className="col-sm-4 d-flex align-items-center">
              {/* <input name="jatuhTempo" onChange={this.handleChangeDetail} value={jatuhTempo} type="text" className="form-control" placeholder="cth: 04/02/2020"/> */}
              <DatePicker className="form-control" selected={jatuhTempo} onChange={this.handleChangeTanggal} />

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
  tanggal: state.invoice.tanggal,
  jatuhTempo: state.invoice.jatuhTempo,
  isOnPreview: state.invoice.isOnPreview
})
export default connect(mapStateToProps, {updateDetail})(Header);
