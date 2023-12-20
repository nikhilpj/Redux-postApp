import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        id:'1',title:'to do duty',content:'every day'
    },
    {
        id:'2',title:'to be workalchoholic',content:'6 days in a week'
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