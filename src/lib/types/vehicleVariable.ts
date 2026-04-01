export interface VehicleVariable {
  DataType: string;
  Description: string;
  GroupName: string;
  ID: number;
  Name: string;
}

export interface VehicleVariablesResponse {
  Count: number;
  Message: string;
  Results: VehicleVariable[];
  SearchCriteria: string | null;
}
