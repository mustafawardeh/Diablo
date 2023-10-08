import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data/data";


const initialState = {
    position:0,
    all_info:{
        season:data[0].season,
        logo:data[0].logo,
        title:data[0].title,
        details:data[0].details,
        image:data[0].image
    }
}


export const DiabloSlice = createSlice({
    name:"diablo",
    initialState,
    reducers:{
        setPosition:(state,action)=>{
            state.position= action.payload;
        },
        setAll_Info:(state,action)=>{
            state.all_info.season=action.payload.season
            state.all_info.title=action.payload.title
            state.all_info.details=action.payload.details
            state.all_info.image=action.payload.image
            state.all_info.logo=action.payload.logo
        }

    }
})

export const {setPosition,setAll_Info}= DiabloSlice.actions

export default DiabloSlice.reducer