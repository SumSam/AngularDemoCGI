import { Injectable } from '@angular/core';

@Injectable()
export class AppLevelService {
  // IMP! Need to revisit when Product module is loaded as a lazy loaded module
  // try with @SkipSelf to see if a lazy loaded module can share the same instance
  // of service with the root injector
static instanceCounter = 0;
  constructor() {
    AppLevelService.instanceCounter++;
    console.log(`${AppLevelService.instanceCounter} instance/s of  AppLevelService created`);
  }
}
