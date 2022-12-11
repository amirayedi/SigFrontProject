import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  message:String="";
  user:User = new User();
  ngOnInit(): void {
  }
  onSubmit(){
    
    this.user.role="p";
    this.router.navigate(['/login']);
    /*this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);
    }, error =>{
      this.message="Email déja utilisé";
        })
    }*/
  
  }
}
