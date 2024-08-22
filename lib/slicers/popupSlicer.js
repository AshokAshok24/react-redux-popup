const { createSlice } = require("@reduxjs/toolkit");



const popupSlicer = createSlice({

    name: "popupSlice",
    initialState: {

        count: 0,
        data: [],
        confirmPopup: { show: false, status: false },
        deletePopup: { show: false, status: false, id: null }
    },
    reducers: {

        confirmVisibility: (state, data) => {

            state.confirmPopup.show = data.payload?.show || false
            state.confirmPopup.status = data.payload?.status || false
        }
    }
})


export const { confirmVisibility } = popupSlicer.actions;
export default popupSlicer.reducer




