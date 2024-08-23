import React from 'react'
import { useSelector } from 'react-redux'

const ViewList = () => {

    const listItems = useSelector(state => state.popupReducer.data)
    return (
        <>
            <div className='container m-5'>

                <h5>View List</h5>



                <div className="row">
                    <div className="col-6">

                        {JSON.stringify(listItems)}

                        <ul className='nav-list'>



                            {listItems && listItems.map((item, index) => (

                                <>

                                    <li className='list' key={index}>{item}</li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>



            </div>

        </>
    )
}

export default ViewList