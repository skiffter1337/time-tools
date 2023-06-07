import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateType = {
    time: TimeType
    status: StopWatchStatus
    showHotkey: boolean
}

export type TimeType = {
    ms: number
    s: number
    m: number
    h: number
}
export enum StopWatchStatus {
    Deactivated,
    Activated,
    Paused
}

const initialState: InitialStateType = {
    time: {ms: 0, s: 0, m: 0, h: 0},
    status: StopWatchStatus.Deactivated,
    showHotkey: false
}


const slice = createSlice({
    name: "stopWatch",
    initialState,
    reducers: {
        setTime: (state, action: PayloadAction<{time: {ms: number, s: number, m: number, h: number}}>) => {
            state.time = action.payload.time
        },
        reset: (state) => {
          state.time = {ms: 0, s: 0, m: 0, h: 0}
        },
        setStatus: (state, action: PayloadAction<{status: number}>) => {
            state.status = action.payload.status
        },
        showHotKeys: (state, action: PayloadAction<{showHotKeys: boolean}>) => {
            state.showHotkey = action.payload.showHotKeys
        }
    }
})

export const stopwatchSlice = slice.reducer
export const stopWatchActions = slice.actions

