import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './Photo';

const API = 'http://192.168.99.100:8080'

@Injectable({providedIn : 'root'})
export class PhotoService{
    
    constructor(private http: HttpClient){}

    listFromUser(userName: string){
        return this.http
        .get<Photo[]>(API + '/'+ userName +'/photos');
    }

    listFromUserPaginated(userName: string, page: number){
        const params = new HttpParams().append('page', page.toString());
        return this.http
        .get<Photo[]>(API + '/'+ userName +'/photos', { params });
    }
}