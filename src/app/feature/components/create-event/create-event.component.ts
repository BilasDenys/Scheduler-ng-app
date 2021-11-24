import {Component, EventEmitter, OnInit, Output} from '@angular/core';


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

  public minutes!: number;
  public hours!: number;
  public endHours!: number;
  public endMinutes!: number;


  @Output() emitShowModal!: EventEmitter<boolean>;

  constructor() {
    this._showModal = true;
    this.emitShowModal = new EventEmitter<boolean>();
    this.date = new Date();
    this._currentMinutes = 0;
    this._currentHour = 0;
    this.hours = 0;
    this.minutes = 0;
    this.endHours = this.currentHour;
    this.endMinutes = this.currentMinutes + 30;

    if (this.endMinutes > 60) {
      this.endHours++;
      this.endMinutes = this.currentMinutes + 30 - 60;
    } else {
      this.endMinutes = this.currentMinutes + 30
    }

  }

  ngOnInit(): void {

    this.hours = this.currentHour;
    this.minutes = this.currentMinutes;

  }

  closeModal() {
    const modal = (this._showModal = !this._showModal);
    this.emitShowModal.emit(modal);
  }

  changeHour(step: number): void {

    const newHours = this.hours + step;

    if (newHours <= this.currentHour) {

      this.hours = this.currentHour;
      this.minutes = this.currentMinutes;

    } else {

      this.hours = newHours;

    }

  }

  changeMinutes(step: number): void {

    let newMinutes;
    step !== 0 ? newMinutes = this.minutes + step : newMinutes = this.minutes;

    if (this.hours !== this.currentHour) {

      this.minutes = newMinutes;

    } else {
      newMinutes < this.currentMinutes ? this.minutes = this.currentMinutes : this.minutes = newMinutes;
    }

  }

  changeEndHours(step: number): void {

  }

  changeEndMinutes(step: number): void {

    let newMinutes = this.endMinutes + step;

    if(newMinutes < this.endMinutes ) {

      const fixMinutes = this.currentMinutes + 30;
      console.log(fixMinutes);

      fixMinutes > 60 ? this.endHours++ && ( this.endMinutes = (this.currentMinutes + 30) - 60) : this.endMinutes = newMinutes;

      // this.endMinutes =
      // this.endMinutes = this.currentMinutes + 30
    } else {
      this.endMinutes = newMinutes;
    }


    // if (newMinutes < this.endMinutes || newMinutes === this.endMinutes) {
    //   this.endMinutes = this.currentMinutes + 30;
    // } else {
    //   this.endMinutes = newMinutes;
    // }


    // if(newEndMinutes < this.endMinutes ) {
    //   this.endMinutes = this.currentMinutes + 30;
    // } else {
    //   this.endMinutes = newEndMinutes;
    // }


    // if (this.endMinutes < newEndMinutes) {
    //   this.endMinutes = this.currentMinutes + 30;
    // } else if (newEndMinutes > 60) {
    //   this.endHours++;
    //   this.endMinutes = this.currentMinutes + 30 - 60;
    // } else {
    //   this.endMinutes = newEndMinutes;
    // }

  }

  get currentHour() {
    return this.date.getHours();
  }

  get currentMinutes() {
    return this.date.getMinutes();
  }


}
