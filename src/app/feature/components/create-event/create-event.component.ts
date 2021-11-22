import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  public hours!: number;
  public minutes!: number;
  public _showModal!: boolean;
  public date!: Date;
  public description!: string;

  @Output() emitShowModal!: EventEmitter<boolean>;

  constructor() {
    this._showModal = true;
    this.emitShowModal = new EventEmitter<boolean>();
    this.date = new Date();
  }

  ngOnInit(): void {

    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();

  }

  showModal(event: any) {
    // // event.stopPropagation();
    // const parentClassName = 'modal';
    // // const modal = (this._showModal = !this._showModal);
    // // console.log(modal);
    // // this.emitShowModal.emit(modal);
    // if (event.target.className === parentClassName) {
    //   const modal = (this._showModal = !this._showModal);
    //   this.emitShowModal.emit(modal);
    // }
    // console.log(event);
  }

  closeModal() {
    const modal = (this._showModal = !this._showModal);
    this.emitShowModal.emit(modal);
  }

  onSubmit() {

    this.emitShowModal.emit(!this._showModal);
  }

  changeTime(step: number): void {
    const newHours = this.hours + step;

    if (newHours < this.hours) {
      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();

    } else {
      this.hours = newHours;

    }

  }

  changeMinutes(step: number): void {
    let newMinutes;
    step !== 0 ? newMinutes = this.minutes + step : newMinutes = this.minutes;

    if (this.hours !== this.date.getHours()) {

      this.minutes = newMinutes;

    } else {
      newMinutes < this.minutes ? this.minutes = this.date.getMinutes() : this.minutes = newMinutes;
    }

  }
}
