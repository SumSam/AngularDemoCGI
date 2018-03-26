import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from './accordion/accordion.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { CustomLoopDirective } from './custom-loop/custom-loop.directive';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';


@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule,
    AccordionComponent,
    HighlightDirective,
    CustomLoopDirective,
    ConvertToSpacesPipe
  ],
  declarations: [AccordionComponent, HighlightDirective, CustomLoopDirective, ConvertToSpacesPipe ],
})
export class SharedModule { }
