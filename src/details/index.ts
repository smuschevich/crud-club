import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/index';
import DetailsComponent from "./components/details.components";

const routes: Routes = [
    { path: 'details/:id', component: MainComponent}
];

@NgModule({
    declarations: [
        MainComponent,
        DetailsComponent
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

export class DetailsModule {
}
