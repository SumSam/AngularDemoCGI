import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionComponent } from './accordion/accordion.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { CustomLoopDirective } from './custom-loop/custom-loop.directive';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { SharedModuleService } from './shared-module.service';


@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule, // IMP! All directives for template driven forms reside in this module.
    ReactiveFormsModule,
    AccordionComponent,
    HighlightDirective,
    CustomLoopDirective,
    ConvertToSpacesPipe
  ],
  declarations: [AccordionComponent, HighlightDirective, CustomLoopDirective, ConvertToSpacesPipe ],
  providers: [SharedModuleService],
})
export class SharedModule { }
