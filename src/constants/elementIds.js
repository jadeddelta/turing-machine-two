/* ---- Table Row/Rule IDs ---- */
export const ROW_ID_PREFIX = "TABLE-ROW-";
export const standardizeTableRowId = (id) => ROW_ID_PREFIX + id;
export const getTableRowNumber = (fullId) => parseInt(fullId.slice(ROW_ID_PREFIX.length, fullId.length), 10);
/* ---- Table Row/Rule IDs ---- */
