import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        id:'1',user:'nikhil jose'
    },
    {
        id:'2',user:'nidhin jose'
    }
    
]

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    }
})

export default userSlice.reducer