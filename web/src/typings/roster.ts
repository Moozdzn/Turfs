export interface Roster {
  citizenid: string;
  firstname: string;
  lastname: string;
  source: number;
  role: number;
  label: string;
  phoneNumber: string;
  online: boolean;
  isboss?: boolean;
}
