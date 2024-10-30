import { CommsService } from './comms.service';
export declare class CommsController {
    private readonly commsService;
    constructor(commsService: CommsService);
    getHello(): string;
    findOne(id: string): Object;
}
