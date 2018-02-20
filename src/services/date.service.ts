import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  getMonth(date) {

    let month = [];
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
      for (let i = 1; i < endPrevMonth; i++) {
        week.push("");
      }
    }
    //заполнение месяца
    for (let i = 1; i <= this.getDaysInMonth(date); i++) {
      week.push(i);
      if ((week.length % 7 == 0)) {
         month.push(week);
         week = [];
      }
    }
    //заполнение после месяца
    if (week.length != 0) {
      while((week.length != 7)){
        week.push("")
      }
      month.push(week);
    }

    return month;
  }

  getDaysInMonth(date) {
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay.getDate();
  }
}
