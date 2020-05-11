import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'


export class Petunjuk extends Component {
  state = {
    showModal: false
  }

  handleClose = e => {
    this.setState({showModal: false})
  }
  
  render() {
    return (
      <div className="petunjuk py-4">
          <div className="alert alert-info" role="alert">
          Langkah penggunaan aplikasi:
            <ul>
              <li>Gunakan PC. Hasil yang didapat di mobile belum maksimal.</li>
              <li>Upload logo terlebih dahulu kemudian atur ukuran logo yang diinginkan.</li>
              <li>Jika ada input yang tidak mau ditampilkan di invoice, maka kosongkan saja.</li>
              <li>Tambah barang dengan mengklik tombol <i className="fas fa-plus"></i>, hapus barang dengan tombol <i className="fas fa-trash"></i></li>
              <li>Setelah selesai, klik tombol <i className="fas-fa-file-image"></i> untuk melihat hasil</li>
              <li>Jika sudah benar, maka klik tombol download untuk mendowload invoice dalam format <code>jpeg</code> </li>
            </ul>
              <a className="btn btn-info btn-sm text-white" onClick={() => this.setState({showModal: true})} >Lihat update</a>
          <Modal show={this.state.showModal} onHide={this.handleClose} size="xl">
            <Modal.Header closeButton>
              <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <span className="font-weight-bold">12/05</span>
              <ul>
                <li>Input tanggal hanya dengan klik (<code>DatePicker</code>)</li>
              </ul>
            </Modal.Body>
          </Modal>
          </div>
          </div>
    )
  }
}



export default Petunjuk
