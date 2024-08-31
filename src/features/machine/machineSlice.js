import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isEditingTrial: false,
    isEditingExpectedTape: false,
    editingTrialId: null,
    editingTrialName: null,
    anyChangeInTrial: false,

    originalTape: null,
    editingStartTape: null,
    editingExpectedTape: null,

    isRunning: false,
    interval: null,
    animationSpeedFactor: 1.0,
    animationSpeed: 600,
    animationOn: true,
    machineReportError: "",
    showReportedError: false,

    anyChangeInNormal: false,
    stepCount: 0,
    runHistory: [],
    undoEditHistory: [],
    redoEditHistory: []
};

const machineSlice = createSlice({
    name: 'machine',
    initialState,
    reducers: {
        
    },
});

export const {
        
} = machineSlice.actions;

export default machineSlice.reducer;