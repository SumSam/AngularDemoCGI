import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule,
    AccordionComponent
  ],
  declarations: [AccordionComponent ],
})
export class SharedModule { }
