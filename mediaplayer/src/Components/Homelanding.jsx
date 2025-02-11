import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Homelanding = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    <div className='d-flex align-items-center gap-2'>
        <h2>Upload New Video</h2>
        <button className='btn btn-danger' style={{borderRadius:"50%"}} onClick={handleShow}><i className="fa-solid fa-plus"></i></button>
    </div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Uploading Video Details !!!</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    <FloatingLabel
        controlId="floatingInput"
        label="Video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Image URL" />

        </FloatingLabel>

        <FloatingLabel
        controlId="floatingInput"
        label="Video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Image URL" />

        </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Image URL" />

        </FloatingLabel>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

export default Homelanding