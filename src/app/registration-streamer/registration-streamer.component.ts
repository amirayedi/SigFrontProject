import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-registration-streamer',
  templateUrl: './registration-streamer.component.html',
  styleUrls: ['./registration-streamer.component.css']
})
export class RegistrationStreamerComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  message:String="";
  user:User = new User();
  ngOnInit(): void {
  }
  onSubmit(){
    this.user.role="streamer";  
          this.userService.createUser(this.user).subscribe(data => {
            console.log(data);
            this.router.navigate(['/gestionstreamer']);
          })
    }
    

}
