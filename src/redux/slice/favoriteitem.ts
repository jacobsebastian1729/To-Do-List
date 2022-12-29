import { createSlice } from "@reduxjs/toolkit";


import { ResoluitonList } from "../../types/type";

type InitialState = {
    listitem: ResoluitonList[];
}

const initialState: InitialState = {
    listitem: [],
}


const listSlice = createSlice({
    name: "favoritelist",
    initialState,
    reducers: {
        addFavorite: (state, action) =>{
            state.listitem.push(action.payload);
            
        },
        
    },
    
},
)

export const actionfav = listSlice.actions;
export default listSlice.reducer;

