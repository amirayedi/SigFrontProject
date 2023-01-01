import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-gestionstreamer',
  templateUrl: './gestionstreamer.component.html',
  styleUrls: ['./gestionstreamer.component.css']
})
export class GestionstreamerComponent implements OnInit {

  constructor(private userService: UserService,private router:Router ,private route : ActivatedRoute) { }

  public users!: User[];
  ngOnInit(): void {
    this.getUsers();
    
  }
  public getUsers():void{
    this.userService.getListeUserByRole().subscribe(data=>{
      this.users=data;
    });
  }

  updateuser(id:number){
    this.router.navigate(['../modifieruser',id],{relativeTo:this.route});
  }



  deleteuser(id:number){
    this.userService.deleteUser(id).subscribe(data=>{
      console.log("deleted");
      this.router.navigate(['home']);
    })

  }
}
