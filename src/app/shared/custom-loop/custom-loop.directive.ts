import {
  Directive,
  ViewContainerRef,
  OnChanges,
  TemplateRef,
  Input,
  SimpleChanges,
 } from '@angular/core';

@Directive({
  selector: '[adCustomLoop]'
})
export class CustomLoopDirective implements OnChanges {

  @Input() adCustomLoopOf: Array<any>;

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<any>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const input of this.adCustomLoopOf) {
      this.container.createEmbeddedView(this.template,  {
        $implicit: input,
        index: this.adCustomLoopOf.indexOf(input),
       });
    }
  }


}
