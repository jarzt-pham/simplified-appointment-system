import { AppointmentDto } from '@/features/domain';
import {
  AppointmentDao,
  IAppointmentDao,
} from '@/features/infrastructure/daos/appointment.dao';
import { Injectable } from '@nestjs/common';

export type ListOfAppointmentsUseCaseInput = {
  date: string;
};

export type ListOfAppointmentsUseCaseOutput = {
  date: string;
  time: string;
  available_slots: number;
};

export interface IListOfAppointmentsUseCase {
  execute({ date }: ListOfAppointmentsUseCaseInput): Promise<any>;
}

@Injectable()
export class ListOfAppointmentsUseCase implements IListOfAppointmentsUseCase {
  constructor(private readonly _appointmentDao: AppointmentDao) {}

  async execute({ date }: ListOfAppointmentsUseCaseInput): Promise<any> {
    let appointmentsDto: AppointmentDto[];
    try {
      appointmentsDto = await this._appointmentDao.find({ date });
    } catch (err) {
      console.log({ err });
      throw new Error('Error fetching appointments');
    }

    return appointmentsDto;
  }
}

export const mapperAppointments = (payload: AppointmentDao[]) => {
  return payload.map((appointment: any) => {});
};
