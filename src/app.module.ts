import { Module } from '@nestjs/common';
import { AppointmentController } from './features/presentation/appointments.controller';
import { AppointmentDao } from './features/infrastructure/daos/appointment.dao';
import { ListOfAppointmentsUseCase } from './features/application/usecases';
import { CreateAnAppointmentUseCase } from './features/application/usecases/create-an-appointmenta.usecase';
import { SettingsDao } from './features/infrastructure/daos/settings.dao';

@Module({
  imports: [],
  controllers: [AppointmentController],
  providers: [
    //usecases
    ListOfAppointmentsUseCase,
    CreateAnAppointmentUseCase,
    
    //daos
    AppointmentDao,
    SettingsDao
  ]
})
export class AppModule {}
