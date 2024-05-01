import { RowID, RowElement } from './interface';
/**
 * Inserts a new row into the table.
 * @param row The row element to be inserted.
 * @returns The ID or index of the inserted row.
 * @throws Error if there is an issue inserting the row.
 */
export function insertRow(row: RowElement): number;
/**
 * Deletes a row from the table.
 * @param rowId The ID or index of the row to be deleted.
 * @throws Error if there is an issue deleting the row.
 */
export function deleteRow(rowId: RowID): void;
/**
 * Updates a row in the table.
 * @param rowId The ID or index of the row to be updated.
 * @param row The updated row element.
 * @returns The ID or index of the updated row.
 * @throws Error if there is an issue updating the row.
 */
export function updateRow(rowId: RowID, row: RowElement): number;
