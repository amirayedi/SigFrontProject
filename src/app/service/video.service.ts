import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private baseUrl ="http://localhost:8080/";

  
  constructor(private httpClient: HttpClient){}
  
 
  public getListeVideo(): Observable<Video[]>{
    return this.httpClient.get<Video[]>(`${this.baseUrl}getAllVideos`);
  }

  public createVideo(video:Video,idObjet:number,idUser:number) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}addVideo/${idUser}/${idObjet}`,video);
  }
}
