import React, { Component } from 'react'
import { updateDetail } from '../actions/actions'
import { connect } from 'react-redux'


export class Info extends Component {
  handleChangeDetail = e => {
    const name = e.target.name
    const value = e.target.value

    this.props.updateDetail({
      [name]: value
    })
  }
  render() {
    const { namaUser, namaKlien, alamatUser, alamatKlien } = this.props
    return (
      <div className="row">
        <div className="col-sm-5">
            <h4 className="supplier text-uppercase">
              Penyedia
            </h4>
            <form className="form-horizontal">
          <div className="form-group row">
            <label htmlFor="namaSupplier" className="col-sm-2 col-form-label">Nama:</label>
            <div className="col-sm-10">
              <input name="namaUser" value={namaUser} onChange={this.handleChangeDetail} type="text" className="form-control"/>
            </div>
        </div>
          <div className="form-group row">
            <label htmlFor="alamatSupplier" className="col-sm-2 col-form-label">Alamat:</label>
            <div className="col-sm-10">
              <textarea name="alamatUser" value={alamatUser} onChange={this.handleChangeDetail} type="textarea" className="form-control"/>
            </div>
        </div>
          </form>
        </div>
        <div className="col-sm-2">
      {" "}
        </div>
        <div className="col-sm-5">
        <h4 className="supplier text-uppercase">
              kepada
            </h4>
        <form className="form-horizontal">
          <div className="form-group row">
            <label htmlFor="namaKlien" className="col-sm-2 col-form-label">Nama:</label>
            <div className="col-sm-10">
              <input name="namaKlien" value={namaKlien} onChange={this.handleChangeDetail} type="text" className="form-control" />
            </div>
        </div>
          <div className="form-group row">
            <label htmlFor="alamatKlien" className="col-sm-2 col-form-label">Alamat:</label>
            <div className="col-sm-10">
              <textarea name="alamatKlien" value={alamatKlien} onChange={this.handleChangeDetail} type="text" className="form-control" id="alamatKlien"/>
            </div>
        </div>
        </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  namaUser: state.invoice.namaUser,
  namaKlien: state.invoice.namaKlien,
  alamatUser: state.invoice.alamatUser,
  alamatKlien: state.invoice.alamatKlien
})
export default connect(mapStateToProps, { updateDetail })(Info)
