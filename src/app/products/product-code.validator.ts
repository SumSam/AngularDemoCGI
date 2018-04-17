import { AbstractControl, ValidatorFn, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

// validation function
export function validateCleanProduct(): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean } | null => {

        const isValid = c.value ? c.value.match(/^[A-Z0-9]/i) : true;

        if (isValid) {
            return null;
        } else {
            return {
                'cleanProd': true
            };
        }
    };
}

@Directive({
    selector: '[ad-cleanProd][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ProductCodeValidator, multi: true }]
})
export class ProductCodeValidator implements Validator {
    validator: ValidatorFn;

    constructor() {
        this.validator = validateCleanProduct();
        }
    validate(c: AbstractControl): { [key: string]: any; } {
        return this.validator(c);
    }
    registerOnValidatorChange?(fn: () => void): void {
    }
}
