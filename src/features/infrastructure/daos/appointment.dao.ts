import { PostgresqlConfiguration } from '@/infrastructures';
import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { AppointmentDto } from 'src/features/domain';
import { TABLE } from '../tbls';

export interface IAppointmentDao {
    create: (appointment: AppointmentDto) => Promise<AppointmentDto[]>;
  //   update: (appointment: AppointmentDto) => Promise<AppointmentDto>;
  //   delete: (appointment: AppointmentDto) => Promise<boolean>;
  find({ date }: { date: string }): Promise<AppointmentDto[]>;
  findByDateAndTime: ({ date, time }: { date: string, time: string }) => Promise<AppointmentDto[]>;
}

@Injectable()
export class AppointmentDao implements IAppointmentDao {
  private _db: Knex;
  constructor() {}

  async find({ date }: { date: string }) {
    this._db = await PostgresqlConfiguration.createKnexConnection();
    
    const query = this._db
      .select('*')
      .from(TABLE.APPOINTMENT.NAME)
      .where(TABLE.APPOINTMENT.FIELDS.DATE, date);

    return query;
  }

  async findByDateAndTime({ date, time }: { date: string, time: string }) {
        this._db = await PostgresqlConfiguration.createKnexConnection();
        
        const query = this._db
          .select('*')
          .from(TABLE.APPOINTMENT.NAME)
          .where(TABLE.APPOINTMENT.FIELDS.DATE, date).and.where(TABLE.APPOINTMENT.FIELDS.TIME, time);
    
        return query;
      }

  async create(appointment: AppointmentDto) {
        this._db = await PostgresqlConfiguration.createKnexConnection();
        const query = this._db.from(TABLE.APPOINTMENT.NAME).insert(appointment);
        
        return query as any;
  }
}
