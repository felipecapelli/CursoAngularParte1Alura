import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/Photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  
  constructor (
    private photoService: PhotoService,
    private activatedRounte: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userName = this.activatedRounte.snapshot.params.userName;

    this.photoService.listFromUser(userName)
    .subscribe(photos =>this.photos = photos);
  }

}
