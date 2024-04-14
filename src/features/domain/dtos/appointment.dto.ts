export type AppointmentDto = {
  id: string;
  date: Date;
  time: string;
  available_slots: number;
  scheduling: Date;
  duration: number;
};
