import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import Club from "../../app/model/club";

@Component({
    selector: 'item-details',
    templateUrl: './details/components/details.component.html'
})
export default class DetailsComponent {

    @Input()
    item: Club;

    constructor(private router: Router) {

    }

    back():void {
        this.router.navigate([ '/' ]);
    }
}
