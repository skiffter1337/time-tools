import {AppRootStateType} from "../App/store/store";

export const selectTime = (state: AppRootStateType) => state.stopwatch.time
export const selectStatus = (state: AppRootStateType) => state.stopwatch.status
export const selectShowHotKeys= (state: AppRootStateType) => state.stopwatch.showHotkey