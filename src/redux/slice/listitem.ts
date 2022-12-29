import { createSlice } from "@reduxjs/toolkit";


import { ResoluitonList } from "../../types/type";

type InitialState = {
    listitem: ResoluitonList[];
}

const initialState: InitialState = {
    listitem: [],
}


const listSlice = createSlice({
    name: "resolutionlist",
    initialState,
    reducers: {
        addResolution: (state, action) =>{
            state.listitem.push(action.payload);
            
        },
        removeResolution: (state, action) =>{
            for (let i = 0; i < state.listitem.length; i++){
                if(state.listitem[i].name === action.payload){
                    
                    
                    state.listitem.splice(i,1)
                    break;
                }
            }
            
            
        }
    },
    
},
)

export const action = listSlice.actions;
export default listSlice.reducer;

