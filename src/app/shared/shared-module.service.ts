import { Injectable } from '@angular/core';

@Injectable()
export class SharedModuleService {
  // IMP! To revisit when touching shared module
  // Also when the Product module is lazy loaded, then need to check its effect as
  // Shared module is not imported as part of AppModule
static instanceCounter = 0;
  constructor() {
    SharedModuleService.instanceCounter++;
    console.log(`${SharedModuleService.instanceCounter} instance/s of  SharedModuleService created`);
  }

}
