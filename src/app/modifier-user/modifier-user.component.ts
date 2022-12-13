import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent implements OnInit {

  id!:number;
  user:User = new User();
  constructor(private userService:UserService, private login : LoginService,private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data =>{
      this.user=data;
      console.log(this.user);
    })
  }

  onSubmit(){
    this.userService.updateUser(this.id,this.user).subscribe(data=>{
      
          this.router.navigate(['gestionstreamer']);
      
        
      })
    
      
    }
  }


