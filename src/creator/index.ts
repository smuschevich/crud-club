import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/index';
import AddComponent from "./components/add.component";

const routes: Routes = [
    { path: 'add', component: MainComponent}
];

@NgModule({
    declarations: [
        MainComponent,
        AddComponent
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

export class CreatorModule {
}
