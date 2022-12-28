import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user!:User

  selectedFile! : File;
  imgUrl: any
  message!: string;
  constructor( private router: Router,private userService:UserService, private httpClient: HttpClient,public login: LoginService) { }

  idLog!:Number
  ngOnInit(): void {
    this.idLog=Number(localStorage.getItem("loggedUser"));
    console.log("ééééééééééééééééééééé"+this.idLog);
    this.getUser();
  }

  getUser(){
    
    this.userService.getUserById(Number(this.idLog)).pipe(
      map((user: User) => this.user = user)
    ).subscribe()
  }

  onFileSelected(event:any) {
    if (event.target.files.length > 0) {
      this.selectedFile=<File>event.target.files[0];
      console.log(event);
      var reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (_event) => {
        this.imgUrl = reader.result;
      }
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.put('http://localhost:8080/upload/'+this.idLog, formData
    , { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
      this.router.navigate(['/home']);

    }
    );
  }

  actionEdit(){
    this.router.navigate(['/editProfile']);
  }
}