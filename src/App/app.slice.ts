import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type ThemeType = 'light' | 'dark'
const slice = createSlice({
    name: 'app',
    initialState: {
        theme: 'light'
    },
    reducers: {
        setTheme: (state, action: PayloadAction<{theme: ThemeType}>) => {
            state.theme = action.payload.theme
        }
    }
})

export const appSlice = slice.reducer
export const appActions = slice.actions