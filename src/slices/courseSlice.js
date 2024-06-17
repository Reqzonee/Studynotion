import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step : 1,
    course : null,
    editCourse : false,
    paymentLoading : false,
}

const courseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{
        setStep:(state, action) => {
            state.step = action.paylod
        },
        setCourse:(state, action)=>{
            state.course = action.payload
        },
        setEditCourse: (state, action)=>{
            state.editCourse = action.payload 
        },
        setPaymentLoading: (state, action)=>{
            state.paymentLoading = action.payload 
        },
        resetCouseState: (state) =>{
            state.step = 1
            state.course = null
            state.editCourse = false 
        },
    },
})

export const {
    setStep,
    setCourse,
    setEditCourse,
    setPaymentLoading,
    resetCouseState,
} = courseSlice.actions

export default courseSlice.reducer