"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const comms_module_1 = require("./comms.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(comms_module_1.CommsModule);
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map