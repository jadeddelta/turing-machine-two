/* ---- Square/Tape Cell IDs ---- */
export const SQUARE_ID_PREFIX = "TAPE-CELL-";
export const standardizeSquareId = (id) => {
    return (id == null) ? null : SQUARE_ID_PREFIX + id;
}
export const getTapeCellNumber = (fullId) => parseInt(fullId.slice(SQUARE_ID_PREFIX.length, fullId.length), 10);
export const getActiveCellId = () => getTapeCellNumber(document.activeElement.id);
/* ---- Square/Tape Cell IDs ---- */

/* ---- h ---- */
export const createCell = (cur, val=null, prev=null, next=null) => {
    return {
        [cur]: {
            val: val,
            prev: prev,
            next: next
        }
    }
}

export const replaceCell = (val, prev=null, next=null) => {
    return {
        val: val,
        prev: prev,
        next: next
    }
}