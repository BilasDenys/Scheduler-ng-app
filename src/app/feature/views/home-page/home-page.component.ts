import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  showModal: boolean;

  events: any = [
    {
      start: '10:00',
      end: '11:00',
      title: 'Some test event',
      description: 'Some description event',
    },
    {
      start: '9:00',
      end: '10:00',
      title: 'Some test event',
      description: 'Some description event',
    },
  ];

  constructor() {
    this.showModal = false;
  }

  ngOnInit(): void {}

  createEvent() {
    this.showModalToggle();
  }

  showModalToggle() {
    this.showModal = !this.showModal;
  }

  changeMonth(event: boolean) {
    this.showModal = event;
  }

  addNewEvent(event: any) {
    this.events.push(event);
  }
}
