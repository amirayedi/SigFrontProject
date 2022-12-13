import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingdataService } from '../service/sharingdata.service';
import { User } from '../user';
import { UserService } from '../service/user.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hideLoginNav:string="";
  approvalText:string="";
  constructor(private router: Router,private login: LoginService, private userService: UserService,private appService: SharingdataService) { }
  message:String="";
  user:User = new User();
  public loggedUser!: number;
  public isLoggedIn: Boolean = false;
  public roles!: string;
  public users!: User[];
  public validUser: Boolean = false;
  ngOnInit(): void {
    this.getUsers();
  }
  submit(){
      console.log("here3")
      this.users.forEach((curUser) => {
        if (this.user.email == curUser.email && this.user.password == curUser.password) {
          console.log("curUser " + curUser)
          this.validUser = true;
          this.loggedUser = curUser.id;
          this.isLoggedIn = true;
          this.roles = curUser.role;
          this.user.role=curUser.role;
         
          localStorage.setItem('loggedUser', String(this.loggedUser));
          localStorage.setItem('isLoggedIn', String(this.isLoggedIn))
        }
      })
      console.log(this.validUser)
    if(this.validUser==true){
    this.router.navigate(['/tabledashboard']);
    this.approvalText="ttt"
    this.appService.updateApprovalMessage(this.approvalText);
    this.hideLoginNav="true"
    this.appService.updateLoginNav(this.hideLoginNav);
      }
    }
    public getUsers():void{
      this.userService.getListeUser().subscribe(data=>{
        this.users=data;
      });
    }
  }
  


