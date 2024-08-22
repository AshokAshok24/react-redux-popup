import ConfirmPopup from '@/commonComponent/ConfirmPopup'
import { confirmVisibility } from '@/lib/slicers/popupSlicer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const HomeContainer = ({ children }) => {

    const dispatch = useDispatch()

    const confirmSelectot = useSelector(state => state.popupReducer.confirmPopup)

    console.log("confrm Selector", confirmSelectot)
    return (

        <>

            <div className='main'>

                <h2>HomeContainer</h2>

                <ul>
                    <li>Add List</li>
                    <li>Delete List</li>
                    <li>Confirm popup</li>
                </ul>

            </div>


            <button className='btn btn-success' onClick={() => { dispatch(confirmVisibility({ show: true })) }}>Confirm</button>
            <div>
                <ConfirmPopup visible={confirmSelectot.show} />
                {children}
            </div>
        </>
    )
}

export default HomeContainer