import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

const tableName = 'tbl_settings';

export async function seed(knex: Knex): Promise<void> {
  await knex(tableName).del();

  await knex(tableName).insert([
    { id: uuidv4(), name: 'min_duration', value: { data: 5 * 60 * 1000 } }, //30mins
    { id: uuidv4(), name: 'max_duration', value: { data: 30 * 60 * 1000 } }, //5mins
    { id: uuidv4(), name: 'max_slots', value: { data: 1 } },
    { id: uuidv4(), name: 'start_time', value: { data: '09:00' } },
    { id: uuidv4(), name: 'end_time', value: { data: '18:00' } },
  ]);
}
