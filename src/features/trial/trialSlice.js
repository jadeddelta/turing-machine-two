import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    testByIds: [],
    isRunningTrial: false,
    runningTrials: [],
};

const trialSlice = createSlice({
    name: 'trial',
    initialState,
    reducers: {},
});

export const {

} = trialSlice.actions;

export default trialSlice.reducer;