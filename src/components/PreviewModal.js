import React, { Component } from 'react'
// import Header from './Header'
import { connect } from 'react-redux'
import { togglePreviewModal } from '../actions/actions'



export class PreviewModal extends Component {
  
  

  componentWillUnmount() {
    this.props.togglePreviewModal()
  }


  render() {
    const { logo, logoWidth, logoHeight, nomor, tanggal, jatuhTempo, namaUser, namaKlien, alamatUser, alamatKlien, barangs, pembayaran, diskon, subtotal } = this.props
    return (
      <div id="modal-preview" className="mb-4 bg-white container mt-4">
        {/* header */}
        <div className="row">
        <div className="col-sm-6 d-flex align-items-center">
          {logo && <div className="logo-brand mt-2">
            <img alt="logo" src={logo} height={logoHeight} width={logoWidth}/>
          </div>}
        </div>
        <div className="col-sm-6">
          <h2 className="text-uppercase text-light text-right">invoice</h2>
          <form className="form-horizontal">
          {nomor && <div className="form-group row">
            <label htmlFor="nomor" className="col-sm-8 col-form-label text-right">No. invoice :</label>
            <div className="col-sm-4 d-flex align-items-center">
              {nomor}
            </div>
          </div>}
          {tanggal && <div className="form-group row">
            <label htmlFor="tanggal" className="col-sm-8 col-form-label text-right">Tanggal :</label>
            <div className="col-sm-4 d-flex align-items-center">
              {tanggal}
            </div>
          </div>}

          {jatuhTempo && <div className="form-group row">
            <label htmlFor="jatuhTempo" className="col-sm-8 col-form-label text-right">Jatuh tempo :</label>
            <div className="col-sm-4 d-flex align-items-center">
              {jatuhTempo}
            </div>
          </div>}
        </form>
        </div>
        </div>

        <hr className="my-4" />
        {/* info */}
        <div className="row">
        <div className="col-sm-5">
            <h4 className="supplier text-uppercase">
              Dari
            </h4>
            <form className="form-horizontal">
          {namaUser && <div className=" row">
            <label htmlFor="namaSupplier" className="col-sm-2 col-form-label">Nama:</label>
            <div className="col-sm-10 d-flex align-items-center">
              {namaUser}
            </div>
        </div>}
          {alamatUser && <div className=" row">
            <label htmlFor="alamatSupplier" className="col-sm-2 col-form-label">Alamat:</label>
            <div className="col-sm-10 d-flex align-items-center">
              {alamatUser}
            </div>
        </div>}
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
          {namaKlien && <div className=" row">
            <label htmlFor="namaKlien" className="col-sm-2 col-form-label">Nama:</label>
            <div className="col-sm-10 d-flex align-items-center">
              {namaKlien}
            </div>
        </div>}

          {alamatKlien && <div className="row">
            <label htmlFor="alamatKlien" className="col-sm-2 col-form-label">Alamat:</label>
            <div className="col-sm-10 d-flex align-items-center">
              {alamatKlien}
            </div>
        </div>}
        </form>
        </div>
      </div>

      <hr className="my-4"/>
      {/* tabel */}
      <div className="row">
        <div className="col-sm-12">
        <table className="table">
        <thead>
          <tr className="d-flex text-center">
            <th className="col-5" scope="col">Nama barang/jasa</th>
            <th className="col-1" scope="col">Jumlah</th>
            <th className="col-2" scope="col">Satuan</th>
            <th className="col-2" scope="col">Harga satuan</th>
            <th className="col-2" scope="col">Harga</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {barangs.map(barang => (
            <tr className="d-flex">
            <td className="text-left pl-0 col-5">{barang.nama}</td>
            <td className="col-1">{barang.jumlah}</td>
            <td className="col-2">{barang.satuan}</td>
            <td className="col-2">
              {`Rp${barang.hargaSatuan}`}
             </td>
            <td className="col-2">
              {`Rp${barang.jumlah*barang.hargaSatuan}`}
            </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pembayaran */}

        </div>
      </div>

      <div className="row">
  <div className="col">
    {pembayaran && <div className="container py-2 bg-light">
      <h5 className="text-uppercase">Pembayaran</h5>
      {pembayaran}
    </div>}
  </div>
  <div className="col detail">
      <div className="row">
        <span className="col-4 col-sm-8 text-right">Subtotal : </span>
        <span className="col-8 col-sm-4 text-right">{`Rp${subtotal}`}</span>
        
      </div>
      <div className="row">
        <span className="d-flex align-items-center justify-content-end col-4 col-sm-8 text-right">Diskon : </span>
        <span className="col-8 col-sm-4 text-right">
        {diskon || "-"}
        </span>
      </div>
      <div className="row">
        <span className="col-4 col-sm-8 text-right">Total :</span>
        <span className="col-8 col-sm-4 text-right">{`Rp${subtotal-diskon}`}</span>
      </div>
  </div>
</div> 
        <hr className="pb-4 border-0"/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isOnPreview: state.invoice.isOnPreview,
  logo: state.invoice.logo,
  logoWidth: state.invoice.logoWidth,
  logoHeight: state.invoice.logoHeight,
  nomor: state.invoice.nomor,
  tanggal: state.invoice.tanggal,
  jatuhTempo: state.invoice.jatuhTempo,
  namaUser: state.invoice.namaUser,
  namaKlien: state.invoice.namaKlien,
  alamatUser: state.invoice.alamatUser,
  alamatKlien: state.invoice.alamatKlien,
  barangs: state.invoice.barangs,
  pembayaran: state.invoice.pembayaran,
  diskon: state.invoice.diskon,
  subtotal: state.invoice.subtotal,
  total: state.invoice.total,
})

export default connect(mapStateToProps, { togglePreviewModal })(PreviewModal)
