import { ComponentFactoryResolver, Injectable, Inject, ViewContainerRef } from '@angular/core';
import { Type } from '@angular/compiler/src/core';

@Injectable()
export class DynamicComponentLoaderService {
    factoryResolver: any;

    private _rootViewContainer: ViewContainerRef;
    set rootViewContainer(viewContainerRef: ViewContainerRef) {
        this._rootViewContainer = viewContainerRef;
    }

    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
         this.factoryResolver = factoryResolver;
    }

    addDynamicComponent(dynamicComponent: any) {
        const factory = this.factoryResolver.resolveComponentFactory(dynamicComponent);
        const component = factory.create(this._rootViewContainer.parentInjector);
        this._rootViewContainer.insert(component.hostView);
    }
}
