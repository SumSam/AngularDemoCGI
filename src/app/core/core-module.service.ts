import { Injectable } from '@angular/core';

@Injectable()
export class CoreModuleService {
  // IMP! To revisit when touching shared module
  // Also when the Product module is lazy loaded, then need to check its effect as
  // Shared module is not imported as part of AppModule
static instanceCounter = 0;
  constructor() {
    CoreModuleService.instanceCounter++;
    console.log(`${CoreModuleService.instanceCounter} instance/s of  CoreModuleService created`);
  }

}
