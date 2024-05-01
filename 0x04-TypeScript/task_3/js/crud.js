export function insertRow(row) {
  try {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  } catch (error) {
    throw new Error('An error occurred while inserting the row.');
  }
}

export function deleteRow(rowId) {
  try {
    console.log('Delete row id', rowId);
    return;
  } catch (error) {
    throw new Error('An error occurred while deleting the row.');
  }
}

export function updateRow(rowId, row) {
  try {
    console.log(`Update row ${rowId}`, row);
    return rowId;
  } catch (error) {
    throw new Error('An error occurred while updating the row.');
  }
}
