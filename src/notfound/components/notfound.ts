import { Title } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
    template: `
    <p class="not-found-text">Sorry, the page you were looking for doesn’t exist.</p>
    `
})

export class NotFoundComponent {
    constructor(
        private titleService: Title
    ) {
        titleService.setTitle('Error 404');
    }
}