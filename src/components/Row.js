import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteBarang, updateBarang, calculateTotal } from '../actions/actions'
export class Row extends Component {
  state = {
    nama: "",
    jumlah: "",
    satuan: "",
    hargaSatuan: "",
  }
  componentDidMount() {
    const { nama, jumlah, satuan, hargaSatuan } = this.props.barang
    this.setState({
      nama,
      jumlah, 
      satuan, 
      hargaSatuan
    })
  }

  handleChange = (e) => {
    // update di state component ...
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })

    const { id } = this.props.barang
    this.props.updateBarang({
      id,
      ...this.state,
      [name] : value
    })
    
    // dan update nilai subtotal  dan total yang baru
    this.props.calculateTotal()
    // this.updateBarang()
  }

  

  handleDelete = (id) => {
    console.log(id)
    this.props.deleteBarang(id)
  }

  render() {
    // Tarik variabel dari state
    const { nama, jumlah, satuan, hargaSatuan } = this.state
    const { mataUang } = this.props
    // Tarik id dari props barang ( karena id tidak berubah, jadi tidak perlu letakkan di state)
    const { id } = this.props.barang
    return (
      <>
      <tr className="d-flex">
      <td className="pl-0 col-5"><input onChange={this.handleChange} type="text" className="form-control" name="nama" value={nama} /></td>
      <td className="col-1"><input onChange={this.handleChange} type="number" className="form-control" name="jumlah" value={jumlah} /></td>
      <td className="col-2"><input onChange={this.handleChange} type="text" className="form-control" name="satuan" value={satuan}/></td>
      <td className="col-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">{mataUang}</span>
          </div>
          <input onChange={this.handleChange} type="number" className="form-control" name="hargaSatuan" value={hargaSatuan} />
        </div>
       </td>
      <td className="col-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">{mataUang}</span>
          </div>
        <input type="number" className="form-control"  value={Number.isNaN(jumlah*hargaSatuan) ? "" : jumlah*hargaSatuan} readOnly/>
        </div>
      </td>

      {/* kolom terakhir buat button delete */}
      <td className="border-0 col-1 d-flex align-items-center">
        <div className="align-middle">
         <button onClick={this.handleDelete.bind(this, id)} className="text-white btn btn-sm btn-danger">
          <i className="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
        </>
    )
  }
}

const mapStateToProps = state => ({
  mataUang: state.invoice.mataUang
})

export default connect(mapStateToProps, { deleteBarang, updateBarang, calculateTotal })(Row)
