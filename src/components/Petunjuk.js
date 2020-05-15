import React, { Component } from "react";
import { Modal, Dropdown } from "react-bootstrap";
import { connect } from 'react-redux'
import { updateDetail } from '../actions/actions'

export class Petunjuk extends Component {
  state = {
    showModalUpdate: false,
    showModalSetting: false,
  };

  handleClose = (e) => {
    this.setState({ showModalUpdate: false });
  };

  handleChangeCurrency = e => {
    this.props.updateDetail({
      mataUang: e.target.value
    })
  }

  render() {
    const mataUangs =Object.values(this.props.mataUangs)
    return (
      <div className="petunjuk py-4">
        <div className="alert alert-info" role="alert">
          Langkah penggunaan aplikasi:
          <ul>
            <li>Gunakan PC. Hasil yang didapat di mobile belum maksimal.</li>
            <li>
              Upload logo terlebih dahulu kemudian atur ukuran logo yang
              diinginkan.
            </li>
            <li>
              Jika ada input yang tidak mau ditampilkan di invoice, maka
              kosongkan saja.
            </li>
            <li>
              Tambah barang dengan mengklik tombol{" "}
              <i className="fas fa-plus"></i>, hapus barang dengan tombol{" "}
              <i className="fas fa-trash"></i>
            </li>
            <li>
              Setelah selesai, klik tombol <i className="fas-fa-file-image"></i>{" "}
              untuk melihat hasil
            </li>
            <li>
              Jika sudah benar, maka klik tombol download untuk mendowload
              invoice dalam format <code>jpeg</code>{" "}
            </li>
          </ul>
          <a
            className="btn btn-info btn-sm text-white"
            onClick={() => this.setState({ showModalUpdate: true })}
          >
            Lihat update
          </a>
          <a
            onClick={() => this.setState({ showModalSetting: true })}
            className="float-right btn btn-primary btn-sm text-white"
          >
            <i className="fas fa-cogs"></i>
          </a>
          <Modal
            show={this.state.showModalUpdate}
            onHide={this.handleClose}
            size="xl"
          >
            <Modal.Header closeButton>
              <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <span className="font-weight-bold">15/05</span>
              <ul>
                <li>
                  Penambahan pengaturan mata uang
                </li>
              </ul>
              <span className="font-weight-bold">12/05</span>
              <ul>
                <li>
                  Input tanggal hanya dengan klik (<code>DatePicker</code>)
                </li>
              </ul>
            </Modal.Body>
          </Modal>
          <Modal
            show={this.state.showModalSetting}
            onHide={() => this.setState({ showModalSetting: false })}
            size="xl"
          >
            <Modal.Header closeButton>
              <Modal.Title>Setting</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="input-group mb-3">
                <select onClick={this.handleChangeCurrency} className="custom-select" id="inputGroupSelect03">
                  {mataUangs.map(mataUang => (
                    <option value={mataUang.symbol}>{`${mataUang.name} - ${mataUang.symbol}`}</option>
                  ))}
                </select>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mataUangs: state.invoice.mataUangs
})
export default connect(mapStateToProps, { updateDetail })(Petunjuk);
