import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResouver } from './photos/photo-list/photo-list.resouver';

const routes : Routes = [
    {
        path : 'user/:userName', 
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResouver
        }
    },
    {
        path : 'p/add', 
        component: PhotoFormComponent
    },
    {
        path : '**', 
        component : NotFoundComponent
    }
];

@NgModule({
    imports : [ 
        RouterModule.forRoot(routes) 
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule{ }