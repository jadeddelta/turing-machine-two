import { createSlice } from '@reduxjs/toolkit';
import { createCell, replaceCell, standardizeSquareId } from './tape';

const testTapeCells = {
    ...createCell("TAPE-CELL-0", "", null, "TAPE-CELL-1"),
    ...createCell("TAPE-CELL-1", "", "TAPE-CELL-0", "TAPE-CELL-2"),
    ...createCell("TAPE-CELL-2", "", "TAPE-CELL-1", "TAPE-CELL-3"),
    ...createCell("TAPE-CELL-3", "", "TAPE-CELL-2", "TAPE-CELL-4"),
    ...createCell("TAPE-CELL-4", "", "TAPE-CELL-3", "TAPE-CELL-5"),
    ...createCell("TAPE-CELL-5", "", "TAPE-CELL-4", "TAPE-CELL-6"),
    ...createCell("TAPE-CELL-6", "", "TAPE-CELL-5", "TAPE-CELL-7"),
    ...createCell("TAPE-CELL-7", "", "TAPE-CELL-6", "TAPE-CELL-8"),
    ...createCell("TAPE-CELL-8", "", "TAPE-CELL-7", "TAPE-CELL-9"),
    ...createCell("TAPE-CELL-9", "", "TAPE-CELL-8", "TAPE-CELL-10"),
    ...createCell("TAPE-CELL-10", "", "TAPE-CELL-9", "TAPE-CELL-11"),
}

const initialState = {
    /** cell ID that the tape displayed on screen starts at */
    anchorCell: 0,
    /** first cell ID */
    tapeHead: 0,
    /** last cell ID */
    tapeTail: 0,
    /** cell ID of the cell that is being focused on by the head */
    tapePointer: 0,
    tapeCellsById: testTapeCells,
    tapeInternalState: "0",
    highlightedCellOrder: null,
};

const tapeSlice = createSlice({
    name: 'tape',
    initialState,
    reducers: {
        /**
         * fills the tape with a given string id and val, or with a given val
         * and numeric position, using current anchor to modify
         * @param {*} action.payload contains square's HTML element id, value to be put in, or position 
         */
        fillTape: (state, action) => {
            let target;
            const { id, val, position } = action.payload;
            if (id) {
                target = state.tapeCellsById[id];
                state.tapeCellsById[id] = replaceCell(val, target.prev, target.next)
            } else {
                let targetPosition = position + state.anchorCell;
                target = state.tapeCellsById[standardizeSquareId(targetPosition)];
                state.tapeCellsById[standardizeSquareId(targetPosition)] = replaceCell(val, target.prev, target.next)
            }
        },
        headStateChanged: (state, action) => {
            const newInternalState = action.payload;
            state.tapeInternalState = newInternalState;
        },
        highlightedCell: (state, action) => {
            const order = action.payload;
            state.highlightedCellOrder = order;
        }
    },
});

export const {
    fillTape,
    headStateChanged,
    highlightedCell,
} = tapeSlice.actions;

export default tapeSlice.reducer;