import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {timerSlice} from "../../Timer/timerSlice";



export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    timer: timerSlice,
    // stopwatch: stopwatchSlice,


})



export const store = configureStore({
    reducer: rootReducer,
})

