export type AppointmentCreatePayload = {
  id: string;
  date: Date;
  time: number;
  duration: number;
  availableSlots: number;
  scheduling: Date;
};

export type AppointmentUpdatePayload = {
  date: Date;
  time: number;
  availableSlots: number;
};

export interface IAppointment {
        id: string;
        date: Date;
        time: number;
        availableSlots: number;
        create({ id, date, time, availableSlots }: AppointmentCreatePayload): Appointment;
        update({ date, time, availableSlots }: AppointmentCreatePayload): Appointment;
}

export class Appointment implements IAppointment {
  private _id: string;
  private _date: Date;
  private _time: number;
  private _duration: number;
  private _availableSlots: number;
  private _scheduling: Date;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get time(): number {
    return this._time;
  }

  set time(value: number) {
    this._time = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  get availableSlots(): number {
    return this._availableSlots;
  }

  set availableSlots(value: number) {
    this._availableSlots = value;
  }

  get scheduling(): Date {
    return this._scheduling;
  }

  set scheduling(value: Date) {
    this._scheduling = value;
  }


  create({ id, date, duration, scheduling, time, availableSlots }: AppointmentCreatePayload) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.duration = duration;
    this.scheduling = scheduling;
    this.availableSlots = availableSlots;

    return this;
  }

  update({ date, time, scheduling, duration, availableSlots }: AppointmentCreatePayload) {
    this.date = date;
    this.time = time;
    this.availableSlots = availableSlots;
    this.duration = duration;
    this.scheduling = scheduling;

    return this;
  }
}
