import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/index';
import { HomeComponent } from './components/home';

const routes: Routes = [
    { path: '', component: MainComponent}
];

@NgModule({
    declarations: [
        MainComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        Title
    ]
})

export class HomeModule {
}
