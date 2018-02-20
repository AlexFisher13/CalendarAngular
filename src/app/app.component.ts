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

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.month = this.dateService.getMonth();
  }

}
