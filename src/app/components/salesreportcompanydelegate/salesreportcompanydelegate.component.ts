import { Component, OnInit } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'app-salesreportcompanydelegate',
  templateUrl: './salesreportcompanydelegate.component.html',
  styleUrls: ['./salesreportcompanydelegate.component.css']
})
export class SalesreportcompanydelegateComponent implements OnInit {
  public DateToObject: any;
  public DateFromObject: any;
  public DateFrom: Date;
  public DateTo: Date;
  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };
  constructor() {

    this.DateFromObject = {
      'date': {
        'year': 2000,
        'month': 1,
        'day': 1
      },
      'jsdate': '2000-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2018'
    };
    this.DateToObject = {
      'date': {
        'year': 2030,
        'month': 1,
        'day': 1
      },
      'jsdate': '2030-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2030'
    };
    this.DateFrom = this.DateFromObject.jsdate;
    this.DateTo = this.DateToObject.jsdate;
  }

  ngOnInit() {
  }
  public GetDateFrom(event) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }

}
