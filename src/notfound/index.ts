import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/notfound';

const routes: Routes = [
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];


@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})

export class NotFoundModule {
}