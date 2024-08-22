import React from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ConfirmPopup = ({ visible }) => {


    const confirm = useSelector(state => state.popupReducer.confirmPopup)

    return (
        <>
            <Modal show={confirm.show} centered >
                <Modal.Body>
                    <div>Popup Model Box</div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ConfirmPopup