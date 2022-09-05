export interface Cases {
    confirmed: number;
    recovered: number;
    deaths: number;
  }
  
  export interface CasesApi { // interface for data which came from api
    [key: string]: {
      All: Cases
    }
  }
  
  export interface Vaccines { 
    people_vaccinated: number;
  }
  
  export interface VaccinesApi { // interface for data which came from api
    [key: string]: {
      All: Vaccines & {population: number}
    }
  }
  
  export interface History {
    date: string;
    new_confirmed: number;
  }
  
  export interface HistoryDate {
    dates: {
      [date: string]: number;
    };
  }
  
  export interface HistoryApi { // interface for data which came from api
    [key: string]: {
      All: HistoryDate;
    }
  }
  
  export type CovidData = Cases & Vaccines & History & {country: string};
