import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import DataService from "../../app/services/data.service";
import Club from "../../app/model/club";

@Component({
    template: `
    <item-details [item]="club"></item-details>
    `
})
export class MainComponent {

    club: Club;

    constructor(private titleService: Title, dataService: DataService, route: ActivatedRoute) {
        titleService.setTitle('Club details');
        dataService.findElement(route.snapshot.params[ 'id' ]).then((club: Club) => {
            this.club = club;
            titleService.setTitle(club.name);
        });

    }
}