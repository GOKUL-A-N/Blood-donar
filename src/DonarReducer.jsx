
import {createSlice} from "@reduxjs/toolkit"

const DonarReducer = createSlice({
    name: "donar",
    initialState: [
        {
            id:1,
            name: "Gokul",
            email: "gokulcricketer141103@gmail.com",
            phone: "9944732926",
            bg: "A+"
        },
    ],
    reducers: {
        addDonar: (state , action ) => {
            state.push(action.payload)
        },
        deleteDonar: (state , action) => {
            const {id} = action.payload;
            const uu = state.find(donar => donar.id == id )
            if(uu) {
                return state.filter( f => f.id !== id)
            }
        },
    }
})


export const  {addDonar , deleteDonar} = DonarReducer.actions;
export default DonarReducer.reducer;