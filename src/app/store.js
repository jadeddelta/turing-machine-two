import guiSlice from "@/features/gui/guiSlice";
import machineSlice from "@/features/machine/machineSlice";
import tableSlice from "@/features/table/tableSlice";
import tapeSlice from "@/features/tape/tapeSlice";
import trialSlice from "@/features/trial/trialSlice";
import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
    reducer: {
        gui: guiSlice,
        machine: machineSlice,
        table: tableSlice,
        tape: tapeSlice,
        trial: trialSlice
    }
})