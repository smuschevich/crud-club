import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import DataService from "../../app/services/data.service";

@Component({
    template: `
    <home [items]="dataService.findElements()"></home>
    `
})

export class MainComponent {

    constructor(private titleService: Title,
                private dataService: DataService) {
        titleService.setTitle('Clubs');
    }
}