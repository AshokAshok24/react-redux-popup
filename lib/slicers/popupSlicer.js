const { createSlice } = require("@reduxjs/toolkit");



const popupSlicer = createSlice({

    name: "popupSlice",
    initialState: {

        count: 0,
        data: [],
        deletePopup: { show: false, status: false, id: null },
        confirmPopup: { show: false, status: false },
    },
    reducers: {

        addListItems: (state, data) => {
            state.data.push(data.payload)
        },
        deleteVisibility: (state, data) => {

            state.deletePopup.show = data.payload?.show || false
            state.deletePopup.status = data.payload?.status || false

            if (data.payload?.id !== undefined && data.payload?.id !== null) {
                state.deletePopup.id = data.payload?.id;
            }

            if (data.payload?.status) {
                state.data = state.data.filter((val, index) => index !== data.payload?.id)
            }

        },
        confirmVisibility: (state, data) => {

            state.confirmPopup.show = data.payload?.show || false
            state.confirmPopup.status = data.payload?.status || false
        }
    }
})


export const { addListItems, deleteVisibility, confirmVisibility } = popupSlicer.actions;
export default popupSlicer.reducer




