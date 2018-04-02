import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    template: `
        <div class="row">
            <h4 class="col-md-10">Secondary Route Demo</h4>
            <span class="col-md-2">
                <a class="btn btn-default"
                    (click)="close()">
                    x
                </a>
            </span>
        </div>
        <div>
           Secondary route message works!!!
        </div>
    `,
    styles: [
        '.message-row { margin-bottom: 10px }'
    ]
})
export class MessageComponent {

    constructor(private router: Router) { }

    close(): void {
        // Close the popup.
        this.router.navigate([{ outlets: { popup: null } }]);
    }
}

