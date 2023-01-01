import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { map } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

 

  public show:boolean = true;
  user!:User
  constructor( private userService:UserService) { }

  idLog!:Number
  ngOnInit(): void {
    this.idLog=Number(localStorage.getItem("loggedUser"));
    console.log("ééééééééééééééééééééé"+this.idLog);
    this.sleepMethode();
    
  }

  private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

private async sleepMethode()
{
  this.getUser();
  await this.delay(300);
    if(this.user.role!="admin"){
      
      this.show = !this.show;
    }
}
  getUser(){
    
    this.userService.getUserById(Number(this.idLog)).pipe(
      map((user: User) => this.user = user)
    ).subscribe()
    
  }

}
