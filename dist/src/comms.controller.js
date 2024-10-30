"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsController = void 0;
const common_1 = require("@nestjs/common");
const comms_service_1 = require("./comms.service");
let CommsController = class CommsController {
    constructor(commsService) {
        this.commsService = commsService;
    }
    getHello() {
        return this.commsService.getHello();
    }
    findOne(id) {
        return this.commsService.getAssociatedInfo(id);
    }
};
exports.CommsController = CommsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CommsController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('your-next-delivery/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], CommsController.prototype, "findOne", null);
exports.CommsController = CommsController = __decorate([
    (0, common_1.Controller)('comms'),
    __metadata("design:paramtypes", [comms_service_1.CommsService])
], CommsController);
//# sourceMappingURL=comms.controller.js.map