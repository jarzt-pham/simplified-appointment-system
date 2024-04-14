import { AppointmentDto } from "src/features/domain";

export interface IAppointmentDao {
        create: (appointment: AppointmentDto) => Promise<AppointmentDto>;
        update: (appointment: AppointmentDto) => Promise<AppointmentDto>;
        delete: (appointment: AppointmentDto) => Promise<boolean>;
        find: (appointment: AppointmentDto) => Promise<AppointmentDto[]>;
        findById: (appointment: AppointmentDto) => Promise<AppointmentDto>;
        }

export class AppointmentDao {
        
}