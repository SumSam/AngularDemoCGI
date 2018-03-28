import { Component } from '@angular/core';
import { AppLevelService } from './app-level-service';

@Component({
  selector: 'ad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(appLevelServiceInstance: AppLevelService) { }
  pageTitle = 'Angular Demo';
}
