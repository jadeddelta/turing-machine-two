import { screenResized } from "./gui/guiSlice"
import { highlightedCell } from "./tape/tapeSlice";

export const resizeScreenAndTapeThunk = (newScreenSize) => (dispatch, getState) => {
    const initialCellNum = getState().gui.cellNum;
    const initialPointer = getState().tape.tapePointer;
    dispatch(screenResized({ screenSize: newScreenSize }));
    const newCellNum = getState().gui.cellNum;

    if (newCellNum !== initialCellNum) {
        const newPointer = getState().tape.tapePointer;
        let diff = newPointer - initialPointer;
        let moveLeft;
        if (diff > 0) {
            moveLeft = true;
        } else {
            diff = -diff;
            moveLeft = false;
        }

        for (let i = 0; i < diff; i++) {
            if (moveLeft) {
                //dispatch(moveLeftThunk());
            } else {
                //dispatch(moveRightThunk());
            }
        }
    }

    dispatch(highlightedCell(null));
}