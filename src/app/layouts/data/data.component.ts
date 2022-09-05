import { Component, OnInit } from '@angular/core';
import { CovidData } from '../../models/data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  data!: CovidData[];
  isLoading = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.dataService.getData().subscribe(res => {
      this.isLoading = false;
      this.data = res;
      console.log(this.data)
    });
  } 

}
