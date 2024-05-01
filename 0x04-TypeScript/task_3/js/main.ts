/* Description:
   This TypeScript code demonstrates basic CRUD
   operations (Create, Read, Update, Delete) on rows.
   It imports the RowID and RowElement types from
   the 'interface' module, as well as the CRUD functions
   from the 'crud' module.
   The code creates a new row, inserts it into 
   a data structure using CRUD.insertRow,
   updates the row using CRUD.updateRow,
   and deletes the row using CRUD.deleteRow. */
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

try {
  const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
  };

  const newRowID: RowID = CRUD.insertRow(row);

  const updatedRow: RowElement = { ...row, age: 23 };
  CRUD.updateRow(newRowID, updatedRow);

  CRUD.deleteRow(newRowID);
} catch (error) {
  console.error('An error occurred:', error);
}
