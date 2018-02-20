import { Component } from '@angular/core';
import {DateService} from "../services/date.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DateService]
})
export class AppComponent {
  month =[];
  date = new Date();
  months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  monthName = this.months[this.date.getMonth()];

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.month = this.dateService.getMonth(this.date);
  }

  showMonth(diff) {
    this.month = [];
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + diff, 1);
    this.monthName = this.months[this.date.getMonth()];
    this.ngOnInit();
  }

}
