import { confirmVisibility, deleteVisibility } from '@/lib/slicers/popupSlicer';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ViewList = () => {

    const dispatch = useDispatch();

    const listItems = useSelector(state => state.popupReducer.data)

    const confirmSelector = useSelector(state => state.popupReducer.confirmPopup);

    const deleteSelector = useSelector(state => state.popupReducer.deletePopup)

    const handletDelete = (index) => {

        dispatch(deleteVisibility({ status: false, show: true, id: index }))
    }
    return (
        <>
            <div className='container m-5'>

                <h5>View List</h5>

                <div className="row">
                    <div className="col-6">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Items</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            {listItems && listItems.map((item, index) => (

                                <>

                                    <tbody>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item}</td>
                                            <td className='text-danger' onClick={() => { handletDelete(index) }}>
                                                <i class="fa-solid fa-trash-can"></i>
                                            </td>
                                        </tr>

                                    </tbody>

                                </>
                            ))}

                        </table>

                    </div>
                </div>



            </div>

        </>
    )
}

export default ViewList