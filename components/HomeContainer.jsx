import ConfirmPopup from '@/commonComponent/ConfirmPopup'
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from 'react-redux'
import AddList from './AddList';
import ViewList from './ViewList';
import DeletePopup from '@/commonComponent/DeletePopup';
import ConfirmView from './ConfirmView';

const HomeContainer = ({ children }) => {

    const dispatch = useDispatch()

    const confirmSelector = useSelector(state => state.popupReducer.confirmPopup)
    const deleteSelector = useSelector(state => state.popupReducer.deletePopup)

    return (

        <>

            <div className="container mt-5">

                <h2 className='mb-4'>Add Items and List Items With Delete Action By Using React-Redux</h2>

                <Tabs id='left-tabs-example' defaultActiveKey={1}>
                    <Tab eventKey={1} title="Add List">
                        <AddList />
                    </Tab>
                    <Tab eventKey={2} title="View List">
                        <ViewList />
                    </Tab>
                    <Tab eventKey={3} title="Confirm">
                        <ConfirmView />
                    </Tab>
                </Tabs>

            </div>

            <div>

                <DeletePopup visible={deleteSelector.show} />
                <ConfirmPopup visible={confirmSelector.show} />
                {children}
            </div>
        </>
    )
}

export default HomeContainer