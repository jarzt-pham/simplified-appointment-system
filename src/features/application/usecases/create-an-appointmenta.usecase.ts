import { Appointment, AppointmentDto, SettingDto } from '@/features/domain';
import {
  AppointmentDao,
  IAppointmentDao,
} from '@/features/infrastructure/daos/appointment.dao';
import { SettingsDao } from '@/features/infrastructure/daos/settings.dao';
import { generateUuid } from '@/utils';
import { Injectable } from '@nestjs/common';

export type CreateAnAppointmentUseCaseInput = {
  date: Date;
  time: string;
  duration: number;
  scheduling: Date;
};

export type CreateAnAppointmentUseCaseOutput = {
  date: Date;
  time: string;
  duration: number;
  scheduling: Date;
};

export interface ICreateAnAppointmentUseCase {
  execute({ date }: CreateAnAppointmentUseCaseInput): Promise<any>;
}

@Injectable()
export class CreateAnAppointmentUseCase implements ICreateAnAppointmentUseCase {
  constructor(private readonly _appointmentDao: AppointmentDao,
    private readonly _settingsDao: SettingsDao) {}

  async execute(payload: CreateAnAppointmentUseCaseInput): Promise<any> {
    let settingsDto: SettingDto[];
    try{
      settingsDto = await this._settingsDao.find();
    }catch(err){
      console.log({err});
      throw new Error('Error fetching settings');
    }

    const settings = new Map();
    settingsDto.forEach((setting) => {
      settings.set(setting.key, setting.value.data);
    })
  
    //will enhance this later
    const maxSlots = settings.get('max_slots');
    
    //find
    let isExist: AppointmentDto[];
    try {
      isExist = await this._appointmentDao.findByDateAndTime({date: payload.date as any, time: payload.time});
    } catch (err) {
      console.log({ err });
      throw new Error('Error fetching appointments');
    }

    if(isExist.length > 0 ){
      throw new Error('Appointment is full slot');
    }
   
    
    let appointmentDto: AppointmentDto;
    const entity = new Appointment();
    entity.create({
      id: generateUuid(),
      availableSlots: 1,
      ...payload,
    });

    const dtoPayload: AppointmentDto = {
      available_slots: entity.availableSlots,
      date: entity.date,
      time: entity.time,
      scheduling: entity.scheduling,
      id: entity.id,
      duration: entity.duration,
    };

    try {
      appointmentDto = await this._appointmentDao.create(dtoPayload);
    } catch (err) {
      console.log({ err });
      throw new Error('Error fetching appointments');
    }

    return appointmentDto;
  }
}

export const mapperAppointments = (payload: AppointmentDao[]) => {
  return payload.map((appointment: any) => {});
};
