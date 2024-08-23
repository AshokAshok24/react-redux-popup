import { confirmVisibility } from '@/lib/slicers/popupSlicer'
import React from 'react'
import { useDispatch } from 'react-redux'

const ConfirmView = () => {

    const dispatch = useDispatch()
    return (
        <>
            <div className="container m-5">

                <h5>Click Here to Get PopUp</h5>

                <button className='btn btn-secondary mt-4' onClick={() => { dispatch(confirmVisibility({ show: true })) }}>Confirm</button>

            </div>
        </>
    )
}

export default ConfirmView