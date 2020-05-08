import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBarang, updateDetail, calculateTotal } from '../actions/actions'
import { v4 as uuid } from 'uuid'
import Row from './Row'
export class Table extends Component {
  handleAdd = _ => {
    // add empty barang
    this.props.addBarang({
      id: uuid(),
      nama: "",
      jumlah: "", 
      satuan: "",
      hargaSatuan: ""
    })
  }

  handleChangeDetail = e => {
    const name = e.target.name
    const value = e.target.value
    

    this.props.updateDetail({
      [name]: value
    })

    this.props.calculateTotal()
  }

  componentDidMount() {
    this.props.calculateTotal()
  }

  render() {
    const { barangs, pembayaran, diskon, subtotal, total } = this.props
    
    return (
      <div className="row">
        <div className="col-sm-12">
        <table className="table" style={{width:'96%'}}>
  <thead>
    <tr className="d-flex text-center">
      <th className="col-5" scope="col">Nama barang/jasa</th>
      <th className="col-1" scope="col">Jumlah</th>
      <th className="col-2" scope="col">Satuan</th>
      <th className="col-2" scope="col">Harga satuan</th>
      <th className="col-2" scope="col">Harga</th>
    </tr>
  </thead>
  <tbody>
    {barangs.map(barang => (
      <Row barang={barang} key={barang.id} />
    ))}
  </tbody>
    <span>

    <a onClick={this.handleAdd} className="text-white btn btn-primary btn-sm">
    <i className="fas fa-plus"> </i> Tambah barang
  </a>
    </span>
</table>
<div className="row">
  <div className="col">
    <div className="container py-2 bg-light">
      <h5 className="text-uppercase">Pembayaran</h5>
      <textarea value={pembayaran} onChange={this.handleChangeDetail} name="pembayaran" className="bg-light form-control" placeholder="Tuliskan metode pembayaran"/>
    </div>
  </div>
  <div className="col detail">
      <div className="row">
        <span className="col-8 text-right">Subtotal : </span>
        <span className="col-4 text-right">{!Number.isNaN(subtotal) ? `Rp${subtotal}` : ""}</span>
      </div>
      <div className="row">
        <span className="d-flex align-items-center justify-content-end col-8 text-right">Diskon : </span>
        <span className="col-4 text-right">
          <div className="input-group input-group-sm">
            <div className="input-group-prepend"><span className="input-group-text">Rp</span></div>
          <input value={diskon || ""} name="diskon" onChange={this.handleChangeDetail} type="number" className="form-control input-sm"/>
          </div>
        </span>
      </div>
      <div className="row">
        <span className="col-8 text-right">Total :</span>
        <span className="col-4 text-right">{`Rp${subtotal-diskon}`}</span>
      </div>
  </div>
</div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  barangs: state.invoice.barangs,
  pembayaran: state.invoice.pembayaran,
  diskon: state.invoice.diskon,
  subtotal: state.invoice.subtotal,
  total: state.invoice.total
})


export default connect(mapStateToProps, { addBarang, updateDetail, calculateTotal})(Table)
