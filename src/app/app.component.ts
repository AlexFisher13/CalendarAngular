import { Component } from '@angular/core';
import {DateService} from "../services/date.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DateService]
})
export class AppComponent {
  month =[[]];
  date = new Date();

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.month = this.dateService.getMonth(this.date);
  }

  showMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
    this.month = this.dateService.getMonth(this.date);
  }

}
