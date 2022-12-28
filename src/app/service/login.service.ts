import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../service/user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  // public users: User[] = [{ "email": "testttttttt@gmail.com", "password": "mahdimenaa", "role": "ms" },
  // { "email": "rachidmenaa@gmail.com", "password": "rachidmenaa", "role": "ms" },
  // { "email": "hamdi@gmail.com", "password": "aaa", "role": "mp" }];

  public users!: User[];
  public loggedUser!: string;
  public isLoggedIn: Boolean = false;
  public roles!: string; //stocker le role du user connecté
  constructor(private userService: UserService,private router:Router) { }


  ngOnInit(): void {
  }
  

  //fin signIn()

  LogOut(){
    this.isLoggedIn = false;
    this.loggedUser = "";
    this.roles = "";
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLoggedIn',String(this.isLoggedIn))
    this.router.navigate(['./navbar0']);
  }


  setLoggedUserFromLocalStorage(login : string){   //pour ne pas à chaque fois faire entrer les coordonnées d'un utilisateur déjà connecté
    
    this.isLoggedIn = true;
    this.loggedUser = login;
    this.getUserRole(login);
    
  }

  getUserRole(ch:string){
    this.users.forEach((curUser) =>{
      if( curUser.email == ch){
        this.roles = curUser.role;
      }
    })
  }

  

}//fin clase login.service.ts
