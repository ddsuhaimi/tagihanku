import React, { Component } from 'react'

export class Petunjuk extends Component {
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
          </div>
          </div>
    )
  }
}

export default Petunjuk
