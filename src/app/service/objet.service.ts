import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objet } from '../objet';

@Injectable({
  providedIn: 'root'
})
export class ObjetService {

  private baseUrl ="http://localhost:8080/";

  
  constructor(private httpClient: HttpClient){}
  
 
  public getListeObjet(): Observable<Objet[]>{
    return this.httpClient.get<Objet[]>(`${this.baseUrl}getAllObjets`);
  }

  public createObjet(user:Objet) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}addObjet`,user);
  }


  public updateObjet(id:number,user:Objet): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}updateObjet/${id}`,user);
  }

  public getObjetById(id:number):Observable<Objet>{
    return this.httpClient.get<Objet>(`${this.baseUrl}getObjet/${id}`);
  }

  public deleteObjet(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}deleteObjet/${id}`);
  }
}
