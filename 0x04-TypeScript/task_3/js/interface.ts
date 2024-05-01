/* Description: 
   This TypeScript code defines a RowID type
   and a RowElement interface.
   The RowID type represents the identifier for
   a row in a data structure or database table.
   The RowElement interface defines the structure 
   of a row in a dataset, including properties for 
   firstName, lastName, and an optional age. 
   */
export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
