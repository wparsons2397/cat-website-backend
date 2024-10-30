import { Controller, Get, Param } from '@nestjs/common';
import { CommsService } from './comms.service';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get()
  getHello(): string {
    return this.commsService.getHello();
  }

  // TEST ID 618f4ed6-1c5b-4993-a149-f64700bf31dd
  @Get('your-next-delivery/:id')
  findOne(@Param('id') id: string): Object {

    return this.commsService.getAssociatedInfo(id);
    // return JSON.stringify([this.commsService.getAssociatedInfo(id)]);
    // return `${id}`;
  }
}
