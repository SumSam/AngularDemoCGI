import { Injectable } from '@angular/core';

@Injectable()
export class ComponentLevelService {

  static instanceCounter = 0;
  constructor() {
    ComponentLevelService.instanceCounter++;
    console.log(`${ComponentLevelService.instanceCounter} instance/s of  ComponentLevelService created`);
  }

}
