import { addListItems } from '@/lib/slicers/popupSlicer'
import React from 'react'
import { useDispatch } from 'react-redux'

const AddList = () => {

    const [inputVal, setInputVal] = React.useState("")

    const dispatch = useDispatch()

    const handleSubmit = () => {

        if (inputVal) {

            dispatch(addListItems(inputVal));
            setInputVal("")
        }
    }

    return (
        <>
            <div className='container m-5'>

                <h5>AddList</h5>



                <div className="row">
                    <div className="col-6">
                        <input className='form-control' value={inputVal} onChange={(e) => { setInputVal(e.target.value) }} type='text' />
                        <div className="mt-3">
                            <button type="submit" onClick={handleSubmit} className='btn btn-success'>Add</button>
                        </div>

                    </div>
                </div>



            </div>
        </>
    )
}

export default AddList