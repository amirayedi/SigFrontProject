import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl ="http://localhost:8080/user/";

  
  constructor(private httpClient: HttpClient){}
  
 
  public getListeUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}getAll`);
  }

  public createUser(user:User) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}createUser`,user);
  }

  public loginUser(user:User) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}login`,user);
  }

  public updateUser(id:number,user:User): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}update/${id}`,user);
  }



}
