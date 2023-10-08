import {configureStore} from '@reduxjs/toolkit'
import DiabloSlice from './ReducerSlice/DiabloSlice'



export const store = configureStore({
    reducer: {
        Diablo: DiabloSlice,
    },
})