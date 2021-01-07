import React ,{useState} from 'react'
import {BiMessageSquareAdd} from 'react-icons/bi'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function NotLoged() {
    const [show, setShow] = useState(false); 
    return (
        <>
            <Button variant="warning" onClick={() => setShow(true)} >
                أضف اعلانك <BiMessageSquareAdd/>
            </Button>
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
