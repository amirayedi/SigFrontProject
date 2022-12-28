import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  idLog!:Number
  user!:User

  constructor( private router: Router,private userService:UserService, private httpClient: HttpClient,public login: LoginService) { }

  ngOnInit(): void {
    this.idLog=Number(localStorage.getItem("loggedUser"));
    this.userService.getUserById(Number(this.idLog)).subscribe(data =>{
      this.user=data;
    })
    console.log(this.user.firstName)
  }

  onSubmit(){
    this.userService.updateUser(this.user.id,this.user).subscribe(data=>{
      this.router.navigate(['/profil'])

    })
  }

}