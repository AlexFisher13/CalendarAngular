import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  month = [];

  getMonth(date) {
    let week = [];
    let endPrevMonth;
    let startDate = new Date(date.getFullYear(), date.getMonth(), 1);

    //заполнение перед месяцем
    if (startDate.getDay() != 1) {
      if (startDate.getDay() == 0) {
        endPrevMonth = 7;
      } else {
        endPrevMonth = startDate.getDay();
      }
      console.log(startDate);
      for (let i = 1; i < endPrevMonth; i++) {
        week.push("");
      }
    }
    //заполнение месяца
    for (let i = 1; i <= this.getDaysInMonth(date); i++) {
      week.push(i);
      if (week.length % 7 == 0) {
         this.month.push(week);
         week = [];
      }
    }
    //заполнение после месяца
    while(week.length!=7){
      week.push("")
    }
    this.month.push(week);


    return this.month;
  }

  getDaysInMonth(date) {
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay.getDate();
  }
}
