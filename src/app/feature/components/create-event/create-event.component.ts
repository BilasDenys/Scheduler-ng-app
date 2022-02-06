import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  public _showModal!: boolean;
  public date!: Date;

  public selectedHours!: any;

  title!: string;
  description!: string;

  form!: FormGroup;

  public setStartHour;
  public setStartMinutes;

  public startHour!: number;
  public endHour!: number;
  public endMinutes!: number;
  public startMinute!: number;
  @Output() emitShowModal!: EventEmitter<boolean>;
  @Output() emitNewEvent!: EventEmitter<any>;

  constructor(private fb: FormBuilder) {
    this._showModal = true;
    this.emitShowModal = new EventEmitter<boolean>();
    this.date = new Date();
    this.startHour = this.currentHour;
    this.endHour = this.currentHour + 1;
    this.endMinutes = this.currentMinutes;

    this.setStartHour = this.currentHour;
    this.setStartMinutes = this.currentMinutes;

    this.emitNewEvent = new EventEmitter();
    this.emitShowModal = new EventEmitter();
  }

  ngOnInit(): void {}

  get currentHour(): number {
    return this.date.getHours();
  }

  get currentMinutes(): number {
    return this.date.getMinutes();
  }

  closeModal(): void {
    const modal = (this._showModal = !this._showModal);
    this.emitShowModal.emit(modal);
  }

  changeStartHour(step: number): void {
    if (step > 0) {
      this.startHour++;

      if (this.startHour > 23) {
        this.startHour = 0;
      } else {
        this.startHour--;

        if (this.startHour < 0) {
          this.startHour = 23;
        }
      }
    }
  }

  changeStartMinutes(step: number): void {
    // if (step > 0) {
    //   this.startMinutes++;
    //   if (this.startMinutes > 59) {
    //     this.startMinutes = 0;
    //     this.changeStartHour(1);
    //   }
    // } else {
    //   this.startMinutes--;
    //   if (this.startMinutes < 0) {
    //     this.startMinutes = 59;
    //     this.changeStartHour(-1);
    //   }
    // }
  }

  changeEndHour(step: number): void {
    // if (step > 0) {
    //   this.endHour++;
    //   if (this.endHour > 23) {
    //     this.endHour = 0;
    //   }
    // } else {
    //   this.endHour--;
    //   if (this.endHour < 0) {
    //     this.endHour = 23;
    //   }
    // }
  }

  changeEndMinutes(step: number): void {
    // if (step > 0) {
    //   this.endMinutes++;
    //   if (this.endMinutes > 59) {
    //     this.endMinutes = 0;
    //     this.changeEndHour(1);
    //   }
    // } else {
    // this.endMinutes--;
    // if (this.endMinutes < 0) {
    //   this.endMinutes = 59;
    //   this.changeEndHour(-1);
    // }
    // }
  }

  addEvent() {
    const modal = (this._showModal = !this._showModal);
    this.emitShowModal.emit(modal);

    const eventDTO = {
      start: this.startHour,
      end: this.endHour,
      title: this.title,
      description: this.description,
    };
    console.log(eventDTO);

    this.emitNewEvent.emit(eventDTO);
  }
}
