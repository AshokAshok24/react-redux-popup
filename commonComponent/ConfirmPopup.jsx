import { confirmVisibility } from '@/lib/slicers/popupSlicer'
import React from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


const ConfirmPopup = ({ visible, setShow }) => {

    const dispatch = useDispatch()

    const handleOnHide = () => { dispatch(confirmVisibility({ show: false })) }

    const confirm = useSelector(state => state.popupReducer.confirmPopup)

    return (
        <>
            <Modal show={confirm.show} centered onEscapeKeyDown={handleOnHide} className='popup'>
                <Modal.Body>
                    <div className="wrapper">

                        <div className="d-flex flex-column align-items-center">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <h3>Are You Sure ?</h3>
                            <p>Please Confirm to Proceed Further</p>
                        </div>

                        <div className='btn-wrapper'>
                            <button className='cancel'>Cancel</button>
                            <button className='confirm'>Confirm</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default ConfirmPopup