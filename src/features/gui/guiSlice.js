import { createSlice } from '@reduxjs/toolkit';
import { 
    DRAGGABLE_LEFT_BOUNDARY,
    DRAG_GRID_INTERVAL,
    MAXIMUM_DISPLAYED_CELLS,
    MINIMUM_DISPLAYED_CELLS,
    MINIMUM_HEAD_WIDTH,
    MINIMUM_LEFT_OFFSET,
} from './gui';

const initialState = {
    /** Current window.innerWidth */
    screenSize: 0,
    /** Number of tape cells displayable given the screen size. */
    cellNum: 0,
    /** X position of the head, modifiable by dragging. */
    headX: 0,
    /** Width of the head in pixels, with a minimum of 30. */
    headWidth: MINIMUM_HEAD_WIDTH,
    /** Offset of the head. */
    headLeftOffset: MINIMUM_LEFT_OFFSET,
    /** Location of the rightmost boundary of the draggable area, in pixels. */
    rightBoundary: 0,
    adjustTape: false,
};

const guiSlice = createSlice({
    name: 'gui',
    initialState,
    reducers: {
        screenResized: (state, action) => {
            const { screenSize } = action.payload;
            const allocatedTapeSpace = (screenSize * 0.9) - 96; // TODO: change for new button widths (dynamically?)
            const newCellNum = Math.min(
                MAXIMUM_DISPLAYED_CELLS, 
                Math.max(MINIMUM_DISPLAYED_CELLS, Math.ceil(allocatedTapeSpace / 50))
            );
            const middleCell = Math.floor(state.cellNum / 2);
            
            if (newCellNum !== state.cellNum) {
                state.cellNum = newCellNum;
                state.screenSize = screenSize;
                state.headX = DRAGGABLE_LEFT_BOUNDARY + middleCell * DRAG_GRID_INTERVAL;
                state.rightBoundary = DRAGGABLE_LEFT_BOUNDARY + (state.cellNum - 1) * DRAG_GRID_INTERVAL;
            }
        },
        headStringChanged: (state, action) => {
            const headString = action.payload;
            const headStringLength = headString.length;

            // char length is ~10 px, with 10 px of white space on each side
            let newHeadWidth = headStringLength * 10 + 20;
            if (newHeadWidth <= MINIMUM_HEAD_WIDTH) {
                state.headWidth = MINIMUM_HEAD_WIDTH;
                state.headLeftOffset = MINIMUM_LEFT_OFFSET;
            } else {
                state.headWidth = newHeadWidth;
                state.headLeftOffset = (newHeadWidth - MINIMUM_HEAD_WIDTH) / 2;
            }
        },
    },
});

export const {
    screenResized,
    headStringChanged,
} = guiSlice.actions;

export default guiSlice.reducer;