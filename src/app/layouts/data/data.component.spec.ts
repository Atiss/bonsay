import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { DataComponent } from './data.component';

class MockDataService {
  getData() {
    return new Observable(subscriber => {
      subscriber.next(
        [{
          confirmed: 101451,
          country: "Barbados",
          date: "2022-09-04",
          deaths: 544,
          new_confirmed: 54,
          people_vaccinated: 54.04715822188934,
          recovered: 0,
        }])
    })
  }
}

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers: [
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
