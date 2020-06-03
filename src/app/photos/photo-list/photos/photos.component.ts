import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/Photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos : Photo[];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos) this.rows = this.groupColumns(this.photos);
  }


  groupColumns(photos: Photo[]){
    const newRows = [];
    for (let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3)) //pega 0,1,2 ; 3,4,5 etc (o ultimo item seria < e 3 e não <=3 por ex)
    }
    return newRows;
  }

}
