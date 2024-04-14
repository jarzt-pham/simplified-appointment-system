import { PostgresqlConfiguration } from '@/infrastructures';
import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { AppointmentDto, SettingDto } from 'src/features/domain';
import { TABLE } from '../tbls';

export interface ISettingsDao {
  find(): Promise<SettingDto[]>;
}

@Injectable()
export class SettingsDao implements ISettingsDao {
  private _db: Knex;
  constructor() {}

  async find() {
    this._db = await PostgresqlConfiguration.createKnexConnection();
    
    const query = this._db
      .select('*')
      .from(TABLE.SETTINGS.NAME)

    return query;
  }
}
