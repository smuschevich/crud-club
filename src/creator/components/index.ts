import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    template: '<item-add></item-add>'
})
export class MainComponent {
    constructor(private titleService: Title) {
        titleService.setTitle('Add club');
    }
}