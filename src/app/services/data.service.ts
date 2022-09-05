import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CasesApi, CovidData, History, HistoryApi, HistoryDate, Vaccines, VaccinesApi } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    const cases = this.http.get(`${environment.dataApi}cases`);
    const vaccines = this.http.get(`${environment.dataApi}vaccines`);
    const history = this.http.get(`${environment.dataApi}history`, {params: {status: 'confirmed'}});
    return forkJoin([cases, vaccines, history]).pipe(map(res => {
      const casesData: CasesApi = res[0] as CasesApi;
      const vaccinesData: VaccinesApi = res[1] as VaccinesApi;
      const historyData: HistoryApi = res[2] as HistoryApi;

      return this.mapData(casesData, vaccinesData, historyData);
      
    }))
  }

  mapData(casesData: CasesApi, vaccinesData: VaccinesApi, historyData: HistoryApi) { // grouping data in one array of objects
    const countries = Object.keys(casesData).map(key => {
      const country: CovidData = {
        country: key,
        confirmed: casesData[key]?.All.confirmed,
        recovered: casesData[key]?.All.recovered,
        deaths: casesData[key]?.All.deaths,
        people_vaccinated: this.countVaccinated(vaccinesData[key]?.All),
        ...this.countHistory(historyData[key]?.All),
      }
      return country;
    })
    return countries;
  }

  countVaccinated(data: Vaccines & {population: number}) {
    return (data?.people_vaccinated * 100) / data?.population; // counting percents of vaccination
  }

  countHistory(data: HistoryDate): History {
    const [lastConfirmed, previousConfirmed] = Object.values(data.dates); // getting values for 2 last dates for counting new confirms
    return {
      new_confirmed: lastConfirmed - previousConfirmed,
      date: Object.keys(data.dates)[0],
    }

  }
}
