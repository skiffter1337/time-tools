import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer = combineReducers({
    timer: timerSlice,
    stopwatch: stopwatchSlice,


})

export const store = configureStore({
    reducer,
})