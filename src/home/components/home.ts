import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'home',
    template: require('./home.html')
})

export class HomeComponent {
    @Input() items;

    constructor(
        private router: Router
    ) { }

    details(identity: string) {
        this.router.navigate([ '/details/', identity ]);
    }

    add() :void{
        this.router.navigate([ '/add']);
    }

}