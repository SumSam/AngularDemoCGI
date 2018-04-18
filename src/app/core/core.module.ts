import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModuleService } from './core-module.service';

@NgModule({
    imports: [CommonModule],
    exports: [
    ],
    declarations: []
    // providers: [SharedModuleService],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [CoreModuleService]
        };
    }
}
