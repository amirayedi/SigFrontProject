import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl ="http://localhost:8080/";

  
  constructor(private httpClient: HttpClient){}
  
 
  public getListeUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}getAllUsers`);
  }

  public getListeUserByRole(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}getStreamersUsers`);
  }

  public createUser(user:User) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}addUser`,user);
  }

  public loginUser(user:User) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}login`,user);
  }

  public updateUser(id:number,user:User): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}updateUser/${id}`,user);
  }

  public getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}getUser/${id}`);
  }

  public deleteUser(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}deleteUser/${id}`);
  }


}

