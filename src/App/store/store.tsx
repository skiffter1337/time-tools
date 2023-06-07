import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {timerSlice} from "../../Timer/timerSlice";
import {stopwatchSlice} from "../../Stopwatch/stopwatchSlice";
import {appSlice} from "../app.slice";



export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    timer: timerSlice,
    stopwatch: stopwatchSlice,
    app: appSlice


})



export const store = configureStore({
    reducer: rootReducer,
})

