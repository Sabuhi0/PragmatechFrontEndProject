import React from 'react'
import ReactDOM  from 'react-dom'
import '../css/modal.css'


const Modal = (props) => {

    return ReactDOM.createPortal(
        <div className='modal'>
            <div className='modal-content'>
                <h3>I am a modal</h3>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;