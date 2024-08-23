import ConfirmPopup from '@/commonComponent/ConfirmPopup'
import { confirmVisibility } from '@/lib/slicers/popupSlicer'
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from 'react-redux'
import AddList from './AddList';
import ViewList from './ViewList';
import DeleteList from './DeleteList';

const HomeContainer = ({ children }) => {

    const dispatch = useDispatch()

    const confirmSelectot = useSelector(state => state.popupReducer.confirmPopup)

    console.log("confrm Selector", confirmSelectot)
    return (

        <>

            <div className="container mt-5">

                <h2 className='mb-4'>HomeContainer</h2>

                <Tabs id='left-tabs-example' defaultActiveKey={1}>
                    <Tab eventKey={1} title="Add List">
                        <AddList />
                    </Tab>
                    <Tab eventKey={2} title="View List">
                        <ViewList />
                    </Tab>
                    <Tab eventKey={3} title="Confirm">
                        <DeleteList />
                    </Tab>
                </Tabs>

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