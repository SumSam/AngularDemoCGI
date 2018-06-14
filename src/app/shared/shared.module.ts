import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionComponent } from './accordion/accordion.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { CustomLoopDirective } from './custom-loop/custom-loop.directive';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { SharedModuleService } from './shared-module.service';
import { DynamicComponentLoaderService } from './dynamicComponentLoader.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule, // IMP! All directives for template driven forms reside in this module.
    ReactiveFormsModule,
    NgbModule,
    AccordionComponent,
    HighlightDirective,
    CustomLoopDirective,
    ConvertToSpacesPipe,
  ],
  declarations: [AccordionComponent, HighlightDirective, CustomLoopDirective, ConvertToSpacesPipe ],
  providers: [SharedModuleService, DynamicComponentLoaderService],
})
export class SharedModule { }
