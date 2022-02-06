import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  weekDays: string[];
  nav: number;
  displayDate: string;
  clickedDay: any;
  calendar: any[];
  events$!: Observable<any>;

  constructor() {
    this.calendar = [];
    this.nav = 0;
    this.displayDate = '';
    this.weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  }

  ngOnInit() {
    this.generate();
  }

  generate() {
    const calendar = [];
    const date = new Date();

    if (this.nav !== 0) {
      date.setMonth(new Date().getMonth() + this.nav);
    }

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayInMonth = new Date(year, month, 1);

    const dateString = firstDayInMonth.toLocaleDateString('ru-RU', {
      weekday: 'short',
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });

    const paddingDays = this.weekDays.indexOf(dateString.split(', ')[0]);

    for (let index = 1; index <= daysInMonth + paddingDays; index++) {
      this.displayDate = `${date.toLocaleDateString('en-us', {
        month: 'long',
        year: 'numeric',
      })}`;

      if (index > paddingDays) {
        calendar.push({
          value: index - paddingDays,
          current: index - paddingDays === day && this.nav === 0,
          padding: false,
          active: index === day,
          date: new Date(year, month, index).toLocaleDateString('ru-RU'),
          events: [],
        });
      } else {
        calendar.push({
          value: null,
          current: false,
          padding: true,
          active: false,
          date: new Date(year, month, index).toLocaleDateString('ru-RU'),
          events: [],
        });
      }
    }

    this.calendar = calendar;
  }

  clickDay(day: any) {
    if (!!day.padding) {
      return;
    }

    this.clickedDay = day;
  }

  changeMonth(value: number): void {
    value > 0 ? this.nav++ : this.nav--;
    this.generate();
  }
}
