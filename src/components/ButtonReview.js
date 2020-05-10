import React, { Component } from 'react'
import PreviewModal from './PreviewModal'
import { connect } from 'react-redux'
import { togglePreviewModal } from '../actions/actions'
import { Modal, Button } from 'react-bootstrap'
import htmlToImage from 'html-to-image'
import download from 'downloadjs'


export class ButtonReview extends Component {
  state = {
    showModal: false
  }

  handleDownload = e => {
      htmlToImage.toPng(document.getElementById('modal-preview'))
    .then(function (dataUrl) {
      download(dataUrl, 'my-node.jpeg');
    });
  }

  openPreviewModal = e => {
    this.props.togglePreviewModal()
  }
  open = e => {
    this.setState({
      showModal:true
    })
    this.props.togglePreviewModal()
  }

  close = e => {
    this.setState({
      showModal: false
    })
    this.props.togglePreviewModal()
  }
  
  render() {
    return (
      <>
      <div className=" float-right   pb-4">

      <Button onClick={this.open} className="float-right btn-primary">
      <i className="fas fa-file-image"></i> Lihat invoice
      </Button>
      {/* <Button onClick={this.open} className="btn-success">
      <i className="fas fa-download"></i> Download
      </Button> */}
      </div>

    <Modal show={this.state.showModal} onHide={this.close} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Hasil Invoice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PreviewModal/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.handleDownload} className="btn-primary">
          <i className="fas fa-download"></i> Download
          </Button>
        <Button onClick={this.close} className="btn-light">
          <i className="fas fa-times"></i> Tutup</Button>
      </Modal.Footer>
    </Modal>
    </>
    )
  }
}

const mapStateToProps = state => ({
  isOnPreview: state.invoice.isOnPreview
})

export default connect(mapStateToProps, { togglePreviewModal })(ButtonReview)
