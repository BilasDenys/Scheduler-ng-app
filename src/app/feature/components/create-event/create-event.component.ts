import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  public _showModal!: boolean;
  public date!: Date;

  public _currentMinutes!: number;
  public _currentHour!: number;
  @Output() emitShowModal!: EventEmitter<boolean>;
  public startHour!: number;
  public startMinutes!: number;
  public endHour!: number;
  public endMinutes!: number;
  constructor() {
    this._showModal = true;
    this.emitShowModal = new EventEmitter<boolean>();
    this.date = new Date();
    this.startHour = this.currentHour;
    this.startMinutes = 0;
    this.endHour = 0;
    this.endMinutes = 0;
  }

  ngOnInit(): void {}

  closeModal() {
    const modal = (this._showModal = !this._showModal);
    this.emitShowModal.emit(modal);
  }

  changeStartHour(step: number) {
    if (step > 0) {
      this.startHour++;
      if (this.startHour > 23) {
        this.startHour = 0;
      }
    } else {
      this.startHour--;
      if (this.startHour < 0) {
        this.startHour = 23;
      }
    }
  }

  changeStartMinutes(step: number) {
    if (step > 0) {
      this.startMinutes++;
      if (this.startMinutes > 59) {
        this.startMinutes = 0;
        this.changeStartHour(1);
      }
    } else {
      this.startMinutes--;
      if (this.startMinutes < 0) {
        this.startMinutes = 59;
        this.changeStartHour(-1);
      }
    }
  }

  changeEndHour(step: number) {
    if (step > 0) {
      this.endHour++;
      if (this.endHour > 23) {
        this.endHour = 0;
      }
    } else {
      this.endHour--;
      if (this.endHour < 0) {
        this.endHour = 23;
      }
    }
  }
  changeEndMinutes(step: number) {
    if (step > 0) {
      this.endMinutes++;
      if (this.endMinutes > 59) {
        this.endMinutes = 0;
        this.changeEndHour(1);
      }
    } else {
      this.endMinutes--;
      if (this.endMinutes < 0) {
        this.endMinutes = 59;
        this.changeEndHour(-1);
      }
    }
  }

  get currentHour() {
    return this.date.getHours();
  }

  get currentMinutes() {
    return this.date.getMinutes();
  }
}
