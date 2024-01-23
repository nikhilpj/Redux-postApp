import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        id:'1',title:'exercize ',content:'every day'
    },
    {
        id:'2',title:'drink water',content:'6 glass'
    }
]

const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        addpost:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addpost} = postSlice.actions

export default postSlice.reducer