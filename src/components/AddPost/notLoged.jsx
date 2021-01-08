import React ,{useState} from 'react'
import {BiMessageSquareAdd} from 'react-icons/bi'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {MdAddToPhotos} from 'react-icons/md'

function NotLoged() {
    const [show, setShow] = useState(false); 
    return (
        <>
             <MdAddToPhotos className="addpostIcon" onClick={() => setShow(true)}/>
            <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title" >
            <Modal.Body className="Modal" >
                يجب عليك تسجيل الدخول أولاً لتتمكن من إضافة اعلانك 
            </Modal.Body>
            <closeButton/>
            </Modal >
        </>
    )
}

export default NotLoged
