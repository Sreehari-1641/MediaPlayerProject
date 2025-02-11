import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



const Allvideos = () => {
     const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
  return (
    <>
    <div><h2>All Videos</h2>
    <Card style={{ width: '18rem' }} onClick={handleShow}>
      <Card.Img className='rounded' variant="top" src="https://hips.hearstapps.com/hmg-prod/images/racing-yellow-911-gt3rs-weissach-package-047-dsc07430-1677506360.jpg?crop=0.668xw:1.00xh;0.197xw,0&resize=1200:*" />
      <Card.Body>
        <div className='d-flex justify-content-between align-items-center'>
        <Card.Title>Card Title</Card.Title>
        <button className='btn'><i className="fa-solid fa-trash text-warning" ></i></button>
        </div>

      </Card.Body>
    </Card>
    </div>
     
     <div className='d-flex align-items-center gap-2'>
         <h2>Upload New Video</h2>
         <button className='btn btn-danger' style={{borderRadius:"50%"}} onClick={handleShow}><i className="fa-solid fa-plus"></i></button>
     </div>
     <Modal show={show} onHide={handleClose} size='lg'>
     <Modal.Header closeButton>
       <Modal.Title>Caption</Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <iframe width="100%" height="315" src="https://www.youtube.com/embed/478Ay_lNpT4?si=Ox45JZHRvFODqPpL&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 
     
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

export default Allvideos