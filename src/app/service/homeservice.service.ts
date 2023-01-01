import { EventEmitter, Injectable, Output } from '@angular/core';
import { Objet } from '../objet';
import { User } from '../user';
import { ObjetService } from './objet.service';
import { UserService } from './user.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private userService:UserService) { }
  user!:User
  
  makeCapitalPopup(data: any): string {
   
    return `` +
    `
      
      <div>the Object of the streaming video is about :</div> 
      <h2>${data.objet.value}</h2>    
      <p>you can follow our streamer with the link below :</p> 
      <a href="${ data.lien }">link</a>
      
     `
  }
  
}
