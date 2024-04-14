import { CONFIGURATION } from '@/configs';
import { AppointmentDto } from '@/features/domain';
import {
  AppointmentDao,
  IAppointmentDao,
} from '@/features/infrastructure/daos/appointment.dao';
import { TimeArr } from '@/utils';
import { Injectable } from '@nestjs/common';
import * as moment from "moment";

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

    return mapperAppointments(appointmentsDto);
  }
}

export const mapperAppointments = (payload: AppointmentDto[]) => {
  const dateParse = moment(payload[0].date).format(CONFIGURATION.DATE_FORMAT);

  const output = [];
  TimeArr.forEach((time) => {
    const isExist = payload.find((appointment) => appointment.time === time);

    if (isExist) {
      output.push({
        date: dateParse,
        time,
        available_slots: 0,
      });
    } else
      output.push({
        date: dateParse,
        time,
        available_slots: 1,
      });
  });

  return output;
};
