import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  showModal: boolean;

  constructor() {
    this.showModal = false;
  }

  ngOnInit(): void {}

  createEvent() {
    this.showModalToggle();
    console.log(this.showModal);
  }

  showModalToggle() {
    this.showModal = !this.showModal;
  }

  changeMonth(event: boolean) {
    this.showModal = event;
  }
}
