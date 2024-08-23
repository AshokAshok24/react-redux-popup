import { deleteVisibility } from '@/lib/slicers/popupSlicer'
import React from 'react'
import { Modal } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const DeletePopup = () => {
    const dispatch = useDispatch()

    const handleOnHide = () => { dispatch(deleteVisibility({ show: false })) }

    const deleteSelector = useSelector(state => state.popupReducer.deletePopup)

    console.log("delete Selector in deletePopup", deleteSelector)

    const handleCancel = () => {

        dispatch(deleteVisibility({ show: false, status: false }))
    }

    const handleDelete = () => {

        if (deleteSelector && deleteSelector.id !== undefined) {
            dispatch(deleteVisibility({ show: deleteSelector.show, id: deleteSelector.id, status: true }))

        }
        dispatch(deleteVisibility())
    }
    return (
        <>
            <Modal show={deleteSelector.show} centered onEscapeKeyDown={handleOnHide} className='popup'>
                <Modal.Body>
                    <div className="wrapper">

                        <div className="d-flex flex-column align-items-center">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <h3>Are You Sure ?</h3>
                            <p>Please Confirm to Delete</p>
                        </div>

                        <div className='btn-wrapper'>
                            <button className='cancel' onClick={handleCancel}>Cancel</button>
                            <button className='confirm' onClick={handleDelete}>Confirm</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default DeletePopup