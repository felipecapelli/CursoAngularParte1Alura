import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { filterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shered/components/card/card.module';
import { SearchComponent } from './search/search.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverModule } from 'src/app/shered/directives/darken-on-over/darken-on-over.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        filterByDescription,
        SearchComponent
    ],
    imports : [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class PhotoListModule{}