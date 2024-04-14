import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppointmentDao } from '../infrastructure/daos/appointment.dao';
import {
  IListOfAppointmentsUseCase,
  ListOfAppointmentsUseCase,
} from '../application/usecases/list-of-appointments.usecase';
import { ValidateCommon } from '../commons/validate';
import { CreateAnAppointmentUseCase } from '../application/usecases/create-an-appointmenta.usecase';

@Controller('/api')
export class AppointmentController {
  constructor(
    private readonly _listAllAppointment: ListOfAppointmentsUseCase,
    private readonly _createAnAppointment: CreateAnAppointmentUseCase,
  ) {}

  @Get('/')
  get(@Req() req): any {
    return 'hello';
  }

  @Get('/appointments')
  list(@Req() req): any {
    const validateOutput = ValidateCommon.validateList({
      date: req.query.date,
    });
    return this._listAllAppointment.execute(validateOutput);
  }

  @Post('/appointments')
  create(@Body() body): any {
    const validateOutput = ValidateCommon.validateCreate({
      date: body.date,
      time: body.time,
      duration: body.duration,
      scheduling: body.scheduling,
    });
    return this._createAnAppointment.execute(validateOutput);
  }
}
