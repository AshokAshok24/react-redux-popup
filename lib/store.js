import popupSlicer from "./slicers/popupSlicer";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({

    reducer: {
        popupReducer: popupSlicer
    }
})



export default store